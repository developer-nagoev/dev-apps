/**================================================
 * @name Cost Calc
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables daclaration
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const result = document.querySelector('.result');

//Functions
function calc() {
	// Variables daclaration
	const priceValue = price.value;
	const quantityValue = quantity.value;
	const calc = priceValue * quantityValue;
	const quantityCount = document.querySelector('.quantity-count');
	// Add text content
	quantityCount.textContent = quantityValue;
	result.textContent = `${calc.toFixed(2)}`;
}

// For first open
calc();
// Events
price.addEventListener('input', calc);
quantity.addEventListener('input', calc);