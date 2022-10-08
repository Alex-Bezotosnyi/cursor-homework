"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairsOfStudents = pairsOfStudents;
var students04 = exports.students04 = ["Олександр", "Ігор", "Олена", "Іра"];

function pairsOfStudents(students) {
    var girlsNames = [];
    var boysNames = [];
    var pairsOfStudentsResult = students.map(function (name, i) {
        name.charAt(name.length - 1) === "а" ? girlsNames.push(name) : boysNames.push(name);
    });
    return boysNames.map(function (name) {
        return [name, girlsNames[boysNames.indexOf(name)]];
    });
}