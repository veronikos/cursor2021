// get first number from user, check if it is NaN
let numberA;
do {
  numberA = parseInt(prompt("Enter the first number"));
} while (Number.isNaN(numberA));

// get second number from user (same as A)
let numberB;
do {
  numberB = parseInt(prompt("Enter the second number"));
} while (Number.isNaN(numberB));

// Swich numbers, if B is smaller than A
if (numberB < numberA) {
  [numberA, numberB] = [numberB, numberA];
}

// подсчитывать четные числа в сумму или нет:
const countEvenNumbers = confirm(`Do you want to include even numbers?`);
let answerSum = 0;

if (countEvenNumbers) {
  for (numberA; numberA <= numberB; numberA++) {
    answerSum += numberA;
  }
  alert(`Sum is ${answerSum}!`);
} else {
  for (numberA; numberA <= numberB; numberA++) {
    if (numberA % 2) answerSum += numberA;
  }
  alert(`Sum is ${answerSum}!`);
}


// хотела написать последнюю часть с подсчетом, 
// при помощи while цикла. но не получается. 
// не засчитывает первое число 
// (например от 1 до 3 сумма 5, вместо 6)

// if (countEvenNumbers) {
//   while (numberA < numberB) {
//     numberA++;
//     answerSum += numberA;
//   } alert(`Sum is ${answerSum}!`);
// } else {
//   while (numberA < numberB) {
//     numberA++;
//     if (numberA % 2) answerSum += numberA;
//   } alert(`Sum is ${answerSum}!`); 
// }


