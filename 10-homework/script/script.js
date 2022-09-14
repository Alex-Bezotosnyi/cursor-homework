function generateBlocks() {
    const oneRGB = () => Math.floor(Math.random() * 256);
    const fullRGB = () => "rgb(" + oneRGB() + "," + oneRGB() + "," + oneRGB() + ")";
    console.log(oneRGB())
    console.log(fullRGB())

    const boxes = Array.from(document.getElementsByClassName('box'));
    console.log(boxes);

    boxes.map((el) => {
        el.style.backgroundColor = fullRGB();
    });
}

generateBlocks();

function generateBlocksInterval() {
    setInterval(generateBlocks, 1000)
}

generateBlocksInterval();