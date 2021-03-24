
const currentTimestamp = String(Date.now())
console.log(String.fromCharCode(currentTimestamp.slice(-5)));


function getRandomChinese(n){
    let chineseString = '';
    let i = 0;

    while (i < n) {
        chineseString += String.fromCharCode(String(Date.now()).slice(-5));
        i++
    }

    return chineseString
}

console.log(getRandomChinese(3))

// get date
// save to chineseString
//get date after 50ms
// save to chineseString
//get date after 50ms
// save to chineseString
//stop when it is enough symbols