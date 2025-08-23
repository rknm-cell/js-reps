// you are given a list of grades that students receieved on various assignments.
// students turn in assignments and can recieve up to `maxPoints` points.
// students pass the class if they get more than 70% of the points across all the 
// assignments they did. produce a list of passing students.

const assignments = {
    "proj 1": {
        maxPoints: 50,
        grades: { steve: 45, john: 35, carly: 50, maya: 25, li: 40, priya: 41, amir: 10, zoe: 50, nick: 0, ana: 42 }
    },
    "quiz 1": {
        maxPoints: 10,
        grades: { steve: 9, john: 7, carly: 9, maya: 6, li: 10, priya: 8, amir: 5, zoe: 10, nick: 8 }
    },
    "lab 1": {
        maxPoints: 20,
        grades: { steve: 18, john: 15, carly: 14, maya: 0, li: 20, priya: 19, amir: 12, zoe: 19, ana: 17 }
    },
    "proj 2": {
        maxPoints: 40,
        grades: { steve: 28, john: 30, carly: 36, maya: 32, li: 24, priya: 38, amir: 8, zoe: 40, nick: 34, ana: 0 }
    },
    "midterm": {
        maxPoints: 100,
        grades: { steve: 72, john: 69, carly: 88, maya: 70, li: 96, priya: 83, amir: 55, zoe: 94, nick: 61, ana: 77 }
    },
    "quiz 2": {
        maxPoints: 10,
        grades: { steve: 7, john: 8, carly: 10, li: 10, priya: 9, amir: 2, zoe: 10, nick: 7 }
    },
    "lab 2": {
        maxPoints: 25,
        grades: { steve: 22, john: 18, carly: 25, maya: 18, li: 25, priya: 23, amir: 16, zoe: 25, nick: 20, ana: 21 }
    },
    "proj 3": {
        maxPoints: 60,
        grades: { steve: 42, john: 54, carly: 48, maya: 30, li: 60, priya: 55, amir: 36, zoe: 60, nick: 24 }
    },
    "quiz 3": {
        maxPoints: 10,
        grades: { steve: 8, john: 7, carly: 7, maya: 7, li: 10, priya: 8, amir: 6, zoe: 10, ana: 10 }
    },
    "lab 3": {
        maxPoints: 30,
        grades: { steve: 27, john: 18, carly: 21, maya: 24, li: 30, priya: 28, amir: 0, zoe: 30, nick: 15, ana: 27 }
    },
    "final project": {
        maxPoints: 80,
        grades: { steve: 64, john: 56, carly: 80, maya: 48, li: 72, priya: 76, amir: 40, zoe: 80, nick: 52, ana: 63 }
    }
};

const expected = [ "steve", "john", "carly", "li", "priya", "zoe" ]

type Assignment = {
    maxPoints: number;
    grades: Record<string, number>
}
type Assignments = Record<string, Assignment>

function findPassingStudents(assignments: Assignments): string[]{
    const passingStudents:string[] = []
    const allStudents = new Set<string>()

    for (const assignment of Object.values(assignments)){
        for (const student of Object.keys(assignment.grades)){
            allStudents.add(student)
        }
    }
    for (const student of allStudents){
        let totalEarned = 0;
        let totalPossible = 0;

        for (const [assingmentName, assignment] of Object.entries(assignments)){
            if(student in assignment.grades){
                totalEarned += assignment.grades[student]
                totalPossible += assignment.maxPoints
            }
        }
        const percentage = totalPossible > 0 ? (totalEarned / totalPossible) + 100 : 0;
        if (percentage > 70){
            passingStudents.push(student)
        }
    }

    console.log(passingStudents)

    return passingStudents
}

findPassingStudents(assignments)