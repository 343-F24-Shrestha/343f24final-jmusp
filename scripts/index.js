// Set to track already selected courses
const selectedCoursesSet = new Set();

function addDropdown(preselectedValue = '') {
const dropdownContainer = document.getElementById('dropdown-container');

// Create form group for dropdown
const formGroup = document.createElement('div');
formGroup.classList.add('form-group');

const label = document.createElement('label');
label.textContent = `Class ${dropdownContainer.children.length + 1}`;
label.classList.add('form-label');

const select = document.createElement('select');
select.classList.add('form-select');

// Add default "Select a class" option
const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.textContent = 'Select a class';
select.appendChild(defaultOption);

// Populate dropdown options with course-level data
classData.forEach(course => {
    const option = document.createElement('option');
    option.value = course.course; // Store course code as value
    option.textContent = `${course.course}: ${course.title}`;
    if (course.course === preselectedValue) {
        option.selected = true;
    }
    select.appendChild(option);
});

// Event listener for dropdown changes
select.addEventListener('change', () => {
    const previousValue = select.dataset.previousValue || '';
    const currentValue = select.value;

    if (previousValue) {
        selectedCoursesSet.delete(previousValue); // Remove previous value from set
    }

    if (currentValue) {
        if (selectedCoursesSet.has(currentValue)) {
            alert('You have already selected this course.');
            select.value = ''; // Reset the dropdown value
        } else {
            selectedCoursesSet.add(currentValue);
            select.dataset.previousValue = currentValue; // Update stored value
        }
    } else {
        select.dataset.previousValue = ''; // Clear previous value
    }

    // Check if all dropdowns are filled before adding a new one
    if (allDropdownsFilled()) {
        addDropdown();
    }
});

// Append label and dropdown to the form group
formGroup.appendChild(label);
formGroup.appendChild(select);

// Append form group to the container
dropdownContainer.appendChild(formGroup);

// Track the initial preselected value in the set
if (preselectedValue) {
    selectedCoursesSet.add(preselectedValue);
    select.dataset.previousValue = preselectedValue;
}
}    

function allDropdownsFilled() {
const selects = document.querySelectorAll('#dropdown-container select');
return Array.from(selects).every(select => select.value !== '');
}

