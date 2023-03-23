export class Car {
	constructor(manufacturer, model, year, speed) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.year = year;
		this.speed = speed;
	}
	showScreen() {
		const carInfo = document.getElementById("car__info");
		carInfo.innerHTML = `
		<h1>task 1</h1>
		<p>Manufacturer: ${this.manufacturer}</p>
		<p>Model: ${this.model}</p>
		<p>Year: ${this.year}</p>
		<p>Speed: ${this.speed} km/h</p>
		<h2>task 2,3 in console</h2>
	 `;
	}
	calculateTravelTime(distance) {
		const hours = distance / this.speed;
		const breaks = Math.floor(hours / 4);
		const totalTime = hours + breaks;
		const roundedTime = Math.round(totalTime);
		return roundedTime;
	}
}



