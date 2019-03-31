/**================================================
 * @name Memory Game
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/

// Variables declaration
const cards = document.querySelectorAll('.card-item');
const refreshBtn = document.querySelector('.refresh');
let firstCard;
let secondCard;
let flippedCard = false;
let lockCard = false;

// Functions
// 1.flipCard
function flipCard() {
	//  check conditions
	if (lockCard) return;
	if (this === firstCard) return;
	// add class
	this.classList.add('flip');
	//  check conditions
	if (!flippedCard) {
		flippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	checkForMatch();
}

// 2.checkForMatch
function checkForMatch() {
	var dataEquals = firstCard.dataset.name === secondCard.dataset.name;
	dataEquals ? removeEvents() : removeFlip();
}

// 3.removeEvents
function removeEvents() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	resetBoard();
}
// 4.removeFlip
function removeFlip() {
	lockCard = true;
	setTimeout(function () {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard();
	}, 1500);
}
// 5.resetBoard
function resetBoard() {
	flippedCard = false;
	lockCard = false;
	firstCard = null;
	secondCard = null;
}
// 6.shuffleCards
(function shuffleCards() {
	cards.forEach(card => card.style.order = Math.floor(Math.random() * 12));
})();

//Events
cards.forEach(card => card.addEventListener('click', flipCard));
refreshBtn.addEventListener('click', () => window.location.reload());
