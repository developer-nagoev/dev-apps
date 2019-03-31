/**================================================
 * @name Dicee Game
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables declaration:
const message = document.querySelector('.app__head');
const playerOneImg = document.querySelector('.app-item__image_first');
const playerTwoImg = document.querySelector('.app-item__image_second');
// functions:
// 1.StartGame
function startGame() {
	let playerOne = randomResult(1, 7);
	let playerTwo = randomResult(1, 7);
	playerOneImg.src = `img/dice${playerOne}.png`;
	playerTwoImg.src = `img/dice${playerTwo}.png`;
	(playerOne > playerTwo) ? message.textContent = "Player 1 Wins!" : (playerOne === playerTwo) ? message.textContent = "Draw!" : message.textContent = "Player 2 Wins!";
}
// 2.RandomResult
function randomResult(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
// events:
message.addEventListener('click', startGame);








