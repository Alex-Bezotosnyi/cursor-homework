let N = +prompt("Введіть перше число:");

while (!N) {
    N = +prompt("Введені дані не є числом! Введіть перше число:");
    if (!Number.isInteger(N)) {
        alert("Введене число не ціле!");
    }
    if (!N) {
        alert("Введені дані не є числом!");
    }
}

let M = +prompt("Введіть друге число:");

while (!M) {
    M = +prompt("Введені дані не є числом! Введіть друге число");
    if (!Number.isInteger(M)) {
        alert("Введене число не ціле!");
    }
    if (!M) {
        alert("Введені дані не є числом!");
    }
}

let sum = 0;

document.writeln(`</br>Перше число: ${N}`);
document.writeln(`</br>Друге число: ${M}`);

let checkNumber = confirm("Чи потрібно пропускати парні числа?");
document.writeln(`</br>Пропускати парні числа? ${checkNumber}`);

for (let i = N; i <= M; i++) {
    if (checkNumber === false) {
        sum += i;
    } else {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    result = sum;
}
document.writeln(`</br>Сума: ${result}`);