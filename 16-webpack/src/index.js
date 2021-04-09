import { getRandomPassword, convertCurrency, countLetter } from '../../03-functions'
import { divideByThree, getMedian, getRandomArray } from '../../05-arrays-02'
import './styles.css'
import '../../08-prototypes/style.css'

console.log(`Get random password`, getRandomPassword(7))
console.log(`Convert currency:`, convertCurrency('45$'))
console.log(`Count letter in a word:`, countLetter("v", "Veronika"))
console.log(`Divide by three:`, divideByThree("LOVE"))
console.log(`Get Median from random array:`, getMedian(...getRandomArray(9, 1, 25)))

const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerText = "Hello, I am built text";
body.appendChild(h1);

const p = document.createElement("p");
p.innerText = "Hello,  my style is rendered from another file, too";
body.appendChild(p);