/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../03-functions/index.js":
/*!********************************!*\
  !*** ../03-functions/index.js ***!
  \********************************/
/***/ ((module) => {

eval("document.writeln(`<p>Hello.</p>`);\r\n\r\n// ex.1 Max digit from given number\r\n\r\n// вариант с Apply\r\n// function getMaxDigit(number) {\r\n//   const string = String(number);\r\n//   return Math.max.apply(Math, string.split(\"\"));\r\n// }\r\n\r\n// document.writeln(`<p>1. Max digit from 372261 is: ${getMaxDigit(372261)} </p>`);\r\n\r\n// вариант с циклом:\r\nfunction getMaxDigit(number) {\r\n  let string = String(number);\r\n  let maxDigit = 0;\r\n  for (let i = 0; i < string.length; i++) {\r\n    if (maxDigit < string[i]) {\r\n      maxDigit = string[i];\r\n    }\r\n  }\r\n  return +maxDigit;\r\n}\r\n\r\ndocument.writeln(`<p>1. Max digit from 532961 is: ${getMaxDigit(532961)} </p>`);\r\n\r\n// ex.2 Degree of a number\r\nfunction numberDegree(number, degree) {\r\n  let answer = number;\r\n  if (degree === 0) {\r\n    return 1\r\n  }\r\n  for (let i = 1; i < degree; i++) {\r\n    answer *= number;\r\n  }\r\n  return answer;\r\n}\r\ndocument.writeln(`<p>2. Degree of a number (2**5): ${numberDegree(2, 5)}</p>`);\r\n\r\n//ex.3 Name formatting\r\nfunction nameFormatting(name) {\r\n  return name[0].toUpperCase() + name.slice(1).toLowerCase();\r\n}\r\n\r\ndocument.writeln(`<p>3. Formatted name: ${nameFormatting(\"vERONIKA\")}</p>`);\r\n\r\n//ex.4 Tax count\r\nfunction taxRemoval(salary, taxPersent) {\r\n  return (salary / 100) * (100 - taxPersent);\r\n}\r\n\r\ndocument.writeln(`<p>4. Salary without taxes: ${taxRemoval(1000, 19.5)}</p>`);\r\n\r\n//ex.5 Random number from range\r\nfunction getRandomNumber(min, max) {\r\n  return Math.round(Math.random() * (max - min) + min);\r\n}\r\ndocument.writeln(`<p>5. Random number from range: \r\n${getRandomNumber(0, 68)}</p>`);\r\n\r\n//ex.6 Count letter in a word\r\nfunction countLetter(letter, word) {\r\n  const userLetter = letter;\r\n  const userWord = word.toLowerCase();\r\n  let count = 0;\r\n\r\n  for (let i = 0; i <= userWord.length; i++) {\r\n    if (userWord[i] === userLetter) {\r\n      count++;\r\n    }\r\n  }\r\n  return count;\r\n}\r\ndocument.writeln(`<p>6. Count letters \"a\" in a word \"Асталависта, незнание JS!:)\": \r\n  ${countLetter(\"а\", \"Асталависта, незнание JS!\")}</p>`);\r\n\r\n// считает правильно буквы, если в слове только русской расскладки а, или только англ.\r\n\r\n// ex.7 Convert $ to UAH and vice-versa\r\nfunction convertCurrency(value) {\r\n  const valueLowerCase = value.toLowerCase();\r\n  const ratio = 27.65;\r\n  if (valueLowerCase.endsWith(\"$\")) {\r\n    return Number((parseFloat(valueLowerCase) * ratio).toFixed(2));\r\n  }\r\n  if (valueLowerCase.endsWith(\"uah\")) {\r\n    return Number((parseFloat(valueLowerCase) / ratio).toFixed(2));\r\n  }\r\n  return `We don't convert currency other than $ or UAH`;\r\n}\r\n\r\ndocument.writeln(`<p>7. Convert $ to UAH (1:27.65) and vice-versa:  <br>  \r\n  201.5$ is ${convertCurrency(\"201.5$\")} UAH; <br> \r\n  2765uah is ${convertCurrency(\"2765uah\")} $; </p>`);\r\n\r\n// ex.8 Generate random numeric password\r\nfunction getRandomPassword(digits) {\r\n  if (digits <= 8 && digits > 0) {\r\n    return Math.random().toString().slice(-digits);\r\n  } else if (!digits || digits > 8) {\r\n    return Math.random().toString().slice(-8);\r\n  } else return document.writeln(\"Function accepts only numbers from 1 to 8\");\r\n}\r\ndocument.writeln(`8. Random numeric password: ${getRandomPassword(5.61)}`);\r\n\r\n// ex.9 Delete letters from a sentence\r\n// не работает. я еще работаю над этой функцией\r\n// function deleteLetters(letter, sentence) {\r\n//   let letter1 = String(letter);\r\n//   let sentence1 = String(sentence);\r\n//   for (let j = 0; j < sentence1.length; j++) {\r\n//     if (sentence1[j] === letter1) {\r\n//      continue;\r\n//     } sentence1 = sentence1.replace(j, \"\");\r\n//   } return sentence1;\r\n// }\r\n\r\n// console.log (deleteLetters(\"a\", \"aakalaoannalllla;a l;l;a\"))\r\n\r\n\r\nmodule.exports = {\r\n    getRandomPassword,\r\n    convertCurrency,\r\n    countLetter\r\n}\n\n//# sourceURL=webpack://webpack-practise/../03-functions/index.js?");

/***/ }),

