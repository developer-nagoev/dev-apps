/**================================================
 * @name StopWatch
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
//  Variable declaration 
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let timerFlag = false;
let interval;

//  Functions 

// 1.startTimer
function startTimer() {
	if (timerFlag) return;
	timerFlag = true;
	interval = setInterval(incrementTimer, 1000);
}

// 2.incrementTimer
function incrementTimer() {
	timerTime++;
	const timerMinutes = Math.floor(timerTime / 60);
	const timerSeconds = timerTime % 60;
	minutes.textContent = addZero(timerMinutes);
	seconds.textContent = addZero(timerSeconds);
}
// 3.addZero
function addZero(number) {
	return number < 10 ? `0${number}` : number;
}

// 4.stopTimer
function stopTimer() {
	if (!timerFlag) return;
	timerFlag = false;
	clearInterval(interval);
}

// 5.resetTimer
function resetTimer() {
	stopTimer();
	timerTime = 00;
	minutes.textContent = '00';
	seconds.textContent = '00';
}

//  Events 
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);