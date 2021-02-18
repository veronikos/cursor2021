// my notes

console.log("hello");

const day = prompt("what is the day today?");

if (day === "friday") {
	alert("you are right");
	// const bestOption = prompt("What do you prefer to do on Friday?");
	// if (bestOption === "bar") alert('yes, it is a good idea');
} else alert(`${day} is not a correct answer`);


// lecturer
// const product = prompt("What do you want to buy?").toLowerCase();
//
// if (product === "bread") {
//   const priceOfBread = 20;
//
//   const amountOfBreads = prompt("How much breads do you wanna buy?");
//
//   if (parseInt(amountOfBreads) <= 0) {
//     alert(
//       `You can't buy ${parseInt(amountOfBreads)} breads!!! Please point correct amount`
//     );
//   } else {
//     const currency = prompt("Which currency do you wanna pay by???");
//
//     if (currency === "uah") {
//       alert(`You need to pay ${parseInt(amountOfBreads) * priceOfBread} uah`);
//     } else if (currency === "usd") {
//       alert(
//         `You need to pay ${((parseInt(amountOfBreads) * priceOfBread) / 28).toFixed(
//           2
//         )} usd`
//       );
//     } else {
//       alert("Please, choose correct currency");
//     }
//   }
// }

// 2 буханки

// console.log(parseInt(`2 буханки`));

// if (day === "friday") {
//   console.log("Correct");
// } else {
//   console.log("wrong");
// }

// day === "friday" ? console.log("Correct") : console.log("wrong");

// const result = day === "friday" ? "Correct" : "Wrong";

// console.log(result);

// if (day === "friday") {
//   console.log("correct");
// } else if (day === "saturday") {
//   console.log("another");
// } else if (day === "monday") {
//   console.log("another");
// } else if (day === "tuesday") {
//   console.log("another");
// } else {
//
// }

// switch (day) {
//   case "friday":
//   case "saturday":
//   case "sunday":
//     console.log("Weekend");
//     break;
//   case "monday":
//     console.log("monday");
//     break;
//   case "tuesday":
//     console.log("tuesday");
//     break;
//   default:
//     console.log("default value");
// }
//
// const money = 0;
//
// if (!money) {
//   console.log("Please go to work");
// } else {
//   console.log("Enjoy");
// }

/** Operator <||>    **/
//
// if (day === "friday" || day === "saturday" || day === "sunday") {
//   console.log("Good day");
// }

/** Operator < && >    **/

// const number = prompt("Please enter a number in 10-20 range");
// const password = prompt("Please fill in password");

// 10 + 5 * 2 = 30
// 10 + 5 * 2 = 20

// if (number >= 10 && number <= 20 && password === "1234") {
//   console.log(`Number ${number} - is in 10-20 range`);
// } else {
//   console.log(`Number ${number} - is not in 10-20 range`);
// }

// if ((day === "friday" || day === "saturday") && password === "1234") {
//   console.log("Correct");
// } else {
//   console.log("Error");
// }

/** While Loop  **/
// while (day !== "friday") {
//   // console.log("Wrong answer");
//   // day = prompt("What is the best day of the week?");
// }

/** Do/While Loop  **/
// do {
//   day = prompt("What is the best day of the week?");
// } while (day !== "friday");
//
// console.log("Correct");

/** Increment/Decrement  **/
// let day;
// let attempts = 0;
//
// do {
//   day = prompt("What is the best day of the week?");
//   // attempts = attempts + 1;
//   ++attempts;
//   console.log(`${attempts} used`);
// } while (day !== "friday" && attempts < 3);
//
// if (attempts >= 3) {
//   alert("You lost");
// } else {
//   alert("You won");
// }

// ++'1' Increment
// --'1' Decrement

// let number = 0;
// console.log(number);
// number = number++;
//
// console.log(number);
//
// let number = 0;
// const result = ++number;
//
// console.log(number);
// console.log(result);

/** For loop  **/
// for (let attemptsRest = 3, day = ""; 3; attemptsRest++) {
//   day = prompt("What is the best day of the week?");
//
//   attemptsRest--;
//
//   if (day === "friday") {
//     console.log("correct");
//     break;
//   } else {
//     console.log("wrong");
//   }
// }

/* const text = prompt("Enter text").toLowerCase();
const letter = prompt("Please specify a letter");

let counter = 0;
for (let i = 0; i < text.length; i++) {
  const char = text.charAt(i);

  if (char === letter) {
    counter++;
  }
}

if (counter === 0) {
  console.log(`Symbol ${letter} is not exist in : ${text}`);
} else {
  console.log(`${counter} symbols ${letter} in the text`);
} */
