function* createIdGenerator() {
  for (let index = 1; index <= Infinity; index++) {
    yield index
  }
}

const idGenerator = createIdGenerator()

console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

// Прикольный альтернативный вариант

  // function * naturalNumbers() {
  //   let num = 1;
  //   while (true) {
  //     yield num;
  //     num = num + 1
  //   }
  // }
  // const numbers = naturalNumbers();
  // console.log(numbers.next().value)
  // console.log(numbers.next().value)



// for(let value of idGenerator) {
//   console.log(value); 
// }

// function* newFontGenerator(num) {
//   next(upOrDown) = function() {
//     let number = num;
//     if (upOrDown === "up") {
//       yield number =+ 2
//     } else if (upOrDown === "down") {
//       yield number =- 2
//     } else {
//       yield number
//       return number
//     }
//   }
// }

// const fontGenerator = newFontGenerator()

// console.log(fontGenerator.next().value)

// 