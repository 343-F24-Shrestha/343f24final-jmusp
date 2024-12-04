document.addEventListener('DOMContentLoaded', () => {
    const schedule = JSON.parse(localStorage.getItem('schedule'));
    if (schedule) {
      renderSchedule(schedule);
    }
  });
  
  function renderSchedule(schedule) {
    const tbaClasses = []; // Collect classes with "TBA" info
  
    schedule.forEach(entry => {
      const course = entry.course;
      const section = entry.section;
      const days = section.days;
      const times = section.times;
      const instructor = section.instructor;
      const title = getCourseTitle(course);
  
      if (days === "TBA" || times === "TBA") {
        // Add TBA classes to a separate list
        tbaClasses.push({ course, section, instructor, title });
      } else {
        const dayList = parseDays(days);
        dayList.forEach(day => {
          const dayElement = document.getElementById(day);
          if (dayElement) {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.textContent = course;
            eventElement.style.top = calculateTopOffset(times) + 'px';
            eventElement.style.height = calculateHeight(times) + 'px';
            eventElement.style.textAlign = "center";
            eventElement.style.fontSize = "15px";
            eventElement.style.fontWeight = "bold";
            eventElement.style.lineHeight = calculateHeight(times)/1.1 + 'px';
  
            eventElement.addEventListener('click', () => {
              showModal(course, title, section.section, days, times, instructor);
            });
  
            dayElement.querySelector('.day-content').appendChild(eventElement);
          }
        });
      }
    });
  
    // Render TBA section if there are TBA classes
    if (tbaClasses.length > 0) {
      renderTBASection(tbaClasses);
    }
  }
  
  function renderTBASection(tbaClasses) {
    // Remove existing TBA container if it exists
    const existingTBAContainer = document.querySelector('.tba-container');
    if (existingTBAContainer) {
      existingTBAContainer.remove();
    }
  
    // Create a new container for the TBA section
    const container = document.createElement('div');
    container.classList.add('tba-container');
    container.style.display = "flex";
    container.style.alignItems = "flex-start"; // Align items at the top
    container.style.marginTop = "20px";
  
    // Add TBA title
    const title = document.createElement('h3');
    title.textContent = "Date/time TBA:";
    title.style.marginRight = "10px";
    title.style.fontSize = "1.2rem";
    title.style.color = "#333";
    container.appendChild(title);
  
    // Create a wrapper for the TBA classes
    const tbaList = document.createElement('div');
    tbaList.style.display = "inline-block"; // Inline layout for TBA items
    tbaList.style.position = "relative";
    tbaList.style.whiteSpace = "nowrap"; // Prevent wrapping
  
    let currentLeftOffset = 0; // Track the horizontal offset for placement
  
    // Add TBA classes
    tbaClasses.forEach(entry => {
      const tbaItem = document.createElement('div');
      tbaItem.classList.add('event');
      tbaItem.textContent = `${entry.course}`;
      tbaItem.style.width = "180px"; // Increased width
      tbaItem.style.backgroundColor = "#450084";
      tbaItem.style.color = "white";
      tbaItem.style.padding = "5px";
      tbaItem.style.borderRadius = "4px";
      tbaItem.style.textAlign = "center";
      tbaItem.style.position = "absolute";
      tbaItem.style.left = `${currentLeftOffset}px`; // Apply horizontal placement
      tbaItem.style.fontSize = "14px";
      tbaItem.style.fontWeight = "bold";
      tbaItem.style.top = "0px"; // Align all items in a row
      tbaItem.style.boxSizing = "border-box"; // Ensure padding doesn't overflow
      tbaItem.style.cursor = "pointer";
  
      currentLeftOffset += 190; // Add spacing for the next item (width + margin)
  
      // Add event listener for modal display
      tbaItem.addEventListener('click', () => {
        showModal(entry.course, entry.title, entry.section.section, "TBA", "TBA", entry.instructor);
      });
  
      tbaList.appendChild(tbaItem);
    });
  
    // Append the TBA list to the container
    container.appendChild(tbaList);
  
    // Append the container to the main content
    document.querySelector('.container').appendChild(container);
  }
  
  function parseDays(daysString) {
    const daysMap = {
      'Mo': 'Monday',
      'Tu': 'Tuesday',
      'We': 'Wednesday',
      'Th': 'Thursday',
      'Fr': 'Friday'
    };
    const days = [];
    const regex = /(Mo|Tu|We|Th|Fr)/g;
    let match;
    while ((match = regex.exec(daysString)) !== null) {
      days.push(daysMap[match[0]]);
    }
    return days;
  }
  
  function calculateTopOffset(times) {
    const [startTime, endTime] = times.split(' - ');
    const startMinutes = timeStringToMinutes(startTime);
    const dayStart = 8 * 60; // 8:00 AM in minutes
    const pixelsPerMinute = 50 / 60; // 50px per hour
    return (startMinutes - dayStart) * pixelsPerMinute;
  }
  
  function calculateHeight(times) {
    const [startTime, endTime] = times.split(' - ');
    const startMinutes = timeStringToMinutes(startTime);
    const endMinutes = timeStringToMinutes(endTime);
    const duration = endMinutes - startMinutes;
    const pixelsPerMinute = 50 / 60; // 50px per hour
    return duration * pixelsPerMinute;
  }
  
  function timeStringToMinutes(timeStr) {
    const [time, modifier] = timeStr.split(/(AM|PM)/);
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (modifier === 'AM' && hours === 12) {
      hours = 0;
    }
    return hours * 60 + minutes;
  }
  
  function getCourseTitle(courseCode) {
    const course = classData.find(c => c.course === courseCode);
    return course ? course.title : '';
  }
  
  function showModal(course, title, section, days, times, instructor) {
    // Set basic information in the modal
    document.getElementById('modalCourse').textContent = course;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSection').textContent = section;
    document.getElementById('modalDays').textContent = days;
    document.getElementById('modalTime').textContent = times;
    document.getElementById('modalInstructor').textContent = instructor;
  
    // Fetch RMP info
    const professorData = ratingData.find(rating => rating.name === instructor);
  
    if (professorData) {
      // Format and display RMP info
      const rating = professorData.rating || "N/A";
      const difficulty = professorData.difficulty || "N/A";
      const wouldTakeAgain = professorData.would_take_again
        ? `${professorData.would_take_again}%`
        : "N/A";
  
      // Add RMP info to modal body
      const modalBody = document.querySelector('#classModal .modal-body');
      const rmpInfo = document.createElement('div');
      rmpInfo.id = 'rmpInfo'; // Add an ID for repeated updates
      rmpInfo.innerHTML = `
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Difficulty:</strong> ${difficulty}</p>
        <p><strong>Would Take Again:</strong> ${wouldTakeAgain}</p>
      `;
  
      // Replace any existing RMP info
      const existingRmpInfo = document.getElementById('rmpInfo');
      if (existingRmpInfo) {
        modalBody.replaceChild(rmpInfo, existingRmpInfo);
      } else {
        modalBody.appendChild(rmpInfo);
      }
    } else {
      // Handle case where RMP info is unavailable
      const modalBody = document.querySelector('#classModal .modal-body');
      const rmpInfo = document.createElement('div');
      rmpInfo.id = 'rmpInfo';
      rmpInfo.innerHTML = `<p><strong>RateMyProfessor Info:</strong> Not Available</p>`;
      
      // Replace any existing RMP info
      const existingRmpInfo = document.getElementById('rmpInfo');
      if (existingRmpInfo) {
        modalBody.replaceChild(rmpInfo, existingRmpInfo);
      } else {
        modalBody.appendChild(rmpInfo);
      }
    }
  
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('classModal'));
    modal.show();
  }