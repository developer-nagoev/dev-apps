/**================================================
 * @name Number Guesser
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
//  Variables declaration
// Game Value
let min = 1;
let max = 10;
let winNumber = getRundomNumber(min, max);
let guessesLeft = 3;
// UI elements
const minNumber = document.querySelector('.min-number');
const maxNumber = document.querySelector('.max-number');
const guessInput = document.querySelector('.game-input');
const gameBtn = document.querySelector('#game-btn');
const gameResult = document.querySelector('.game-result');
const gameParent = document.querySelector('.game');

//Assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

// Functions
// 1. playGame
function playGame() {
	// Variables declaration
	const guessNumber = parseInt(guessInput.value);
	// Validation input
	// Check conditions
	if (isNaN(guessNumber) || guessNumber < min || guessNumber > max)
		gameMessage(`Please enter a number between ${min} and ${max}`, '#ff7675');
	else if (guessNumber === winNumber)
		gameOver(true, `${winNumber} is correct number, Congrats! You WIN!`);
	else {
		guessesLeft -= 1;
		if (guessesLeft === 0)
			gameOver(false, `Game Over, correct number is ${winNumber}`);
		else {
			guessInput.value = '';
			gameMessage(`${guessNumber} is not correct number, you have a ${guessesLeft}`, '#ff7675');
		}
	}
}
// 2.gameMessage
function gameMessage(msg, color) {
	gameResult.style.color = color;
	gameResult.textContent = msg;
}
// 3.gameOver
function gameOver(won, msg) {
	let color;
	won === true ? color = '#00b894' : color = '#ff7675';
	guessInput.disabled = true;
	guessInput.style.outline = '2px solid ' + color;
	gameResult.style.color = color;
	gameMessage(msg);
	gameBtn.textContent = 'Play Again?';
	gameBtn.className += 'play-again';
}
// 4.getRundomNumber
function getRundomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Events
gameBtn.addEventListener('click', playGame);
gameParent.addEventListener('mousedown', event => {
	if (event.target.className === 'play-again') window.location.reload();
});