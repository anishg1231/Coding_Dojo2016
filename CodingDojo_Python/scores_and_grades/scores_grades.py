from random import randint

print "Scores and Grades"

for count in range(0,11):
    print count
    random_number = randint(70,101)

    if random_number <= 70:
        grade = "D"

    elif random_number <= 80:
        grade = "C"

    elif random_number <= 90:
        grade = "B"

    else:
        grade = "A"

    print "Score:" + str(random_number)
    print "Your grade is:" + grade

print "End of the program. Bye!"
