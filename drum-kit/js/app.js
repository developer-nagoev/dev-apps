/**================================================
 * @name Drum Kit
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// variables
const parent = document.querySelector(".drum__list");

// functions
function keyHandler() {
	if (event.keyCode == '87' || event.target.className === 'w drum') {
		addAnimation('.w.drum');
		audioCreated('sounds/tom-1.mp3');
	}
	if (event.keyCode == '65' || event.target.className === 'a drum') {
		addAnimation('.a.drum');
		audioCreated('sounds/tom-2.mp3');
	}
	if (event.keyCode == '83' || event.target.className === 's drum') {
		addAnimation('.s.drum');
		audioCreated('sounds/tom-3.mp3');
	}
	if (event.keyCode == '68' || event.target.className === 'd drum') {
		addAnimation('.d.drum');
		audioCreated('sounds/tom-4.mp3');
	}
	if (event.keyCode == '74' || event.target.className === 'j drum') {
		addAnimation('.j.drum');
		audioCreated('sounds/snare.mp3');
	}
	if (event.keyCode == '75' || event.target.className === 'k drum') {
		addAnimation('.k.drum');
		audioCreated('sounds/crash.mp3');
	}
	if (event.keyCode == '76' || event.target.className === 'l drum') {
		addAnimation('.l.drum');
		audioCreated('sounds/kick-bass.mp3');
	}
}
// functions helpers
function audioCreated(address) {
	let audio = new Audio(address);
	audio.play();
}

function addAnimation(target) {
	let targetEl = document.querySelector(target)
	targetEl.classList.add('pressed');
	setTimeout(() => targetEl.classList.remove('pressed'), 0.3);
}


// events
parent.addEventListener("click", keyHandler)
window.addEventListener("keydown", keyHandler);