function updateScheduleTable() {
const schedule = JSON.parse(localStorage.getItem('schedule'));
const tableBody = document.getElementById('schedule-table-body');
tableBody.innerHTML = '';

if (schedule) {
    const sortedSchedule = sortSchedule(schedule);

    sortedSchedule.forEach(entry => {
        const outsideTimeNote = entry.outsidePreferredTime ? '<br><span class="outside-time-note">Outside preferred time range</span>' : '';
        const daysDisplay = entry.section.days === "TBA" ? "TBA" : entry.section.days;
        const timesDisplay = entry.section.times === "TBA" ? "TBA" : entry.section.times;

        // Find the rating data for the instructor
        const ratingInfo = ratingData.find(rating => rating.name === entry.section.instructor);
        const rating = ratingInfo ? ratingInfo.rating : "N/A";

        // Determine the background color based on the rating
        const ratingColor = getRatingColor(rating);

        // Add a new column for ratings
        const row = `
            <tr>
                <td>${entry.course}</td>
                <td>${entry.section.section}</td>
                <td>${daysDisplay}</td>
                <td>${timesDisplay}${outsideTimeNote}</td>
                <td>${entry.section.instructor}</td>
                <td style="background-color: ${ratingColor}; text-align: center;">
                    ${rating !== "N/A" ? rating.toFixed(1) : "N/A"}
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}
}

// color code based on rating
function getRatingColor(rating) {
if (rating === "N/A" || rating === 0) return "#f6f6f6"; // Neutral gray for N/A or no rating

// Define the base colors
const lowRatingColor = [255, 10, 0]; // Red for ratings below 2
const highRatingColor = [10, 220, 10];  // Green for ratings 2 and above

if (rating < 2) {
    return `rgba(${lowRatingColor[0]}, ${lowRatingColor[1]}, ${lowRatingColor[2]}, 0.5)`; // Solid red for <2
}

// Normalize rating for the scale between 2 and 5
const normalizedRating = (Math.min(Math.max(rating, 2), 5) - 2) / 3; // Map 2-5 to 0-1

const r = Math.round(lowRatingColor[0] + (highRatingColor[0] - lowRatingColor[0]) * normalizedRating);
const g = Math.round(lowRatingColor[1] + (highRatingColor[1] - lowRatingColor[1]) * normalizedRating);
const b = Math.round(lowRatingColor[2] + (highRatingColor[2] - lowRatingColor[2]) * normalizedRating);

return `rgba(${r}, ${g}, ${b}, 0.5)`; // Pale gradient colors
}

function sortSchedule(schedule) {
const dayOrder = { 'Mo': 1, 'Tu': 2, 'We': 3, 'Th': 4, 'Fr': 5 };
return schedule.slice().sort((a, b) => {
    // Handle "TBA" entries to always appear last
    if (a.section.days === "TBA") return 1;
    if (b.section.days === "TBA") return -1;

    // Compare by earliest day
    const aDays = getEarliestDay(a.section.days);
    const bDays = getEarliestDay(b.section.days);
    const dayComparison = dayOrder[aDays] - dayOrder[bDays];
    if (dayComparison !== 0) return dayComparison;

    // If same day, compare by start time
    const aTime = parseTime(a.section.times)[0];
    const bTime = parseTime(b.section.times)[0];
    return aTime - bTime;
});
}

function getEarliestDay(daysString) {
const dayCodes = ['Mo', 'We', 'Fr', 'Tu', 'Th'];
for (const code of dayCodes) {
    if (daysString.includes(code)) return code;
}
return 'Fr'; // Default to Friday if no match
}

function generateSchedule(selectedCourses, preferredStartTime, preferredEndTime, prioritizeRatings) {
    let schedules = [];
    const courseSections = selectedCourses.map(courseCode => {
        return classData.find(course => course.course === courseCode);
    });

    function recurse(index, currentSchedule) {
        if (index === courseSections.length) {
            schedules.push([...currentSchedule]);
            return true; // Found at least one valid schedule
        }

        const course = courseSections[index];
        let sectionsWithinTime = [];
        let sectionsOutsideTime = [];

        // Separate sections based on time preference
        for (const section of course.sections) {
            if (section.days === "TBA" || section.times === "TBA" || isWithinPreferredTime(section, preferredStartTime, preferredEndTime)) {
                sectionsWithinTime.push(section);
            } else {
                sectionsOutsideTime.push(section);
            }
        }

        // Sort sections based on professor ratings if prioritization is enabled
        if (prioritizeRatings) {
            sectionsWithinTime = sortSectionsByRating(sectionsWithinTime);
            sectionsOutsideTime = sortSectionsByRating(sectionsOutsideTime);
        }

        // Try sections within preferred time first
        for (const section of sectionsWithinTime) {
            if (!hasConflict(currentSchedule, section)) {
                currentSchedule.push({ course: course.course, section: section, outsidePreferredTime: false });
                if (recurse(index + 1, currentSchedule)) {
                    return true; // Stop after finding one valid schedule
                }
                currentSchedule.pop();
            }
        }

        // If no valid schedule, try sections outside preferred time
        for (const section of sectionsOutsideTime) {
            if (!hasConflict(currentSchedule, section)) {
                currentSchedule.push({ course: course.course, section: section, outsidePreferredTime: true });
                if (recurse(index + 1, currentSchedule)) {
                    return true; // Stop after finding one valid schedule
                }
                currentSchedule.pop();
            }
        }

        return false; // No valid section found for this course
    }

    const success = recurse(0, []);
    return success ? schedules[0] : null;
}

function sortSectionsByRating(sections) {
    return sections.slice().sort((a, b) => {
        const ratingA = getInstructorRating(a.instructor);
        const ratingB = getInstructorRating(b.instructor);
        return ratingB - ratingA;
    });
}

function getInstructorRating(instructorName) {
    const ratingInfo = ratingData.find(rating => rating.name === instructorName);
    return ratingInfo ? ratingInfo.rating : 2.2; // Default to 2.2 if no rating
}

function isWithinPreferredTime(section, preferredStartTime, preferredEndTime) {
if (section.times === "TBA") return true;
const [start, end] = parseTime(section.times);
return start >= preferredStartTime && end <= preferredEndTime;
}

function hasConflict(schedule, newSection) {
for (const entry of schedule) {
    if (sectionsOverlap(entry.section, newSection)) {
        return true;
    }
}
return false;
}

function sectionsOverlap(section1, section2) {
if (section1.days === "TBA" || section2.days === "TBA") return false;
const days1 = splitDays(section1.days);
const days2 = splitDays(section2.days);
const daysOverlap = days1.some(day => days2.includes(day));
if (!daysOverlap) return false;

const [start1, end1] = parseTime(section1.times);
const [start2, end2] = parseTime(section2.times);

return (start1 < end2 && start2 < end1);
}

function splitDays(daysString) {
const regex = /(Mo|Tu|We|Th|Fr)/g;
let match;
const days = [];
while ((match = regex.exec(daysString)) !== null) {
    days.push(match[0]);
}
return days;
}

function parseTime(timeRange) {
const [startTime, endTime] = timeRange.split(' - ');
return [convertToMinutes(startTime), convertToMinutes(endTime)];
}

function convertToMinutes(timeStr) {
const regex = /^(\d{1,2}):(\d{2})(AM|PM)$/;
const match = timeStr.match(regex);
if (!match) return null;
let [_, hours, minutes, modifier] = match;
hours = parseInt(hours);
minutes = parseInt(minutes);

if (modifier === 'PM' && hours !== 12) {
    hours += 12;
}
if (modifier === 'AM' && hours === 12) {
    hours = 0;
}
return hours * 60 + minutes;
}
document.getElementById('classForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get selected courses
    const selectedCourses = [];
    const selects = document.querySelectorAll('#dropdown-container select');
    selects.forEach(select => {
        if (select.value) {
            selectedCourses.push(select.value);
        }
    });

    // Get time preferences
    const startTimeInput = document.getElementById('startTime').value.trim() || '12:00AM';
    const endTimeInput = document.getElementById('endTime').value.trim() || '11:59PM';

    const prioritizeRatings = document.getElementById('prioritizeRatings').checked;

    const requirements = {
        selectedCourses,
        preferredStartTime: startTimeInput,
        preferredEndTime: endTimeInput,
        prioritizeRatings,
    };

    // Save requirements to localStorage
    localStorage.setItem('requirements', JSON.stringify(requirements));

    // Generate schedule
    const preferredStartTime = convertToMinutes(startTimeInput);
    const preferredEndTime = convertToMinutes(endTimeInput);

    if (preferredStartTime === null || preferredEndTime === null) {
        alert('Please enter valid preferred times in the format HH:MMAM/PM.');
        return;
    }

    const schedule = generateSchedule(selectedCourses, preferredStartTime, preferredEndTime, prioritizeRatings);

    if (schedule) {
        // Save schedule to localStorage
        localStorage.setItem('schedule', JSON.stringify(schedule));

        // Close the modal
        const modalElement = document.getElementById('classModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();

        // Update the schedule table
        updateScheduleTable();
    } else {
        alert('No valid schedule found for the selected courses.');
    }
});
document.getElementById('resetButton').addEventListener('click', () => {
    localStorage.removeItem('requirements');
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear all dropdowns
    selectedCoursesSet.clear(); // Clear the selected courses set
    addDropdown(); // Add a single dropdown as default
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('prioritizeRatings').checked = false; // Reset checkbox
});

document.addEventListener('DOMContentLoaded', () => {
const savedRequirements = JSON.parse(localStorage.getItem('requirements'));
if (savedRequirements) {
    populateRequirements(savedRequirements);
} else {
    addDropdown(); // Add one dropdown if no saved requirements
}
updateScheduleTable();
});

document.querySelector('[data-bs-target="#classModal"]').addEventListener('click', () => {
const dropdownContainer = document.getElementById('dropdown-container');
if (!dropdownContainer.children.length) {
    addDropdown(); // Ensure at least one dropdown exists
}
});

function populateRequirements(requirements) {
    const { selectedCourses, preferredStartTime, preferredEndTime, prioritizeRatings } = requirements;

    // Populate dropdowns
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear existing dropdowns

    selectedCourses.forEach(course => {
        addDropdown(course);
    });

    // Populate time preferences
    document.getElementById('startTime').value = preferredStartTime || '';
    document.getElementById('endTime').value = preferredEndTime || '';

    // Set the checkbox state
    document.getElementById('prioritizeRatings').checked = prioritizeRatings || false;
}

document.getElementById('downloadDataButton').addEventListener('click', function () {
    const schedule = JSON.parse(localStorage.getItem('schedule')) || [];
    const requirements = JSON.parse(localStorage.getItem('requirements')) || { startTime: '', endTime: '', classes: [] };

    // Prepare data structure
    const exportData = {
        Schedule: schedule.map(entry => ({
            Course: entry.course,
            Section: entry.section.section,
            Days: entry.section.days,
            Times: entry.section.times,
            Instructor: entry.section.instructor,
            OutsidePreferredTime: entry.outsidePreferredTime || false,
        })),
        Requirements: {
            StartTime: requirements.preferredStartTime || 'Not Set',
            EndTime: requirements.preferredEndTime || 'Not Set',
            Classes: requirements.selectedCourses || [],
            PrioritizeRatings: requirements.prioritizeRatings || false,
        },
    };

    // Convert data to JSON string
    const dataStr = JSON.stringify(exportData, null, 2);

    // Create a Blob for download
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a temporary download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'schedule_data.json';
    a.style.display = 'none';

    // Append to the document and trigger download
    document.body.appendChild(a);
    a.click();

    // Cleanup
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
});

document.getElementById('resetAllButton').addEventListener('click', () => {
    // Clear all saved data in localStorage
    localStorage.removeItem('requirements');
    localStorage.removeItem('schedule');

    // Clear dropdowns and reset inputs
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear all dropdowns
    selectedCoursesSet.clear(); // Clear the selected courses set
    addDropdown(); // Add a single dropdown as default
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('prioritizeRatings').checked = false; // Reset checkbox

    // Clear the schedule table
    const tableBody = document.getElementById('schedule-table-body');
    tableBody.innerHTML = '';

    alert('All data has been reset.');
});

// Get reference to the file input and button
const jsonFileInput = document.getElementById('jsonFileInput');


// Event listener for the file input change event
jsonFileInput.addEventListener('change', function () {
    const file = jsonFileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const data = JSON.parse(event.target.result);

            // Validate the structure of the imported data
            if (data.Schedule && data.Requirements) {
                // Map data to internal format
                const schedule = data.Schedule.map(entry => ({
                    course: entry.Course,
                    section: {
                        section: entry.Section,
                        days: entry.Days,
                        times: entry.Times,
                        instructor: entry.Instructor,
                    },
                    outsidePreferredTime: entry.OutsidePreferredTime || false,
                }));
                const requirements = {
                    selectedCourses: data.Requirements.Classes || [],
                    preferredStartTime: data.Requirements.StartTime || '',
                    preferredEndTime: data.Requirements.EndTime || '',
                    prioritizeRatings: data.Requirements.PrioritizeRatings || false,
                };

                // Save the imported data to localStorage
                localStorage.setItem('schedule', JSON.stringify(schedule));
                localStorage.setItem('requirements', JSON.stringify(requirements));

                // Update the schedule and dropdowns
                populateRequirements(requirements);
                updateScheduleTable();

                alert('Schedule successfully imported!');
            } else {
                alert('Invalid JSON structure. Please upload a valid schedule file.');
            }
        } catch (error) {
            alert('Failed to parse the JSON file. Please ensure it is properly formatted.');
        }
    };

    reader.readAsText(file); // Read the file as text
});