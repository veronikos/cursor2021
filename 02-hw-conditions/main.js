// get first number from user, check if it is NaN
let numberA = null;
do {
  numberA = parseInt(prompt("Enter the first number"));
} while (Number.isNaN(numberA));

// get second number from user (same as A)
let numberB = null;
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

for (let i = numberA; i <= numberB; i++) { 
  if (!countEvenNumbers && (i % 2 === 0)) { 
   continue;
  }
   answerSum += i;
  }
  alert(`Sum is ${answerSum}!`);

// рабочий вариант с while:
// while (numberA <= numberB) {
//   if (!countEvenNumbers && numberA % 2 === 0) {
//   numberA++;
//   continue;
//   } answerSum += numberA;
//     numberA++
//   }
//   alert(`Sum is ${answerSum}!`);