document.writeln(`<p>Hello.</p>`);

// ex.1 Max digit from given number
function getMaxDigit(number) {
  const string = String(number);
  return Math.max.apply(Math, string.split(""));
}

document.writeln(`<p>1. Max digit from 372261 is: ${getMaxDigit(372261)} </p>`);

// ex.2 Degree of a number
function numberDegree(number, degree) {
  let answer = number;
  if (degree === 1) {
    answer = number;
  } else {
    for (let i = 1; i < degree; i++) {
      answer = number * answer;
    }
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
  return Math.ceil(Math.random() * (max - min) + min);
}
document.writeln(`<p>5. Random number from range: 
${getRandomNumber(0, 68)}</p>`);

//ex.6 Count letter in a word
function countLetter(letter, word) {
  const a = String(letter);
  const b = String(word).toLowerCase();
  let count = 0;

  for (let i = 0; i <= b.length; i++) {
    if (b[i] === a) count++;
  }
  return count;
}
document.writeln(`<p>6. Count letters "a" in a word "Асталависта, незнание JS!:)": 
  ${countLetter("а", "Асталависта, незнание JS!")}</p>`);

// считает правильно буквы, если в слове только русской расскладки а, или только англ.

// ex.7 Convert $ to UAH and vice-versa
function convertCurrency(value) {
  if (value[value.length - 1] === "$") {
    return `${(parseFloat(value) * 27.65).toFixed(2)}  UAH`;
  } else {
    return `${(parseFloat(value) / 27.65).toFixed(2)} $`;
  }
}

document.writeln(`<p>7. Convert $ to UAH (1:27.65) and vice-versa: 
 201.5$ is ${convertCurrency("201.5$")}; 
 2765uah is ${convertCurrency("2765uah")} </p>`);

