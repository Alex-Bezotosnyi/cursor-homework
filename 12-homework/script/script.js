function delay() {
    return new Promise(resolve => setTimeout(resolve, 50));
}

async function getRandomChinese(length) {
    let i = 0;
    let char = "";
    while (i < length) {
        i++;
        let sign = +Date.now().toString().slice(-5);
        char += String.fromCharCode(sign);
        new Promise(resolve => setTimeout(resolve, 50))
        await delay();
    }
    console.log(char);
    return char;
}

getRandomChinese(4);