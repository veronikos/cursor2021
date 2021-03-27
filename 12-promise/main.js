
// const currentTimestamp = String(Date.now())
// console.log(String.fromCharCode(currentTimestamp.slice(-5)));


// let chineseString = '';
// function getRandomChinese(n){
    
//     return new Promise((resolve) => {
//     let i = 0;

//     while (i < n) {
//         chineseString += String.fromCharCode(String(Date.now()).slice(-5));
//         i++
//     }
//     resolve('resolve')
//     })

// }

// function vait50ms() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("timeout")
//     }, 50);
//     resolve()
//   })
// }

// console.log(getRandomChinese(1)
// .then(vait50ms)
// .then(() => getRandomChinese(1)))

// console.log(chineseString);

// // get date

// function getTimestamp() {
  
//   return new Promise ((resolve) => {
//     String(Date.now()).slice(-5)
//     resolve()
//   })

// }

// console.log(getTimestamp());

// getTimestamp().then(() => {
//   const string = getTimestamp();
//   return string
// })


// const somethingSuccesfulHappened = true

// const myPromise =  new Promise((resolve, reject) => {
//   if(somethingSuccesfulHappened) {
//      const successObject = {
//         msg: 'Success',
//      }
//      resolve(successObject); 
//   } else {
//      const errorObject = {
//         msg: 'An error occured',
//      }
//      reject(errorObject);
//   }
// });


// save to chineseString
//get date after 50ms
// save to chineseString
//get date after 50ms
// save to chineseString
//stop when it is enough symbols


//   const test = new Promise((resolve) => {
  
//     setTimeout(() => {
//       resolve();
//     }, 1000);
  
//   });
  
//   console.log(test); // это покажет сам промис.
  
//   test.then(() => {
//     console.log(addSymbol());
//   }); // это покажет уже сам код. ПОСЛЕ зарезолвленого промиса.


// function doPushups(n, onFinish) {
//     const time = n * 200;
//     setTimeout(() => {
//         console.log(n + " pushups done " + new Date().toLocaleString());
//         if (onFinish) onFinish();
//     }, time);
// }

// function rest(onFinishRest) {
//     setTimeout(() => {
//         console.log("Rest is done " + new Date().toLocaleString());
//         if (onFinishRest) onFinishRest()
//     }, 1000);
// }

// doPushups(10, () => {
//   rest(() => {
//     doPushups(9, () => {
//         rest(() => {
//             console.log("Yess, I finished!!")
//         })
//     });
//   });
// });

// const test = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//         console.log('resolved')
//     }, 1000);
// });

// console.log(test)

// WITH PROMISES REST-PUSHUPS

// function doPushups(n) {

//   return new Promise((resolve) => {
//     const time = n * 200;

//     setTimeout(() => {
//       console.log(n + " pushups done " + new Date().toLocaleString());

//       resolve();
//     }, time);

//   });
// }

// function rest() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Rest is done " + new Date().toLocaleString());

//       resolve()
//     }, 1000);
//   });
// }

// async function cursorPushUps() {
//   await doPushups(8);
//   rest()
// }

// cursorPushUps()

function getRandomChinese() {

  let random = ''
  random = setInterval(() => getChineseSymbol(), 50)
  return getChineseSymbol() + random

}

function getChineseSymbol() {

  const date = String(Date.now()).slice(-5);
  const symbol = String.fromCharCode(date)

  return symbol
}

console.log(getChineseSymbol() + getChineseSymbol())

console.log(getRandomChinese())