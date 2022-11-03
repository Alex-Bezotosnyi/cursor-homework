// Завдання №1
function getRandomArray(length, min, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min) + min));
    }
    return randomArray;
}

const randomArray = getRandomArray(15, 1, 100);
console.log(randomArray);

// Завдання №2
function getModa(...numbers) {
    let modaArray = [...numbers].filter((el) => Number.isInteger(el));
    return [...new Set(modaArray)].map((value) => [value, modaArray.filter((v) => v === value).length])
        .sort((a, b) => a[1] - b[1])
        .reverse()
        .filter((value, i, a) => a.indexOf(value) === i)
        .filter((v, i, a) => v[1] === a[0][1])
        .map((v) => v[0])
}

const modaArray = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(modaArray);

// Завдання №3
function getAverage(...numbers) {
    let sum = 0;
    let averageArray = [...numbers].filter((el) => Number.isInteger(el));
    averageArray.forEach(num => {
        sum += num
    });
    return sum / averageArray.length;
}

const averageArray = getAverage(6, 6.3, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(averageArray);

// Завдання №4
function getMedian(...numbers) {
    let medianIndex = 0;
    let getMedianResult = [...numbers].sort((a, b) => (a - b));
    if (getMedianResult.length % 2 !== 0) {
        return getMedianResult[Math.floor(getMedianResult.length / 2)];
    } else {
        return (getMedianResult[getMedianResult.length / 2] + getMedianResult[getMedianResult.length / 2 - 1]) / 2;
    }
}

const getMedianResult = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(getMedianResult);

// Завдання №5
function filterEvenNumbers(...numbers) {
    let filterEvenNumbersArray = [...numbers];
    return filterEvenNumbersArray.filter(el => el % 2 !== 0);
}

const filterEvenNumbersArray = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filterEvenNumbersArray);

// Завдання №6
function countPositiveNumbers(...numbers) {
    let countPositiveNumbersArray = [...numbers];
    return countPositiveNumbersArray.filter(el => Number.isInteger(el) && el > 0).length;
}

const countPositiveNumbersArray = countPositiveNumbers(1, true, 3, -4, -5, 6);
console.log(countPositiveNumbersArray);

// Завдання №7
function getDividedByFive(...numbers) {
    let getDividedByFiveArray = [...numbers];
    return getDividedByFiveArray.filter(el => el % 5 === 0);
}

const getDividedByFiveArray = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(getDividedByFiveArray);

// Завдання №8
function replaceBadWords(string, ...newBadWords) {
    let badWords = ["fuck", "shit"];
    badWords.concat(newBadWords.flat())
        .forEach((el) => {
            string = string
                .toLowerCase()
                .replaceAll(el, "*"
                    .repeat(el.length))
        });

    return `${"Bad Words: " + string + " New Bad Words: " + newBadWords}`;
}

const replaceBadWordsResult = replaceBadWords("Are you fucking kidding? Holy shit! SShitt!", "hol");
console.log(replaceBadWordsResult);

// Завдання №9
function divideByThree(word) {
    return word.toLowerCase().match(/[\s\S]{1,3}/g);
}

const divideByThreeResult = divideByThree("Commander");
console.log(divideByThreeResult);

// Завдання №10
function generateCombinations(word) {
    if (word.length < 2) {
        return word.length === 1 ? [word] : [word, word[1] + word[0]];
    }
    word = word.split("").reduce((acc, letter, num) =>
        acc.concat(generateCombinations(word.slice(0, num) + word.slice(num + 1))
            .map(char => letter + char)), []);
    return [...new Set(word)]
}

const generateCombinationsResult = generateCombinations("man");
console.log(generateCombinationsResult);