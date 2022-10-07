function* createIdGenerator() {
    let result = 1;
    while (true)
        yield result++;
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

// Advanced
const mainText = document.querySelector(".main__main");
const changer = window.getComputedStyle(mainText);
const biggerQuantity = document.querySelector("#bigger");
const smallerQuantity = document.querySelector("#smaller");
const quantity = parseInt(changer.fontSize);
const changeQuantity = quantitySize(quantity);


function* quantitySize(counter) {
    while (true) {
        const el = yield counter;
        if (el === "+") {
            yield counter = counter + 2;
        } else if (el === "-") {
            yield counter = counter - 2;
        }
    }
}

const changeColor = document.querySelector(".cursor__logo");
biggerQuantity.addEventListener("click", (event) => {
    mainText.style.fontSize = `${changeQuantity.next("+").value}px`;
    changeColor.style.filter = `drop-shadow(4px 4px ${changeQuantity.next("+").value}px black)`;
})

smallerQuantity.addEventListener("click", (event) => {
    mainText.style.fontSize = `${changeQuantity.next("-").value}px`;
    changeColor.style.filter = `drop-shadow(4px 4px ${changeQuantity.next("-").value}px black)`;

})