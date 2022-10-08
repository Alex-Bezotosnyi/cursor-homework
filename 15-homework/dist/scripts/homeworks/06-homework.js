"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSubjects = getSubjects;
var students = exports.students = [{
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

function getSubjects(students) {
    var nameOfSubjects = [];
    for (var i in students.subjects) {
        nameOfSubjects = Object.keys(students.subjects).reduce(function (acc, char) {
            return acc.concat(char[0].toUpperCase() + char.slice(1));
        }, []).join(", ").replaceAll("_", " ").split(", ");
    }
    return nameOfSubjects;
}