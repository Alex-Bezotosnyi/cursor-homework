const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

// Завдання №1
function getMyTaxes(salary) {
    return salary * this.tax;
}

console.log(getMyTaxes.call(ukraine, 2000));

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
