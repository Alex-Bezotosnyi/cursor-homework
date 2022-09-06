const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// Завдання №1
function getSubjects(students) {
    let nameOfSubjects = [];
    for (let i in students.subjects) {
        nameOfSubjects = Object.keys(students.subjects)
            .reduce((acc, char) =>
                    acc.concat(char[0].toUpperCase() + char.slice(1)),
                [])
            .join(", ")
            .replaceAll("_", " ")
            .split(", ")
    }
    return nameOfSubjects;
}

console.log(getSubjects(students[0]));

// Завдання №2
function getAverageMark(students) {
    let averageMark = [];
    let averageMarkLenght = 0;
    for (let i in students.subjects) {
        averageMark = Object.values(students.subjects)
            .flat()
            .reduce((a, b) => a + b);
        averageMarkLenght = Object.values(students.subjects)
            .flat().length;
    }
    return (averageMark / averageMarkLenght).toFixed(2);
}

console.log(getAverageMark(students[0]));

// Завдання №3
function getStudentInfo(students) {
    return {
        "course": students.course,
        "name": students.name,
        "averageMark": getAverageMark(students),
    };
}

console.log(getStudentInfo(students[0]));

// Завдання №4
function getStudentsNames(students) {
    let studentsNames = students.map((char) =>
        char.name
    )
        .join(", ")
        .split(" ")
        .sort();
    return studentsNames;
}

console.log(getStudentsNames(students));

// Завдання №5
function getBestStudent(students) {
    let bestStudent = students.reduce((a, b) =>
        getAverageMark(a) > getAverageMark(b) ? a : b).name;
    return bestStudent;
}

console.log(getBestStudent(students));

// Завдання №6
function calculateWordLetters(word) {
    let calculateWordLettersObj = word.split("")
        .reduce((acc, val) => {
            return acc[val] ? acc[val]++ : acc[val] = 1, acc
        }, {});
    console.log(calculateWordLettersObj)
}

const calculateWordLettersObj = calculateWordLetters("тест");