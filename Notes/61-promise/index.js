// const date = new Date();
// console.log('%c 🥥 date: ', 'font-size:20px;background-color: #93C0A4;color:#fff;', date);
// console.log(+date);
// // timestamp 
// // (y, m, d, h, m, s, ms)
// const date2 = new Date(2020, 0, 1, 1, 1, 1);
// console.log('%c 🍏 date2: ', 'font-size:20px;background-color: #42b983;color:#fff;', date2);

// console.log(Date.now());
// console.log(new Date().getTime());

// // ISO 'YYYY-MM-DDTHH:mm:ss:sss'

// const date3 = new Date('2000-12');

// date3.setFullYear(1999);

// console.log(date3.getFullYear());

// console.log(date3.toLocaleString('ua', {
//   year: 'numeric',
//   month: 'short'
// }));



// function isAdult(birthDate) {
//   const tresholdDate = new Date();
//   tresholdDate.setFullYear(tresholdDate.getFullYear() - 18);
//   return tresholdDate > Date.parse(birthDate);
// }

// console.log(isAdult('2015-08-22'));



// function hey(msg) {
//   console.log('hey', msg);
// }

// setTimeout(hey, 2000);
// const intervalId = setInterval(hey, 1000, 'cursor');


// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);


// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0)


// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);




function createTimer() {
    const timerEl = document.createElement('h2');
    let time = 60 * 5;
    const timerId = setInterval(() => {
      time--;
      const min = Math.floor(time / 60);
      const sec = time - min * 60;
  
      timerEl.innerText = ('0' + min).substr(-2) + ':' + ('0' + sec).substr(-2);
      if (time === 0) {
        clearInterval(timerId);
        console.log('done');
      }
    }, 1000);
  
    document.body.append(timerEl);
  }
  
  // createTimer();
  
  
  
  
  // 10 pushups
  // 5sec rest
  // 9 pushups
  // 5sec rest
  // 8 pushups
  // 5sec rest
  // 7 pushups
  // 5sec rest
  
  
  
  // function doPushups(n, onFinish) {
  //   const time = n * 200;
  //   setTimeout(() => {
  //     console.log(n + ' pushups done ' + new Date().toLocaleString());
  
  //     if (onFinish) onFinish();
  //   }, time)
  // }
  
  // function rest(onFinish) {
  //   setTimeout(() => {
  //     console.log('rest is done ' + new Date().toLocaleString());
  //     if (onFinish) onFinish();
  //   }, 2000);
  // }
  
  
  // doPushups(10, () => {
  //   rest(() => {
  //     doPushups(9, () => {
  //       rest(() => {
  //         doPushups(8, () => {
  //           rest(() => {
  //             doPushups(7, () => {
  //               console.log('YESSS I finished');
  //             });
  //           });
  //         });
  //       });
  //     });
  //   });
  // });
  
  
  
  const test = new Promise((resolve) => {
  
    setTimeout(() => {
      // console.log('resolve promise');
      resolve();
    }, 4000);
  
  });
  
  // console.log('%c 🍺 test: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', test);
  
  // test.then(() => {
  //   console.log('done');
  // });
  
  function rest() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('rest is done ' + new Date().toLocaleString());
        resolve();
      }, 2000);
    })
  }
  
  
  
  function doPushups(n) {
    if (n === 0) {
      return Promise.resolve();
    }
    if (n > 1000) {
      return Promise.reject();
    }
  
  
    return new Promise((resolve, reject) => {
      let gaveUp = false;
  
      const giveUpBtn = document.createElement('button');
      giveUpBtn.innerText = 'stop';
      giveUpBtn.addEventListener('click', () => {
        console.log('I give up');
        gaveUp = true;
        reject();
      });
      document.body.append(giveUpBtn);
  
      setTimeout(() => {
        if (!gaveUp) {
          console.log(n + ' pushups done ' + new Date().toLocaleString());
        }
  
        giveUpBtn.remove();
        resolve();
      }, n * 200)
  
    })
  }
  
  
  // const user1Promise = doPushups(25);
  // const user2Promise = doPushups(10);
  
  // const promisesArr = [user1Promise, user2Promise];
  
  // Promise.all(promisesArr).then(() => {
  //   console.log('all users finished');
  // });
  
  // Promise.race(promisesArr).then(() => {
  //   console.log('someone finished users finished');
  // });
  
  
  
  
  
  
  
  
  
  
  
  // doPushups(10)
  //   .then(rest)
  //   .then(() => doPushups(9))
  //   .then(rest)
  //   .then(() => doPushups(8))
  //   .then(rest)
  //   .then(() => doPushups(7))
  //   .then(rest)
  //   .then(() => {
  //     console.log('yaay i finished');
  //   }).catch(() => {
  //     console.log('reject');
  //   });
  
  
  async function cursorTrain() {
    await doPushups(10);
    await rest();
    await doPushups(9);
    await rest();
    await doPushups(8);
    await rest();
    await doPushups(7);
    await rest();
    console.log('Training is done');
  }
  
  
  // cursorTrain();
  
  
  async function groupTrain() {
    try {
      const user1Promise = doPushups(25);
      const user2Promise = doPushups(10);
      await user1Promise;
      await user2Promise;
      console.log('all users finished');
    } catch {
      console.log('dfsdf');
    }
    // Promise.all(promisesArr).then(() => {
    // });
  }
  
  // groupTrain();
  
  
  
  
  const test2 = async () => {
    try {
      await doPushups(30);
    } catch {
      console.log('failed');
    } finally {
      console.log('finally');
    }
  }
  
  // test2();


