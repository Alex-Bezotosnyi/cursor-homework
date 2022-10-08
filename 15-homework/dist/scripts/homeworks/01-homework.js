"use strict";

var productNike = 15.678;
var productAdidas = 123.965;
var productPuma = 90.2345;

document.writeln("</br>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: " + Math.max(productNike, productAdidas, productPuma));
document.writeln("</br>\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: " + Math.min(productNike, productAdidas, productPuma));

var productSum = productNike + productAdidas + productPuma;
document.writeln("</br>\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0441\u0456\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432: " + productSum);

var productSumNoPenny = Math.floor(productNike) + Math.floor(productAdidas) + Math.floor(productPuma);
document.writeln("</br>\u041E\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u043D\u044F \u0432 \u043C\u0435\u043D\u044C\u0448\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443: " + productSumNoPenny);
document.writeln("</br>\u0421\u0443\u043C\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043E\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0430 \u0434\u043E \u0441\u043E\u0442\u0435\u043D\u044C: " + Math.round(productSumNoPenny / 100) * 100);

document.writeln("</br>\u0421\u0443\u043C\u0430 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043F\u0430\u0440\u043D\u0430 \u0447\u0438 \u043D\u0435\u043F\u0430\u0440\u043D\u0430? " + (productSumNoPenny % 2 === 0));

document.writeln("</br>\u0421\u0443\u043C\u0430 \u0440\u0435\u0448\u0442\u0438 \u043F\u0440\u0438 \u043E\u043F\u043B\u0430\u0442\u0456 500\u0433\u0440\u043D.: " + (500 - productSum));

document.writeln("</br>\u0421\u0435\u0440\u0435\u0434\u043D\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0446\u0456\u043D, \u043E\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0435 \u0434\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0443 \u043F\u0456\u0441\u043B\u044F \u043A\u043E\u043C\u0438: " + ((productNike + productAdidas + productPuma) / 3).toFixed(2));

//Випадкова змінна (знижка) від 1 до 100
var RANDOM_DISCOUNT = (100 - 1) * Math.random() + 1;
document.writeln("</br>\u0417\u043D\u0438\u0436\u043A\u0430: " + RANDOM_DISCOUNT.toFixed(2) + " %");
document.writeln("</br>\u0421\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: " + (productSum - RANDOM_DISCOUNT).toFixed(2));

//Випадкова знижка відповідно до Вартості всіх товарів
var discount = (productSum * RANDOM_DISCOUNT / 100).toFixed(2);
document.writeln("</br>\u0427\u0438\u0441\u0442\u0438\u0439 \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A: " + Math.round(productSum / 2 - RANDOM_DISCOUNT));