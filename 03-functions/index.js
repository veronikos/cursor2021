document.writeln(`<p>Hello.</p>`);

// ex.1 Max digit from given number

// вариант с Apply
// function getMaxDigit(number) {
//   const string = String(number);
//   return Math.max.apply(Math, string.split(""));
// }

// document.writeln(`<p>1. Max digit from 372261 is: ${getMaxDigit(372261)} </p>`);

// вариант с циклом:
function getMaxDigit(number) {
  let string = String(number);
  let maxDigit = 0;
  for (let i = 0; i < string.length; i++) {
    if (maxDigit < string[i]) {
      maxDigit = string[i];
    }
  }
  return +maxDigit;
}

document.writeln(`<p>1. Max digit from 532961 is: ${getMaxDigit(532961)} </p>`);

// ex.2 Degree of a number
function numberDegree(number, degree) {
  let answer = number;
  if (degree === 0) {
    return 1
  }
  for (let i = 1; i < degree; i++) {
    answer *= number;
  }
  return answer;
}
document.writeln(`<p>2. Degree of a number (2**5): ${numberDegree(2, 5)}</p>`);

//ex.3 Name formatting
function nameFormatting(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

document.writeln(`<p>3. Formatted name: ${nameFormatting("vERONIKA")}</p>`);

//ex.4 Tax count
function taxRemoval(salary, taxPersent) {
  return (salary / 100) * (100 - taxPersent);
}

document.writeln(`<p>4. Salary without taxes: ${taxRemoval(1000, 19.5)}</p>`);

//ex.5 Random number from range
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
document.writeln(`<p>5. Random number from range: 
${getRandomNumber(0, 68)}</p>`);

//ex.6 Count letter in a word
function countLetter(letter, word) {
  const userLetter = letter;
  const userWord = word.toLowerCase();
  let count = 0;

  for (let i = 0; i <= userWord.length; i++) {
    if (userWord[i] === userLetter) {
      count++;
    }
  }
  return count;
}
document.writeln(`<p>6. Count letters "a" in a word "Асталависта, незнание JS!:)": 
  ${countLetter("а", "Асталависта, незнание JS!")}</p>`);

// считает правильно буквы, если в слове только русской расскладки а, или только англ.

// ex.7 Convert $ to UAH and vice-versa
function convertCurrency(value) {
  const valueLowerCase = value.toLowerCase();
  const ratio = 27.65;
  if (valueLowerCase.endsWith("$")) {
    return Number((parseFloat(valueLowerCase) * ratio).toFixed(2));
  }
  if (valueLowerCase.endsWith("uah")) {
    return Number((parseFloat(valueLowerCase) / ratio).toFixed(2));
  }
  return `We don't convert currency other than $ or UAH`;
}

document.writeln(`<p>7. Convert $ to UAH (1:27.65) and vice-versa:  <br>  
  201.5$ is ${convertCurrency("201.5$")} UAH; <br> 
  2765uah is ${convertCurrency("2765uah")} $; </p>`);

// ex.8 Generate random numeric password
function getRandomPassword(digits) {
  if (digits <= 8 && digits > 0) {
    return Math.random().toString().slice(-digits);
  } else if (!digits || digits > 8) {
    return Math.random().toString().slice(-8);
  } else return document.writeln("Function accepts only numbers from 1 to 8");
}
document.writeln(`8. Random numeric password: ${getRandomPassword(5.61)}`);

// ex.9 Delete letters from a sentence
// не работает. я еще работаю над этой функцией
// function deleteLetters(letter, sentence) {
//   let letter1 = String(letter);
//   let sentence1 = String(sentence);
//   for (let j = 0; j < sentence1.length; j++) {
//     if (sentence1[j] === letter1) {
//      continue;
//     } sentence1 = sentence1.replace(j, "");
//   } return sentence1;
// }

// console.log (deleteLetters("a", "aakalaoannalllla;a l;l;a"))


module.exports = {
    getRandomPassword,
    convertCurrency,
    countLetter
}