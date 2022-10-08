"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.infoToHW15 = infoToHW15;
var N = +prompt("Введіть перше число:");

while (!N) {
    N = +prompt("Введені дані не є числом! Введіть перше число:");
    if (!Number.isInteger(N)) {
        alert("Введене число не ціле!");
    }
    if (!N) {
        alert("Введені дані не є числом!");
    }
}

var M = +prompt("Введіть друге число:");

while (!M) {
    M = +prompt("Введені дані не є числом! Введіть друге число");
    if (!Number.isInteger(M)) {
        alert("Введене число не ціле!");
    }
    if (!M) {
        alert("Введені дані не є числом!");
    }
}

var sum = 0;

document.writeln("</br>\u041F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E: " + N);
document.writeln("</br>\u0414\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E: " + M);

var checkNumber = confirm("Чи потрібно пропускати парні числа?");
document.writeln("</br>\u041F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0442\u0438 \u043F\u0430\u0440\u043D\u0456 \u0447\u0438\u0441\u043B\u0430? " + checkNumber);

for (var i = N; i <= M; i++) {
    if (checkNumber === false) {
        sum += i;
    } else {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    result = sum;
}
document.writeln("</br>\u0421\u0443\u043C\u0430: " + result);

function infoToHW15() {
    var info = "Привіт з Homework #02";
    return info;
}

// export function infoToHW15() {}
// export default infoToHW15;