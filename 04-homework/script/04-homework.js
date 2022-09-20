const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Завдання №1
function pairsOfStudents(students) {
    const girlsNames = [];
    const boysNames = [];
    const pairsOfStudentsResult = students.map((name, i) => {
        name.charAt(name.length - 1) === "а" ? girlsNames.push(name) : boysNames.push(name);
    });
    return boysNames.map(name => [name, girlsNames[boysNames.indexOf(name)]]);
}

const pairsOfStudentsResult = pairsOfStudents(students);
console.log(pairsOfStudentsResult);

// Завдання №2
function studentsThemes(pairsOfStudentsArray, projects) {
    let pairsOfStudentsAndThemesResult = pairsOfStudentsArray.map(name => [name.join(" i "), projects[pairsOfStudentsArray.indexOf(name)]]);

    return pairsOfStudentsAndThemesResult;
}

const pairsOfStudentsAndThemesResult = studentsThemes(pairsOfStudentsResult, themes);
console.log(pairsOfStudentsAndThemesResult);

// Завдання №3
function studentsMarks(students, marks) {
    let studentsMarksResult = students.map(name => [name, marks[students.indexOf(name)]]);

    return studentsMarksResult;
}

const studentsMarksResult = studentsMarks(students, marks);
console.log(studentsMarksResult);

// Завдання №4
function studentsMarksRandom(pairsOfStudentsAndThemesResult) {
    let studentsMarksRandomResult = pairsOfStudentsAndThemesResult
        .map(name => name
            .concat(Math.floor(Math.random() * 5) + 1));

    return studentsMarksRandomResult;
}

const studentsMarksRandomResult = studentsMarksRandom(pairsOfStudentsAndThemesResult);
console.log(studentsMarksRandomResult);