/**================================================
 * @name LoanСalc
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/

// Variables declaration
const form = document.querySelector('.calc-form');
const amount = form.querySelector('.amount');
const interest = form.querySelector('.interest');
const years = form.querySelector('.years');
const monthlyPay = document.querySelector('.monthly-pay');
const totalPay = document.querySelector('.total-pay');
const totalInterest = document.querySelector('.total-interest');
const errorMsg = document.querySelector('.error-message');
const loadImage = document.querySelector('.calc-loader');
const resultParent = document.querySelector('.calc-result');


// Functions
function calcResult(event) {
	// Reset default event
	event.preventDefault();
	// Variables declaration
	const principal = parseFloat(amount.value);
	const calcInterest = parseFloat(interest.value) / 100 / 12;
	const calcPay = parseFloat(years.value) * 12;
	const x = Math.pow(1 + calcInterest, calcPay);
	const monthly = (principal * x * calcInterest) / (x - 1);
	// Check condition
	if (isFinite(monthly)) {
		loadImage.style.display = 'block';
		// Timer
		setTimeout(() => {
			monthlyPay.value = monthly.toFixed(2);
			totalPay.value = (monthly * calcPay).toFixed(2);
			totalInterest.value = ((monthly * calcPay) - principal).toFixed(2);
			resultParent.style.display = 'block';
			loadImage.style.display = 'none';
		}, 3000);
	} else {
		resultParent.style.display = 'none';
		loadImage.style.display = 'none';
		errorMsg.style.display = 'block';
		// Timer
		setTimeout(() => errorMsg.style.display = 'none', 3000);
	}
}


//Event
form.addEventListener('submit', calcResult);
