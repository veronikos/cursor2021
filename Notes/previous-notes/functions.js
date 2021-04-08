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

function getName() {
  return {
    firstName: "Bob",
    secondName: "Smith",
  };
}

console.log(getName());
console.log(getName().secondName);

function sumNumbers() {
  return 4;
}

if (sumNumbers() > 3) {
  // .. мы злоупотребляем этим кондишном. произошло 2 вещи, код и сравнение.
}

// ...rest
//  ...spread

// function declaration - хоистится, работает быстрее, бо создается раньше быстрее.
// function expression - не хоистится
// arrow function expression

// а по сути различия особо нет.

declare();
// express();

// express ne rabotaet sverhu
//  обьявление функции. компилятор видит первое слово фанкшн и понимает что это декларейшн
function declare() {
  console.log("declare");
}

// функции хоистятся - поднимаются вверх кода автоматически.
// экспрешшн не поднимается вверх, эта переменная появляется
// когда и написана в коде. с вар будет ответ андефайнд

const express = function () {
  console.log("express");
};

// друг друга не исключают

const throughArrow = () => {
  console.log("arrow");
};

throughArrow();

// от чего в=зависит контекст функции? От ее віполнения
// для жрров зависит от того где она создана, от ее парента

// scope
// scope chain
// shadowing (затеняем переменную переменной с таким же названием
// на более низком уровне)

const x = 1;

function func1() {
  const x = 2;
  console.log("func1", x);
}

console.log("global", x);

func1();

// хоистинг происходит внутри функции. есили говорить про не-глобальную скоуп
// если вар и функция созданы внутри функции

// Immediately Invoked Function Expression IIFE
// функция сразу вызванная. в круглых скобках сама, и после нее тоже ()

// Pure function
// 1) каждый раз вохвращает одинаковое значение при одинаковых данных
// 2) не затрагивает внешние переменные = не создает побочных эффектов
//  на них легче писать тесты, легче использовать как лего

const numbers = [];

function add(number) {
  numbers.push(number);
}

add(3);
add(5);
add(1);

console.log(numbers);
// работает со внешним скоупом. меняет внешние переменные,
// значит создает побочный эффект

// рекурсия
// функция рекурсивна тогда, когда она вызывает саму себя.
// опасность: можно попасть в бесконечный цикл
// у рекурсивной функции должно быть условие выхода. иначе она будет бесконечноф
