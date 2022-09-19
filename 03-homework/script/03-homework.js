// The 1st function
function getMaxDigit(number) {
    if (number < 10) return number;
    return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
}

// The 2nd Function
// умови виконання при (number = +-) та (degree = +-)
function checkDegree(number, degree) {
    let result = 1;
    if (degree > 0) {
        for (let i = 1; i <= degree; i++) {
            result *= number;
        }
        return degree % 2 === 0 ? result : result;
    } else if (degree < 0) {
        for (let i = -1; degree <= i; i--) {
            result *= number;
        }
        return degree % 2 === 0 ? (1 / result) : (1 / result);
    } else {
        return 1;
    }
}

// The 3rd Function
function formatName(name) {
    return name.toUpperCase().charAt(0) + name.toLowerCase().slice(1);
}

// The 4th function
function countSum(salary) {
    return salary - ((salary * (18 + 1.5)) / 100);
}

// The 5th function
function getRandomNumber(N, M) {
    return Math.floor(Math.random() * (M - N)) + N;
}

// The 6th function
function countLetter(letter, word) {
    return (word.toLowerCase().split(letter)).length - 1;
}

// The 7th function
function convertCurrency(currency) {
    let result = 0;
    let num = 0;
    if (currency.includes("$")) {
        num = currency.slice(0, -1);
        result = num * 25 + " грн.";
    } else if (currency.toLowerCase().includes("uah")) {
        num = currency.slice(0, -3);
        result = num / 25 + "$";
    } else {
        alert("Помилка! Використовувати валюти: UAN або $")
    }
    return result;
}

// The 8th function
function getRandomPassword(num) {
    if (num) {
        return Math.random().toFixed(num).split('.')[1];
    } else {
        return getRandomPassword(8);
    }
}

// The 9th function
function deleteLetters(letter, word) {
    return word.split(letter).join("");
}

// The 10th function
function isPalyndrom(str) {
    str = str.toLowerCase().replace(/\s/g, "");
    return str === str.split("").reverse().join("");
}

// The 11th function
function deleteDuplicateLetter(str) {
    str = str.toLowerCase().split("");
    let result = str.filter(function (value, i, str) {
            return str.lastIndexOf(value) === str.indexOf(value);
        }
    );
    return result.join("");
}

// Вивід результатів виконання функцій
document.writeln(`<p><b>Функція №1:</b> ${getMaxDigit(385)}</p>`);
document.writeln(`<p><b>Функція №2:</b> ${checkDegree(2, -3)}</p>`);
document.writeln(`<p><b>Функція №3:</b> ${formatName("оЛЕКсанДр")}</p>`);
document.writeln(`<p><b>Функція №4:</b> ${countSum(1000)}</p>`);
document.writeln(`<p><b>Функція №5:</b> ${getRandomNumber(10, 20)}</p>`);
document.writeln(`<p><b>Функція №6:</b> ${countLetter("а", "Асталавіста")}</p>`);
document.writeln(`<p><b>Функція №7:</b> (враховуючи інші валюти та регістр) ${convertCurrency("2500uah")}</p>`);
document.writeln(`<p><b>Функція №8:</b> (враховуючи 8 символів за замовчуванням) ${getRandomPassword(4)}</p>`);
document.writeln(`<p><b>Функція №9:</b> ${deleteLetters("a", "blablabla")}</p>`);
document.writeln(`<p><b>Функція №10:</b> ${isPalyndrom("Я несу гусеня")}</p>`);
document.writeln(`<p><b>Функція №11:</b> ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</p>`);
