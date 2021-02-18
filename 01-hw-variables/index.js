const cat = 15.678;
const dog = 123.965;
const bear = 90.2345;

const totalPriceOfAnimals = cat + dog + bear;
const flooredSum = Math.floor(cat) + Math.floor(dog) + Math.floor(bear);

const payment = 500;

// Виведіть середнє значення цін, округлене до другого знаку після коми
const animals = [cat, dog, bear];
const meanPrice = + (totalPriceOfAnimals / animals.length).toFixed(2);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати 
  // округлену до 2 знаків після коми.
const discount = Math.floor(Math.random() * 100);
const discountSum = + (totalPriceOfAnimals / 100 * discount).toFixed(2);
const sumToPay = + (totalPriceOfAnimals / 100 * (100 - discount)).toFixed(2);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою 
  // та собівартість товарів рівно в два рази нижче їх ціни?
const sobivartist = totalPriceOfAnimals / 2;
const profit = + (sobivartist - discountSum).toFixed(2);

// Advanced
console.log (`
	Max price: ${Math.max(cat, dog, bear)} 
	Min price: ${Math.min(cat, dog, bear)}
	Sum: ${totalPriceOfAnimals}
	Sum rounded to a less number: ${flooredSum}
	Sum rounded to 100: ${Math.floor(flooredSum / 100) * 100}
	Is sum value even? ${flooredSum % 2 === 0} 
	Remaining sum (from 500), after purshasing all goods: ${payment - totalPriceOfAnimals}
	Mean value of the goods, rounded: ${meanPrice}
	----
	Random discount: ${discount} %
	Sum to pay: ${sumToPay}
	Sum of a discount ${discountSum}
	Clear profit is ${profit}
	`);
