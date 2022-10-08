"use strict";

var wrapperDiv = document.createElement("div");
wrapperDiv.className = "wrapper";
document.getElementsByTagName("body")[0].appendChild(wrapperDiv);

for (var i = 0; i < 25; i++) {
    var divBoxes = document.createElement("div");
    divBoxes.className = "box";
    divBoxes.innerText = i + 1;
    wrapperDiv.appendChild(divBoxes);
}

function generateBlocks() {
    var oneRGB = function oneRGB() {
        return Math.floor(Math.random() * 256);
    };
    var fullRGB = function fullRGB() {
        return "rgb(" + oneRGB() + "," + oneRGB() + "," + oneRGB() + ")";
    };
    var boxes = Array.from(document.getElementsByClassName('box'));
    boxes.map(function (el) {
        el.style.backgroundColor = fullRGB();
    });
}

function generateBlocksInterval() {
    setInterval(generateBlocks, 1000);
}

generateBlocksInterval();