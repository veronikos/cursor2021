let numberN = prompt("Enter the first number");

if (parseInt(numberN) !== NaN) {
    const numberM = prompt(`First number is: ${parseInt(numberN)}. Enter the second number`);
        if ((parseInt(numberM) !== NaN) && (numberN < numberM)) {

            const countEvens = prompt(`Do you want to include even numbers? (enter: true, false)`);
            if  (countEvens === "true") {
                let x = parseInt(numberN);
                 while (numberN < numberM) {
                    numberN++;
                    x += numberN;
                } alert(`Sum is ${x}!`);
            }  else {
                let x = parseInt(numberN);
                 while (numberN < numberM) {
                    numberN++;
                    if (numberN % 2) x += numberN;
                } alert(`Sum is ${x}!`);
            }   
        }   else {
        alert(`Second number (${numberM}) must be bigger that first (${numberN}). Play again`)
    }
}

// часть для того где не считать парные числа

// let numberN = 30;
// let numberM = 40;
// let x = parseInt(numberN);
        
//  while (numberN < numberM) {
//  	numberN++;
//   x += numberN;
//   if(numberN%2) x -= numberN;
// 	} console.log(`Sum is ${x}!`);