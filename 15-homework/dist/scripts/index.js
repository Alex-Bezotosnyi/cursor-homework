"use strict";

require("../style/style.css");

require("../style/10-style.css");

var _bg = require("../assets/bg.png");

var _bg2 = _interopRequireDefault(_bg);

var _homework = require("./homeworks/03-homework.js");

var _homework2 = require("./homeworks/04-homework");

var _homework3 = require("./homeworks/05-homework.js");

var _homework4 = require("./homeworks/06-homework");

var _homework5 = require("./homeworks/10-homework.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// background image
var imgDiv = document.createElement("img");
imgDiv.setAttribute("src", _bg2.default);
imgDiv.className = "main__background";
document.body.append(imgDiv);

// info for functions
var hw03 = (0, _homework.deleteDuplicateLetter)("Бісквіт був дуже ніжним");
var hw04 = (0, _homework2.pairsOfStudents)(_homework2.students04);
var hw05 = (0, _homework3.replaceBadWords)("Are you fucking kidding? Holy shit!");
var hw06 = (0, _homework4.getSubjects)(_homework4.students[0]);

// DOM
document.body.onload = addElement;
function addElement() {
    var wrapperDiv = document.createElement("div");
    wrapperDiv.className = "wrapper__box";
    document.getElementsByTagName("body")[0].appendChild(wrapperDiv);
    var textBoxDiv = document.createElement("div");
    textBoxDiv.className = "wrapper__box";
    wrapperDiv.appendChild(textBoxDiv);

    var divHW03 = document.createElement("div");
    var divHW04 = document.createElement("div");
    var divHW05 = document.createElement("div");
    var divHW06 = document.createElement("div");
    var divHW14 = document.createElement("div");

    divHW03.className = "wrapper__text";
    divHW04.className = "wrapper__text";
    divHW05.className = "wrapper__text";
    divHW06.className = "wrapper__text";
    divHW14.className = "wrapper__text";

    divHW03.innerHTML = "Homework #03: " + hw03;
    divHW04.innerHTML = "Homework #04: " + hw04;
    divHW05.innerHTML = "Homework #05: " + hw05;
    divHW06.innerHTML = "Homework #06: " + hw06;

    textBoxDiv.appendChild(divHW03);
    textBoxDiv.appendChild(divHW04);
    textBoxDiv.appendChild(divHW05);
    textBoxDiv.appendChild(divHW06);
}