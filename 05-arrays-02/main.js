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
  let sumNumbers = null;
  let countNaN = 0;
  for (let i = 0; i < myNumbers.length; i++) {
    if (!Number.isInteger(myNumbers[i])) {
      countNaN++;
      continue;
    }
    sumNumbers += myNumbers[i];
  }
  return sumNumbers / (myNumbers.length - countNaN);
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
    function callBack(a, b) {
    return a - b;
  }

  let sortedNumbers = myNumbers.sort(callBack);
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

console.log(` ex.4:`, getMedian(3));

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

console.log(` ex.8:`, replaceBadWords("This fucking tree is a complete shit!"));

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
function generateCombinations(word) {
  const userWord = word;
  if (userWord.length > 10) {
    return "Word cannot exceed 10 letters";
  }
  if (userWord.length <= 1) {
    return userWord;
  }

  let shuffledLetters = [];

  for (let i = 0; i < userWord.length; i++) {
    let tmp = userWord.substr(0, i) + userWord.substr(i + 1);
    console.log(tmp);
    let prefix = userWord.substr(i, 1);
    console.log(prefix);
    let shuffleVariant = tmp + prefix;
    console.log(shuffleVariant);
    shuffledLetters[i] = shuffleVariant;
  }
  return shuffledLetters;
}

console.log(`Doesn't work! ex.10:`, generateCombinations("467"));
