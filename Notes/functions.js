//DRY - don't repeat yourself

// let str = ''

// for (const char of navigator.vendor) {
//     str += char + " "
// }
// console.log(str)

// for (const char of navigator.userAgent) {
//     str += char + " "
// }
// console.log(str)

// написали одинаковый код для трех задач. но
// делая изменения, надо будет делать их во
// всех трех местах.

// вместо этого пишем функцию:

function logWichSpaces(str) {
  let newStr = "";
  for (const char of str) {
    newStr += char + " ";
  }
  console.log(newStr);
}

logWichSpaces(navigator.vendor);
logWichSpaces(navigator.userAgent);

// название функции должно иметь глагол в начале.
// doHomework, runSmth, createAnything

// функция должна чтото возвращать. если нет return - ответ undefined
// return только 1. нельзя выполнить 2 ретурна. все что после него - 
// недостижимая область.
// если получили несколько результатов, складываем или в массив или в обьект

function getName(){
    return {
        firstName: "Bob",
        secondName: "Smith"
    }
}

console.log(getName())
console.log(getName().secondName)

function sumNumbers(){
    return 4
}

if (sumNumbers() > 3) {
    // .. мы злоупотребляем этим кондишном. произошло 2 вещи, код и сравнение.
}

//  16:10