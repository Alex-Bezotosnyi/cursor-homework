let productNike = 15.678;
let productAdidas = 123.965;
let productPuma = 90.2345;

document.writeln(`</br>Максимальне число: ${Math.max(productNike, productAdidas, productPuma)}`);
document.writeln(`</br>Мінімальне число: ${Math.min(productNike, productAdidas, productPuma)}`);

let productSum = productNike + productAdidas + productPuma;
document.writeln(`</br>Вартість всіх товарів: ${productSum}`);

let productSumNoPenny = Math.floor(productNike) + Math.floor(productAdidas) + Math.floor(productPuma);
document.writeln(`</br>Сума товарів округлена до сотень: ${Math.round((productSumNoPenny) / 100) * 100}`);

document.writeln(`</br>Сума товарів парна чи непарна? ${productSumNoPenny % 2 === 0}`);

document.writeln(`</br>Сума решти при оплаті 500грн.: ${500 - productSum}`);

document.writeln(`</br>Середнє значення цін, округлене до другого знаку після коми: ${((productNike + productAdidas + productPuma) / 3).toFixed(2)}`);

//Випадкова змінна (знижка) від 1 до 100
const RANDOM_DISCOUNT = (100 - 1) * Math.random() + 1;
document.writeln(`</br>Знижка: ${RANDOM_DISCOUNT.toFixed(2)} %`);
document.writeln(`</br>Сума до оплати зі знижкою: ${(productSum - RANDOM_DISCOUNT).toFixed(2)}`);

//Випадкова знижка відповідно до Вартості всіх товарів
let discount = ((productSum * RANDOM_DISCOUNT) / 100).toFixed(2);
document.writeln(`</br>Чистий прибуток: ${Math.round((productSum / 2) - RANDOM_DISCOUNT)}`);
