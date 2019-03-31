/**================================================
 * @name CountDown
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
/* DESCRIPTION 
endDate - set launch date (ms)
nowDate - get today date and time (ms)
interval - update every second a date
distance - calculate distance from 'endDate' to the 'nowDate'
====================================
days - calculate days
hours - calculate hours
minutes - calculate minutes
seconds - calculate seconds
====================================
function addZero - add 0 if time < 10
*/
const countdown = document.querySelector('.countdown');
const endDate = new Date('Jan 1, 2021 20:00:00').getTime();
const interval = setInterval(() => {
	const nowDate = new Date().getTime();
	const distance = endDate - nowDate;
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);
	countdown.innerHTML = `
			<div class="countdown-item">${addZero(days)}<span>Days</span></div>
			<div class="countdown-item">${addZero(hours)}<span>Hourse</span></div>
			<div class="countdown-item">${addZero(minutes)}<span>Minutes</span></div>
			<div class="countdown-item">${addZero(seconds)}<span>Seconds</span></div>
		`
}, 1000)

function addZero(number) {
	return number < 10 ? `0${number}` : number;
}
