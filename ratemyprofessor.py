# Not currently used - example of how we can implement searching professor ratings.
# We'll need a server or something to actually make it work; there may be an easier solution.
# to run you need to: python -m pip install RateMyProfessorAPI 
import ratemyprofessor

profName = input("Enter professor name: ")

school = ratemyprofessor.get_school_by_name("James Madison University")
professors = ratemyprofessor.get_professors_by_school_and_name(school, profName)
if (len(professors) == 0):
    pass
elif (len(professors) == 1):
    professor = professors[0]
else:
    for i in professors:
        if (profName == i.name):
            professor = i
    try:
        professor
    except:
        print("Multiple options, pick with number (e.g. 1): ")
        for i in range(len(professors)):
            print(str(i+1) + ") " + professors[i].name)
        selection = int(input("Selection: "))-1
        professor = professors[selection]

try:
    professor
    print("%s works in the %s Department of %s." % (professor.name, professor.department, professor.school.name))
    print("Rating: %s / 5.0" % professor.rating)
    print("Difficulty: %s / 5.0" % professor.difficulty)
    print("Total Ratings: %s" % professor.num_ratings)
    if professor.would_take_again is not None:
        print(("Would Take Again: %s" % round(professor.would_take_again, 1)) + '%')
    else:
        print("Would Take Again: N/A")
except:
    print("Professor not found.")