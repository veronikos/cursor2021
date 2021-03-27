function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

function getChineseSymbol() {
  return new Promise((resolve) => {
    const symbol = String.fromCharCode(String(Date.now()).slice(-5));
    resolve(symbol);
  });
}

async function getRandomChinese(n) {
  let symbols = "";

  for (let i = 0; i < n; i++) {
    await wait(50);
    symbols += await getChineseSymbol();
  }
  console.log(symbols);
}

getRandomChinese(4)
// getRandomChinese(4).finally(console.log("thank you")) 
// thank you - почему-то появляется перед тем, как пройдут все асинхронные операции