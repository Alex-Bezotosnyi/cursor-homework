import "../style/style.css";
import "../style/10-style.css";
import Image from "../assets/bg.png";
import {deleteDuplicateLetter} from "./homeworks/03-homework.js";
import {pairsOfStudents, students04} from "./homeworks/04-homework";
import {replaceBadWords} from "./homeworks/05-homework.js"
import {getSubjects, students} from "./homeworks/06-homework";
import {generateBlocks} from "./homeworks/10-homework.js";

// background image
const imgDiv = document.createElement("img");
imgDiv.setAttribute("src", Image);
imgDiv.className = "main__background";
document.body.append(imgDiv);

// info for functions
const hw03 = deleteDuplicateLetter("Бісквіт був дуже ніжним");
const hw04 = pairsOfStudents(students04);
const hw05 = replaceBadWords("Are you fucking kidding? Holy shit!");
const hw06 = getSubjects(students[0]);

// DOM
document.body.onload = addElement;
function addElement() {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "wrapper__box";
    document.getElementsByTagName("body")[0].appendChild(wrapperDiv)
    const textBoxDiv = document.createElement("div");
    textBoxDiv.className = "wrapper__box"
    wrapperDiv.appendChild(textBoxDiv);

    const divHW03 = document.createElement("div");
    const divHW04 = document.createElement("div");
    const divHW05 = document.createElement("div");
    const divHW06 = document.createElement("div");
    const divHW14 = document.createElement("div");

    divHW03.className = "wrapper__text";
    divHW04.className = "wrapper__text";
    divHW05.className = "wrapper__text";
    divHW06.className = "wrapper__text";
    divHW14.className = "wrapper__text";

    divHW03.innerHTML = `Homework #03: ${hw03}`;
    divHW04.innerHTML = `Homework #04: ${hw04}`;
    divHW05.innerHTML = `Homework #05: ${hw05}`;
    divHW06.innerHTML = `Homework #06: ${hw06}`;

    textBoxDiv.appendChild(divHW03);
    textBoxDiv.appendChild(divHW04);
    textBoxDiv.appendChild(divHW05);
    textBoxDiv.appendChild(divHW06);
}