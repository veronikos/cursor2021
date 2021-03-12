const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const lithuania = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary
}

console.log(`Tax from 100 in Ukraine:`, getMyTaxes.call(ukraine, 100))
console.log(`Tax from 100 in Latvia:`, getMyTaxes.call(latvia, 100))
console.log(`Tax from 100 in Lithuania:`, getMyTaxes.call(lithuania, 100))

function getMiddleTaxes() {
    return this.tax * this.middleSalary
}

console.log(` Middle IT-tax rate in Ukraine:`, getMiddleTaxes.call(ukraine))
console.log(` Middle IT-tax rate in Latvia:`, getMiddleTaxes.call(latvia))
console.log(` Middle IT-tax rate in Lithuania:`, getMiddleTaxes.call(lithuania))

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(`Total IT-tax rate in Ukraine:`, getTotalTaxes.call(ukraine))
console.log(`Total IT-tax rate in Latvia:`, getTotalTaxes.call(latvia))
console.log(`Total IT-tax rate in Lithuania:`, getTotalTaxes.call(lithuania))