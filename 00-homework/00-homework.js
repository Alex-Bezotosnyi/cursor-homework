let productNike = 15.678;
let productAdidas = 123.965;
let productPuma = 90.2345;

console.log(`Максимальне число: ${Math.max(productNike, productAdidas, productPuma)}`);
console.log(`Мінімальне число: ${Math.min(productNike, productAdidas, productPuma)}`);

let productSum = productNike + productAdidas + productPuma;
console.log(`Вартість всіх товарів: ${productSum}`);

let productSumNoPenny = Math.floor(productNike) + Math.floor(productAdidas) + Math.floor(productPuma);
console.log(`Сума товарів округлена до сотень: ${Math.round((productSumNoPenny) / 100) * 100}`);

console.log (`Сума товарів парна чи непарна? ${productSumNoPenny % 2 === 0}`);

console.log(`Сума решти при оплаті 500грн.: ${500 - productSum}`);

console.log(`Середнє значення цін, округлене до другого знаку після коми: ${((productNike + productAdidas + productPuma) / 3).toFixed(2)}`);

//Випадкова змінна (знижка) від 1 до 100
const RANDOM_DISCOUNT = (100 - 1) * Math.random() + 1;

//Випадкова знижка відповідно до Вартості всіх товарів
let discount = ((productSum * RANDOM_DISCOUNT) / 100).toFixed(2);
console.log(`Чистий прибуток: ${Math.round((productSum / 2) - RANDOM_DISCOUNT)}`);
