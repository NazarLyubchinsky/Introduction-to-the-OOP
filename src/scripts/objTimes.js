export class Time {
	constructor(hours, minutes, seconds) {
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
	}

	printTime() {
		console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
	}

	changeSeconds(seconds) {
		const totalSeconds = this.seconds + seconds;
		const newSeconds = totalSeconds % 60;
		const minutesAdd = Math.floor(totalSeconds / 60);
		this.seconds = newSeconds;
		this.addMinutes(minutesAdd);
	}

	addMinutes(minutesAdd) {
		const totalMinutes = this.minutes + minutesAdd;
		const newMinutes = totalMinutes % 60;
		const hoursAdd = Math.floor(totalMinutes / 60);
		this.minutes = newMinutes;
		this.addHours(hoursAdd);
	}

	addHours(hoursAdd) {
		const newHours = (this.hours + hoursAdd) % 24;
		this.hours = newHours;
	}


}
