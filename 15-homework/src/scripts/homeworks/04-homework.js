export const students04 = ["Олександр", "Ігор", "Олена", "Іра"];

export function pairsOfStudents(students) {
    const girlsNames = [];
    const boysNames = [];
    const pairsOfStudentsResult = students.map((name, i) => {
        name.charAt(name.length - 1) === "а" ? girlsNames.push(name) : boysNames.push(name);
    });
    return boysNames.map(name => [name, girlsNames[boysNames.indexOf(name)]]);
}