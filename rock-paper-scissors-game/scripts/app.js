/**================================================
 * @name Rock Paper Scissors Game
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables declaration
// Game moves
const rock = document.querySelector('.r');
const paper = document.querySelector('.p');
const scissors = document.querySelector('.s');
// Game scores
let userScoreCount = 0;
let computerScoreCount = 0;
// Game helper elements
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
const resultMessage = document.querySelector('.game-message');
const repeat = document.querySelector('.repeat');

// Game functions

// 1. gameMove
function gameMove(playerChoice) {
	const computerChoice = computerChoiceMove();
	switch (computerChoice + playerChoice) {
		case 'rp':
		case 'ps':
		case 'sr':
			optionWin(playerChoice, computerChoice);
			break;
		case 'pr':
		case 'sp':
		case 'rs':
			optionLose(playerChoice, computerChoice);
			break;
		case 'rr':
		case 'ss':
		case 'pp':
			optionDraw(playerChoice, computerChoice);
			break;
	}
}

// 2. computerChoiceMove
function computerChoiceMove() {
	const choiceList = ['r', 'p', 's'];
	const choiceMove = Math.floor(Math.random() * 3);
	return choiceList[choiceMove];
}

// 3.1. Win Option
function optionWin(playerChoice, computerChoice) {
	userScoreCount++;
	userScore.textContent = userScoreCount;
	changeBorder(playerChoice, 'win');
	alertMessage('You WIN Bro!!!', 'win', playerChoice, computerChoice);
	endGame();
}

// 3.2. Lose Option
function optionLose(playerChoice, computerChoice) {
	computerScoreCount++;
	computerScore.textContent = computerScoreCount;
	changeBorder(playerChoice, 'lose');
	alertMessage('You LOSE Bro!!!', 'lose', playerChoice, computerChoice);
	endGame();
}

// 3.3. Draw Option
function optionDraw(playerChoice, computerChoice) {
	userScoreCount++;
	computerScoreCount++;
	userScore.textContent = userScoreCount;
	computerScore.textContent = computerScoreCount;
	changeBorder(playerChoice, 'draw');
	alertMessage("It's DRAW !!!", 'lose', playerChoice, computerChoice);
	endGame();
}

// 4. Change border
function changeBorder(item, className) {
	document.querySelector(`.${item}`).classList.add(className);
	setTimeout(() => document.querySelector(`.${item}`).classList.remove(className), 1000);
}

// 5. alertMessage
function alertMessage(message, action, playerChoice, computerChoice) {
	if (action === 'win') {
		resultMessage.innerHTML = `
		${wordConvert(playerChoice)}<span class="small-info">(player)</span> beats
		${wordConvert(computerChoice)}<span class="small-info">(comp)</span> .${message}`;
	}
	if (action === 'lose') {
		resultMessage.innerHTML = `
		${wordConvert(computerChoice)}<span class="small-info">(comp)</span> beats
		${wordConvert(playerChoice)}<span class="small-info">(player)</span>. ${message}`
	}
	if (action === 'equals') {
		resultMessage.innerHTML = `
		${wordConvert(computerChoice)}<span class="small-info">(comp)</span> equals
		${wordConvert(playerChoice)}<span class="small-info">(player)</span>. ${message}`
	}

}
// 6. wordConvert
function wordConvert(word) {
	return word === 'r' ? 'Rock' : word === 'p' ? 'Paper' : 'Scissors';
}

// 7.endGame
function endGame() {
	// Check condition
	if (userScoreCount === 3) {
		resultMessage.textContent = 'End Game!!! You WIN BRO!!!';
		document.body.classList.add('end-game');
		repeat.style.display = 'block';
	}
	if (computerScoreCount === 3) {
		resultMessage.textContent = 'End Game!!! You LOSE BRO!!!';
		document.body.classList.add('end-game');
		repeat.style.display = 'block';
	}
	if (userScoreCount === 3 && computerScoreCount === 3) {
		resultMessage.textContent = 'End Game!!! Its DRAW BRO!!!';
		document.body.classList.add('end-game');
		repeat.style.display = 'block';
	}
}

// Game events
rock.addEventListener('click', () => gameMove('r'));
paper.addEventListener('click', () => gameMove('p'));
scissors.addEventListener('click', () => gameMove('s'));
repeat.addEventListener('click', () => window.location.reload());



