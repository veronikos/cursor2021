// ex. 1
function getRandomArray(length, min, max) {
  const randomArray = [];
  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomNumber(min, max));
  }
  return randomArray;
}

console.log(` ex.1:`, getRandomArray(9, 1, 25));

// ex. 3
function getAverage(...numbers) {
  const myNumbers = [...numbers];
  let myIntegerNumbers = [];
  let sumNumbers = null;
  let countNaN = 0;
  

  //  переписать при помощи filter
  for (let i = 0; i < myNumbers.length; i++) {
    if (!Number.isInteger(myNumbers[i])) {
      continue;
    }
    myIntegerNumbers.push(myNumbers[i]);
  }
  
  //  переписать при помощи reduce 
  for (let i = 0; i < myIntegerNumbers.length; i++) {
    sumNumbers += myIntegerNumbers[i];
  }
  return sumNumbers / myIntegerNumbers.length;
}

console.log(
  ` ex.3: getAverage(15, 25.2, 35, 78.4, 5, 6, 10): `,
  getAverage(15, 25.2, 35, 78.4, 5, 6, 10)
);

// ex. 4
function getMedian(...numbers) {
  const myNumbers = [...numbers];
  let myIntegerNumbers = [];
  let countMedian = null;
  // function callBack(a, b) {
  //   return a - b;
  // }
  
  for (let i = 0; i < myNumbers.length; i++) {
    if (!Number.isInteger(myNumbers[i])) {
      continue;
    }
    myIntegerNumbers.push(myNumbers[i]);
  }

  let sortedNumbers = myIntegerNumbers.sort((a, b) => a - b);
  if (sortedNumbers.length % 2 === 1) {
    let medianIndex = Number((sortedNumbers.length / 2).toFixed()) - 1;
    countMedian = sortedNumbers[medianIndex];
  } else {
    let secondMedianIndex = Number((sortedNumbers.length / 2).toFixed());
    let firstMedianIndex = secondMedianIndex - 1;
    countMedian =
      (sortedNumbers[secondMedianIndex] + sortedNumbers[firstMedianIndex]) / 2;
  }
  return countMedian;
}
console.log(`ex.4:`, getMedian(3, 0.5, 5, 6.7));

// ex.5
function filterEvenNumbers(...numbers) {
  const numbersArray = [...numbers];
  let evenNumbers = numbersArray.filter(function (number) {
    return number % 2 !== 0;
  });
  return evenNumbers;
}
console.log(` ex.5:`, filterEvenNumbers(2, 187, -0.9, 3789, -5, ));

// ex.6
function countPositiveNumbers(...numbers) {
  const numbersArray = [...numbers];
  let positiveNumbers = numbersArray.filter(function (number) {
    return number > 0;
  });
  return positiveNumbers.length;
}
console.log(`ex.6:`, countPositiveNumbers(-3, 5, 7, 100, -6, -5, 6));

// ex. 7
function getDividedByFive(...numbers) {
  const numbersArray = [...numbers];
  let dividedByFive = numbersArray.filter(function (number) {
    return number % 5 === 0;
  });
  return dividedByFive;
}
console.log(` ex.7:`, getDividedByFive(-3, 5, 45, 500, 5915, 7, 100, -6, -5, 6));

// Ex. 8
function replaceBadWords(comment) {
  const badWords = ["fuck", "shit"];
  let clearPhrase = comment;
  for (let i = 0; i < badWords.length; i++) {
    clearPhrase = clearPhrase.replace(badWords[i], "****");
  }
  return clearPhrase;
}
// can't figure out how to insert not fixed amount of "*"
// for example = "bad".length * "*" => "***"
// "fuck".length * "*" => "****"

console.log(`ex.8:`, replaceBadWords("This fucking callBack is a complete shit!"));

// 9.  function divide string by three letters
function divideByThree(enterString) {
  const startString = enterString.split(" ").join("");
  let finishString = [];
  for (let i = 0; i < startString.length; i += 3) {
    finishString.push(startString.substring(i, i + 3));
  }
  return finishString;
}
console.log(` ex.9:`, divideByThree("LOVE me tender"));

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