/***/ "../05-arrays-02/index.js":
/*!********************************!*\
  !*** ../05-arrays-02/index.js ***!
  \********************************/
/***/ ((module) => {

eval("function getRandomNumber(min, max) {\r\n  return Math.round(Math.random() * (max - min) + min);\r\n}\r\n\r\n// ex. 1\r\nfunction getRandomArray(length, min, max) {\r\n  const randomArray = [];\r\n\r\n  for (let i = 0; i < length; i++) {\r\n    randomArray.push(getRandomNumber(min, max));\r\n  }\r\n\r\n  return randomArray;\r\n}\r\n\r\nconsole.log(` ex.1:`, getRandomArray(9, 1, 25));\r\n\r\n// ex. 3\r\nfunction getAverage(...numbers) {\r\n  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));\r\n\r\n  return (\r\n    myIntegerNumbers.reduce((acc, item) => acc + item) / myIntegerNumbers.length\r\n  );\r\n}\r\n\r\n// так? со скобками?\r\nconsole.log(\r\n  ` ex.3: getAverage(15, 25.2, 35, 78.4, 5, 6, 10): `,\r\n  getAverage(15, 25.2, 35, 78.4, 5, 6, 10)\r\n);\r\n\r\n// ex. 4\r\nfunction getMedian(...numbers) {\r\n  const myIntegerNumbers = numbers.filter((item) => Number.isInteger(item));\r\n  const sortedNumbers = myIntegerNumbers.sort((a, b) => a - b);\r\n  let countMedian = null;\r\n\r\n  // не понимаю как это через фильтр реализовать...\r\n  if (sortedNumbers.length % 2 === 1) {\r\n    const medianIndex = Number((sortedNumbers.length / 2).toFixed()) - 1;\r\n    countMedian = sortedNumbers[medianIndex];\r\n  } else {\r\n    const secondMedianIndex = Number((sortedNumbers.length / 2).toFixed());\r\n    const firstMedianIndex = secondMedianIndex - 1;\r\n\r\n    countMedian =\r\n      (sortedNumbers[secondMedianIndex] + sortedNumbers[firstMedianIndex]) / 2;\r\n  }\r\n\r\n  return countMedian;\r\n}\r\nconsole.log(`ex.4:`, getMedian(3, 0.5, 5, 6.7));\r\n\r\n// ex.5\r\nconst filterEvenNumbers = (...numbers) => numbers.filter((el) => el % 2 !== 0);\r\n\r\nconsole.log(` ex.5:`, filterEvenNumbers(2, 187, -0.9, 3788, -5));\r\n\r\n// ex.6\r\nfunction countPositiveNumbers(...numbers) {\r\n  const positiveNumbers = numbers.filter((num) => num > 0);\r\n\r\n  return positiveNumbers.length;\r\n}\r\n\r\nconsole.log(`ex.6:`, countPositiveNumbers(-3, 5, 7, 100, -6, -5, 6));\r\n\r\n// ex. 7\r\nconst getDividedByFive = (...numbers) => numbers.filter((num) => num % 5 === 0);\r\n\r\nconsole.log(\r\n  ` ex.7:`,\r\n  getDividedByFive(-3, 5, 45, 500, 5915, 7, 100, -6, -5, 6)\r\n);\r\n\r\n// Ex. 8\r\nconst replaceBadWords = (comment) =>\r\n  comment.replaceAll(\"fuck\", \"****\").replaceAll(\"shit\", \"****\");\r\n\r\nconsole.log(\r\n  `ex.8:`,\r\n  replaceBadWords(\"This fucking callBack is a complete shit!\")\r\n);\r\n\r\n// 9.  function divide string by three letters\r\nfunction divideByThree(enterString) {\r\n  const startString = enterString.split(\" \").join(\"\");\r\n  let finishString = [];\r\n\r\n  for (let i = 0; i < startString.length; i += 3) {\r\n    finishString.push(startString.substring(i, i + 3));\r\n  }\r\n\r\n  return finishString;\r\n}\r\n\r\nconsole.log(` ex.9:`, divideByThree(\"LOVE\"));\r\n\r\n//!!!!!! ex. 10: Generate unique reshuffle of letters\r\n// function generateCombinations(word) {\r\n//   const userWord = word;\r\n//   if (userWord.length > 10) {\r\n//     return \"Word cannot exceed 10 letters\";\r\n//   }\r\n//   if (userWord.length <= 1) {\r\n//     return userWord;\r\n//   }\r\n\r\n//   let shuffledLetters = [];\r\n\r\n//   for (let i = 0; i < userWord.length; i++) {\r\n//     let tmp = userWord.substr(0, i) + userWord.substr(i + 1);\r\n//     console.log(tmp);\r\n//     let prefix = userWord.substr(i, 1);\r\n//     console.log(prefix);\r\n//     let shuffleVariant = tmp + prefix;\r\n//     console.log(shuffleVariant);\r\n//     shuffledLetters[i] = shuffleVariant;\r\n//   }\r\n//   return shuffledLetters;\r\n// }\r\n\r\n// console.log(`Doesn't work! ex.10:`, generateCombinations(\"467\"));\r\n\r\nmodule.exports = {\r\n  divideByThree,\r\n  getMedian,\r\n  getRandomArray\r\n}\n\n//# sourceURL=webpack://webpack-practise/../05-arrays-02/index.js?");

/***/ }),

