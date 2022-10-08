"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteDuplicateLetter = deleteDuplicateLetter;
function deleteDuplicateLetter(str) {
    str = str.toLowerCase().split("");
    var result = str.filter(function (value, i, str) {
        return str.lastIndexOf(value) === str.indexOf(value);
    });
    return result.join("");
}