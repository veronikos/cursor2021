function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// ex. 1
function getRandomArray(length, min, max) {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomNumber(min, max));
  }

  return randomArray;
}

console.log(` ex.1:`, getRandomArray(9, 1, 25));

// ex. 3
function getAverage(...numbers) {
  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));

  return (
    myIntegerNumbers.reduce((acc, item) => acc + item) / myIntegerNumbers.length
  );
}

// так? со скобками?
console.log(
  ` ex.3: getAverage(15, 25.2, 35, 78.4, 5, 6, 10): `,
  getAverage(15, 25.2, 35, 78.4, 5, 6, 10)
);

// ex. 4
function getMedian(...numbers) {
  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));
  const sortedNumbers = myIntegerNumbers.sort((a, b) => a - b);
  let countMedian = null;

  // не понимаю как это через фильтр реализовать...
  if (sortedNumbers.length % 2 === 1) {
    const medianIndex = Number((sortedNumbers.length / 2).toFixed()) - 1;
    countMedian = sortedNumbers[medianIndex];
  } else {
    const secondMedianIndex = Number((sortedNumbers.length / 2).toFixed());
    const firstMedianIndex = secondMedianIndex - 1;

    countMedian =
      (sortedNumbers[secondMedianIndex] + sortedNumbers[firstMedianIndex]) / 2;
  }

  return countMedian;
}
console.log(`ex.4:`, getMedian(3, 0.5, 5, 6.7));

// ex.5
const filterEvenNumbers = (...numbers) => numbers.filter((el) => el % 2 !== 0);

console.log(` ex.5:`, filterEvenNumbers(2, 187, -0.9, 3788, -5));

// ex.6
function countPositiveNumbers(...numbers) {
  const positiveNumbers = numbers.filter((num) => num > 0);

  return positiveNumbers.length;
}

console.log(`ex.6:`, countPositiveNumbers(-3, 5, 7, 100, -6, -5, 6));

// ex. 7
const getDividedByFive = (...numbers) => numbers.filter((num) => num % 5 === 0);

console.log(
  ` ex.7:`,
  getDividedByFive(-3, 5, 45, 500, 5915, 7, 100, -6, -5, 6)
);

// Ex. 8
const replaceBadWords = (comment) =>
  comment.replaceAll("fuck", "****").replaceAll("shit", "****");

console.log(
  `ex.8:`,
  replaceBadWords("This fucking callBack is a complete shit!")
);

// 9.  function divide string by three letters
function divideByThree(enterString) {
  const startString = enterString.split(" ").join("");
  let finishString = [];

  for (let i = 0; i < startString.length; i += 3) {
    finishString.push(startString.substring(i, i + 3));
  }

  return finishString;
}

console.log(` ex.9:`, divideByThree("LOVE"));

//!!!!!! ex. 10: Generate unique reshuffle of letters
// function generateCombinations(word) {
//   const userWord = word;
//   if (userWord.length > 10) {
//     return "Word cannot exceed 10 letters";
//   }
//   if (userWord.length <= 1) {
//     return userWord;
//   }

//   let shuffledLetters = [];

//   for (let i = 0; i < userWord.length; i++) {
//     let tmp = userWord.substr(0, i) + userWord.substr(i + 1);
//     console.log(tmp);
//     let prefix = userWord.substr(i, 1);
//     console.log(prefix);
//     let shuffleVariant = tmp + prefix;
//     console.log(shuffleVariant);
//     shuffledLetters[i] = shuffleVariant;
//   }
//   return shuffledLetters;
// }

// console.log(`Doesn't work! ex.10:`, generateCombinations("467"));

module.exports = {
  divideByThree,
  getMedian,
  getRandomArray
}