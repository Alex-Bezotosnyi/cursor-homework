let wrapperDiv = document.createElement("div");
wrapperDiv.className = "wrapper";
document.getElementsByTagName("body")[0].appendChild(wrapperDiv)

for (let i = 0; i < 25; i++) {
    let divBoxes = document.createElement("div");
    divBoxes.className = "box";
    divBoxes.innerText = i + 1;
    wrapperDiv.appendChild(divBoxes);
}

function generateBlocks() {
    const oneRGB = () => Math.floor(Math.random() * 256);
    const fullRGB = () => "rgb(" + oneRGB() + "," + oneRGB() + "," + oneRGB() + ")";
    const boxes = Array.from(document.getElementsByClassName('box'));
    boxes.map((el) => {
        el.style.backgroundColor = fullRGB();
    });
}

function generateBlocksInterval() {
    setInterval(generateBlocks, 1000)
}

generateBlocksInterval();