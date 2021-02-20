// первые попытки написать это задание
let numberN = prompt("Enter the first number");

if (parseInt(numberN) !== NaN) {
    const numberM = prompt(`First number is: ${parseInt(numberN)}. Enter the second number`);
        
        if ((parseInt(numberM) !== NaN) && (numberN < numberM)) {

            const countEvens = confirm(`Do you want to include even numbers?`);
            let answer = 0;

            if  (countEvens) {
                // работает не правильно 
                // (не считает первое число, сразу добавляет +1
                while (numberN < numberM) {
                    numberN++;
                    answer += numberN;
                } alert(`Sum is ${x}!`);
            }  else {
                    while (numberN < numberM) {
                    numberN++;
                    if (numberN % 2) answer += numberN;
                } alert(`Sum is ${answer}!`);
            }   
        }   else {
        alert(`Second number (${numberM}) must be bigger that first (${numberN}). Play again`)
    }
}


// Вариант кода с использованием цикла for
// let numberA = 10;
// let numberB = 100;
// let answerSum = 0;

// считает парные числа
// for (numberA; numberA <= numberB; numberA++) {
//     answerSum += numberA;
// }
// console.log(answerSum);

// для не-считания парных чисел
// for (numberA; numberA <= numberB; numberA++) {
//     if (numberA % 2) answerSum += numberA;
// }
// console.log(answerSum);