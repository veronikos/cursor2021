document.writeln(`<p>Hello.</p>`);

// ex.1 Max digit from given number - can't solve
function getMaxDigit(number) {
  const string = String(number);
  return Math.max.apply(Math, string.split(""));
}

document.writeln(`<p>1. Max digit from 372261 is: ${getMaxDigit(372261)} </p>`);

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
document.writeln(`<p>5. Random number from range: ${getRandomNumber(0, 5)}</p>`);

//ex.6 Count letter in a word
function countLetter(letter, word) {
    const a = String(letter);
    const b = String(word).toLowerCase();
    let count = 0;
  
    for (let i = 0; i <= b.length; i++) {
      if (b[i] === a) count++
    }
    return count;
  }
  document.writeln(`<p>6. Count letter in a word: ${countLetter("а", "Асталависта Вероника")}</p>`);

//   считает правильно буквы русс а, англ а. если и те и те, 
// не чситает англ или ру, соответственно.