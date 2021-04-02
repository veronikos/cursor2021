function* createIdGenerator() {
  let num = 1;
  while (true) {
    yield num++;
  }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// for(let value of idGenerator) {
//   console.log(value);
// }

// function newFontGenerator(startFrom) {
//   return (function *(reply) {
//       let price = startFrom;
//       for (let i = 1; i < Infinity; i++) {
//         if (reply === 'up') {
//           yield price + 2
//         } else if (reply === 'down') {
//           yield price - 2;
//         }
//         yield price
//         }
//   })();
// }

// const iter = newFontGenerator(14)

//   console.log(iter.next('down').value)
//   console.log(iter.next('up').value)
//   console.log(iter.next('up').value)
