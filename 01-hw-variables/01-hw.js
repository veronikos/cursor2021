let cat = 15.678;
let dog = 123.965;
let bear = 90.2345;

console.log(Math.max(cat, dog, bear));
console.log(Math.min(cat, dog, bear));

let sum = cat+dog+bear;
console.log(sum);

let flooredSum = Math.floor(cat)+Math.floor(dog)+Math.floor(bear);
console.log(flooredSum);
// округлено до сотых вверх
function ceilto100(num){
	return Math.ceil(num/100)*100;
}
console.log(ceilto100(flooredSum));

// округлено до сотых вниз
function floorto100(num){
	return Math.floor(num/100)*100;
}
console.log(floorto100(flooredSum));

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? 
console.log("Is floored sum even?");
function isEven(x) {
	if (x % 2 == 0) {
		return true;
	}
	else {
		return false;
	}
}
console.log(isEven(flooredSum)); 

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(500-sum);

// Виведіть середнє значення цін, округлене до другого знаку після коми
let animals = [cat, dog, bear];
let mean = sum/animals.length;
console.log(mean.toFixed(2));

//Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
let discount = Math.random();
console.log("Discount is " + Math.floor(discount*100) + "%");

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let invoice = (sum*(1-discount));
console.log("Sum with the discount is " + invoice.toFixed(2))
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою 
// та собівартість товарів рівно в два рази нижче їх ціни?
let sobivartist = sum/2;
console.log("Sobivartist is " + sobivartist.toFixed(2))
let lessPayed = sum - invoice;
console.log("He payed us " + lessPayed.toFixed(2) + " less.")
let profit = sobivartist-lessPayed;
console.log("Clear profit is " + profit.toFixed(2));

// Advanced
console.log (`
	Max price: ${Math.max(cat, dog, bear)} 
	Min price: ${Math.min(cat, dog, bear)}
	Value of all goods: ${sum}
	Value rounded to a less number: ${flooredSum}
	Value rounded to 100: ${floorto100(flooredSum)}
	Boolean value, is value even? ${isEven(flooredSum)} 
	Remaining sum (from 500), after purshasing all goods: ${500-sum}
	Mean value of the goods, rounded: ${mean.toFixed(2)}
	----
	Random discount: ${Math.floor(discount*100)} %
	Sum with the discount is ${invoice.toFixed(2)}
	Cost of the goods itself: ${sobivartist.toFixed(2)}
	Customer payed us ${lessPayed.toFixed(2)} uah less.
	Clear profit is ${profit.toFixed(2)}
	`);
