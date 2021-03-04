// 9.  function divide string by three letters
function divideByThree(enterString) {
    const startString = enterString.split(" ").join("");
    let finishString = []
    for (let i = 0; i < startString.length; i += 3) {
      finishString.push(startString.substring(i, i + 3));
    }
  return finishString;
}
console.log(divideByThree("LOVE me tender"));

// Generate unique reshuffle of letters
function generateCombinations(word) {
    const userWord = word; 
    if (userWord.length > 10) {
        return "Word cannot exceed 10 letters"
    }
    for (let i = 0; i < userWord.length; i++) {

    }
}

console.log(generateCombinations("girl"))