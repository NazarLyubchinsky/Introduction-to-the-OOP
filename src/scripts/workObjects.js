export class Fraction {
	constructor(numerator, denominator) {
		this.numerator = numerator;
		this.denominator = denominator;
	}
	add(otherFraction) {
		const commonDenominator = this.denominator * otherFraction.denominator;
		const commonNumerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
		return new Fraction(commonNumerator, commonDenominator).reduce();
	}

	subtract(otherFraction) {
		const commonDenominator = this.denominator * otherFraction.denominator;
		const commonNumerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
		return new Fraction(commonNumerator, commonDenominator).reduce();
	}

	multiply(otherFraction) {
		const newNumerator = this.numerator * otherFraction.numerator;
		const newDenominator = this.denominator * otherFraction.denominator;
		return new Fraction(newNumerator, newDenominator).reduce();
	}

	divide(otherFraction) {
		const newNumerator = this.numerator * otherFraction.denominator;
		const newDenominator = this.denominator * otherFraction.numerator;
		return new Fraction(newNumerator, newDenominator).reduce();
	}
	reduce() {
		const gcd = (a, b) => {
			if (b === 0) return a;
			return gcd(b, a % b);
		};
		const commonDivisor = gcd(this.numerator, this.denominator);
		return new Fraction(this.numerator / commonDivisor, this.denominator / commonDivisor);
	}
}