/***/ "../08-prototypes/style.css":
/*!**********************************!*\
  !*** ../08-prototypes/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-practise/../08-prototypes/style.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-practise/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _03_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../03-functions */ \"../03-functions/index.js\");\n/* harmony import */ var _03_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_03_functions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _05_arrays_02__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../05-arrays-02 */ \"../05-arrays-02/index.js\");\n/* harmony import */ var _05_arrays_02__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_05_arrays_02__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _08_prototypes_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../08-prototypes/style.css */ \"../08-prototypes/style.css\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(`Get random password`, (0,_03_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomPassword)(7))\r\nconsole.log(`Convert currency:`, (0,_03_functions__WEBPACK_IMPORTED_MODULE_0__.convertCurrency)('45$'))\r\nconsole.log(`Count letter in a word:`, (0,_03_functions__WEBPACK_IMPORTED_MODULE_0__.countLetter)(\"v\", \"Veronika\"))\r\nconsole.log(`Divide by three:`, (0,_05_arrays_02__WEBPACK_IMPORTED_MODULE_1__.divideByThree)(\"LOVE\"))\r\nconsole.log(`Get Median from random array:`, (0,_05_arrays_02__WEBPACK_IMPORTED_MODULE_1__.getMedian)(...(0,_05_arrays_02__WEBPACK_IMPORTED_MODULE_1__.getRandomArray)(9, 1, 25)))\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nconst h1 = document.createElement(\"h1\");\r\nh1.innerText = \"Hello, I am built text\";\r\nbody.appendChild(h1);\r\n\r\nconst p = document.createElement(\"p\");\r\np.innerText = \"Hello,  my style is rendered from another file, too\";\r\nbody.appendChild(p);\n\n//# sourceURL=webpack://webpack-practise/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;