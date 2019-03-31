"use strict";
// Variables declaration
var appTimerHead = document.querySelector(".app__timer");
var appMessageHead = document.querySelector(".app__message");
var appInput = document.querySelector(".app__input");
var appButton = document.querySelector(".app__btn");
var appBody = document.querySelector(".app__area");
var appTimerCount = document.querySelector(".app__timer-count");
var appMessageCount = document.querySelector(".app-message-count");
var appScore = 0;
var appStartFlag = false;
var boxColors = ['#D16BA5', '#86A8E7', '#5FFBF1', '#274274', '#672149', '#235B57'];

// Functions List:
// 1.startGame
function startGame(e) {
	appScore = 0;
	appStartFlag = true;
	hideAndShow(appButton, "add");
	appBody.classList.add("app__area_start");
	appInput.setAttribute("disabled", "true");
	timerGame();
	createBox();
}
// 2.createBox
function createBox() {
	appBody.innerHTML = "";
	var box = document.createElement("div");
	var appBodySize = appBody.getBoundingClientRect();
	var boxSize = randomValue(30, 100);
	var boxPosTop = appBodySize.height - boxSize;
	var boxPosLeft = appBodySize.width - boxSize;
	var colorIndex = randomValue(0, boxColors.length);
	var boxBackground = boxColors[colorIndex];
	box.classList.add("app__box");
	box.style.backgroundColor = boxBackground;
	box.style.width = box.style.height = "".concat(boxSize, "px");
	box.style.top = "".concat(randomValue(0, boxPosTop), "px");
	box.style.left = "".concat(randomValue(0, boxPosLeft), "px");
	appBody.insertAdjacentElement("beforeend", box);
}
// 3.clickHandler
function clickHandler(e) {
	if (!appStartFlag) return;

	if (e.target.className === "app__box") {
		createBox();
		appScore++;
	}
}
// 4.inputHandler
function inputHandler() {
	var newTimeCount = appInput.value;
	appTimerCount.textContent = newTimeCount;
	hideAndShow(appMessageHead, "add");
	hideAndShow(appTimerHead, "remove");
}
// 5.randomValue
function randomValue(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
// 6.overGame
function overGame() {
	appStartFlag = false;
	appMessageCount.textContent = appScore;
	hideAndShow(appTimerHead, "add");
	hideAndShow(appMessageHead, "remove");
	hideAndShow(appButton, "remove");
	appBody.classList.remove("app__area_start");
	appBody.innerHTML = "";
	appInput.removeAttribute("disabled");
}
// 7.hideAndShow
function hideAndShow(element, action) {
	if (action === "add") element.classList.add("visually-hidden");
	if (action === "remove") element.classList.remove("visually-hidden");
}
// 8.timerGame
function timerGame() {
	var interval = setInterval(function () {
		var timeCount = parseFloat(appTimerCount.textContent);
		if (timeCount <= 0) {
			clearInterval(interval);
			overGame();
		} else appTimerCount.textContent = (timeCount - 0.1).toFixed(1);
	}, 100);
}
// Event listeners
appButton.addEventListener("click", startGame);
appBody.addEventListener("click", clickHandler);
appInput.addEventListener("input", inputHandler);