//   function doPushups(n, onFinish) {
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

//CALLBACK HELL

// doPushups(10, () => {
//   rest(() => {
//     doPushups(9, () => {
//         rest(() => {
//             console.log("Yess, I finished!!")
//         })
//     });
//   });
// });

// WITH PROMISES REST-PUSHUPS

function doPushups(n) {

  return new Promise((resolve) => {
    const time = n * 200;

    setTimeout(() => {
      console.log(n + " pushups done " + new Date().toLocaleString());

      resolve();
    }, time);

  });
}

function rest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Rest is done " + new Date().toLocaleString());

      resolve()
    }, 1000);
  });
}

// doPushups(10).then(() => {
//     console.log("10 done");
//     return rest()

// }).then(() => {
//     console.log("I rest")
// })

// doPushups(10)
//     .then(rest) //can write without arrow if no arg in func
//     .then(() => doPushups(9))
//     .then(() => rest())
//     .then(() => doPushups(8))
//     .then(() => rest())
//     .then(() => {
//     console.log("Finished")
//     })


// ASYNC
// function doHeawyLifting(n) {

//   return new Promise ((resolve) => {
//     const time = n * 200;

//     setTimeout(() => {
//       console.log(n + " lifts done " + new Date().toLocaleString());

//       resolve();
//     }, time);
//   })

// }

// async function train() {
//   await doHeawyLifting(8);

//   console.log(`done`)
// }

// train()

// ASYNC PushUps

async function cursorPushUps() {
  await doPushups(8);
  rest()
}

// cursorPushUps()

// VLADILEN MININ

console.log ("Requesting data...")

// setTimeout(() => {
//   console.log ("Preparing data...")

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log ('Sata received', backendData)
//   }, 2000);
// }, 2000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     }
//     resolve(backendData) // Это будет нам доступно после then, как данные.
//   }, 2000)
// })

// p.then(backendData => {
//   console.log("Promise resolved", backendData);
// })


// NO CHAINING
// p.then(backendData => {
//     const p2 = new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         backendData.modified = true;

//         resolve(backendData)
//         // console.log ('Data received', backendData)
//       }, 2000)
//     })

//     p2.then(clientData => {
//       console.log('Data received', clientData)
//     })
//   })


// CHAINING - ADD RETURN
// p.then(backendData => {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       backendData.modified = true;
//       resolve(backendData)
//     }, 2000)
//   })
// })
//   .then (data => {
//   console.log('Data received', data)
//   data.frompromise = true; 
//   return data
// })
//   .then(data => {
//   console.log('Data modified', data)
// }) 
// .finally(() => {
//   console.log('Finally')
// })

// FISHKA:)

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

