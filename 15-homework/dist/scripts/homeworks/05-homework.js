"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.replaceBadWords = replaceBadWords;
function replaceBadWords(string) {
    var badWords = ["fuck", "shit"];
    badWords.concat(badWords).forEach(function (el) {
        return string = string.replaceAll(el, "*".repeat(el.length));
    });
    return string;
}