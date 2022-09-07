const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

// Завдання №1
function getMyTaxes(country, salary) {
    let salaryNew = this.middleSalary * this.tax;

    console.log(salaryNew)
    return salaryNew;
}

getMyTaxes.call(ukraine);

// const getResult = getMyTaxes(ukraine, 2000)
// console.log(getMyTaxes.call(ukraine, 2000))
// Створіть функцію getMyTaxes.call(country, salary) -> number;

// Завдання №2
function getMiddleTaxes() {
    return this.tax * this.middleSalary
}

console.log(getMiddleTaxes.call(latvia));

// Завдання №3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(litva));

// Завдання №4
function getMySalary(country) {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = this.tax;
    let profit = salary - taxes;
    let mySalary = {
        salary: salary,
        taxes: taxes,
        profit: profit
    }
    console.log(mySalary)
    return mySalary;
}

setInterval('getMySalary.call(ukraine)', 10000)
