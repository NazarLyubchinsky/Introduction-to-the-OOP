import 'normalize.css'
import './styles/main.scss';

import { Car } from './scripts/car';
import { Fraction } from './scripts/workObjects';
import { Time } from './scripts/objTimes';


document.addEventListener("DOMContentLoaded", () => {
	let myCar = new Car("Toyota", "Corolla", 2020, 120);
	myCar.showScreen();
	console.log(myCar)
	console.log(myCar.calculateTravelTime(500)); // 5
});

// TASK 2

const fraction1 = new Fraction(4, 2);
const fraction2 = new Fraction(1, 2);
const fraction3 = new Fraction(5, 4);
const add = fraction1.add(fraction2);
console.log(add);

const subtract = fraction1.subtract(fraction2);
console.log(subtract);

const multiply = fraction1.multiply(fraction2);
console.log(multiply);

const divide = fraction1.divide(fraction2);
console.log(divide);

const reduce = fraction3.reduce();
console.log(reduce);

// TASK 3

document.addEventListener("DOMContentLoaded", () => {
	let myTime = new Time(15, 30, 45)
	myTime.printTime(); // виведе "10:30:45"
	myTime.changeSeconds(30);
	myTime.printTime(); // виведе "10:31:15"
	myTime.addMinutes(45);
	myTime.printTime(); // виведе "11:16:15"
	myTime.addHours(4);
	myTime.printTime(); // 
});
