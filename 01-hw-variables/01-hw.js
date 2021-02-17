const cat = 15.678;
const dog = 123.965;
const bear = 90.2345;

const sum = cat+dog+bear;
const flooredSum = Math.floor(cat)+Math.floor(dog)+Math.floor(bear);
// округлено до сотых вверх
function ceilto100(num){
	return Math.ceil(num/100)*100;
}

// округлено до сотых вниз
function floorto100(num){
	return Math.floor(num/100)*100;
}

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? 
function isEven(x) {
	if (x % 2 == 0) {
		return true;
	}
	else {
		return false;
	}
}

// Виведіть середнє значення цін, округлене до другого знаку після коми
const animals = [cat, dog, bear];
const mean = sum/animals.length;

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const discount = Math.random();

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const discountSum = (sum*discount);
const sumToPay = (sum*(1-discount));
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою 
// та собівартість товарів рівно в два рази нижче їх ціни?
const sobivartist = sum/2;
const profit = sobivartist-discountSum;

// Advanced
console.log (`
	Max price: ${Math.max(cat, dog, bear)} 
	Min price: ${Math.min(cat, dog, bear)}
	Sum: ${sum}
	Sum rounded to a less number: ${flooredSum}
	Sum rounded to 100: ${floorto100(flooredSum)}
	Boolean value, is value even? ${isEven(Math.floor(flooredSum))} 
	Remaining sum (from 500), after purshasing all goods: ${500-sum}
	Mean value of the goods, rounded: ${mean.toFixed(2)}
	----
	Random discount: ${Math.floor(discount*100)} %
	Sum to pay: ${Number(sumToPay.toFixed(2))}
	Sum of a discount ${discountSum.toFixed(2)}
	Clear profit is ${profit.toFixed(2)}
	`);