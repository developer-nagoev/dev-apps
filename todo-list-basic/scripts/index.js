/**================================================
 * @name TODOList
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variable declaration
const form = document.querySelector('.tasks-form');
const input = form.querySelector('#task');
const inputFilter = document.querySelector('#filter');
const tasksList = document.querySelector('.tasks-list');
const clean = document.querySelector('.tasks-clear');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.confirm-modal');
const confirm = document.querySelector('.yes-btn');
const refusing = document.querySelector('.no-btn');

// Functions

// 1. Add tasks
function createTask(event) {
	// Reset default event
	event.preventDefault();
	// Variable declaration
	let task = document.createElement('li');
	let taskRemove = document.createElement('a');
	// Add class
	task.className = 'task-list__item';
	taskRemove.classList = 'task-list__link';
	// Add text content
	task.textContent = input.value;
	taskRemove.innerHTML = `<i class="fa fa-remove"></i>`;
	// Add to tasks list
	tasksList.appendChild(task);
	task.appendChild(taskRemove);
	// Add to localStorage input value
	addToLocalStorage(input.value);
	// Reset input value
	input.value = '';
}

// 2. removeTask
function removeTask(event) {
	// Condition check and show overlay
	if (event.target.parentElement.classList.contains('task-list__link'))
		overlay.style.display = 'flex';
	// Positive user choice event
	confirm.addEventListener('click', () => {
		overlay.style.display = 'none';
		// Remove task from tasks list
		event.target.parentElement.parentElement.remove();
		// Remove task from local Storage
		removeToLocalStorage(event.target.parentElement.parentElement);
	});
	// Negative user selection event
	refusing.addEventListener('click', () => (overlay.style.display = 'none'));
}

// 3.removeAllTasks
function removeAllTasks(event) {
	// Reset default event
	event.preventDefault();
	// Show modal and expect user selection event
	overlay.style.display = 'flex';
	confirm.addEventListener('click', () => {
		overlay.style.display = 'none';
		while (tasksList.firstChild) tasksList.removeChild(tasksList.firstChild);
		clearLocalStorage();
	});
	refusing.addEventListener('click', () => overlay.style.display = 'none');
}

// 4.filterTasks
function filterTasks(event) {
	// Reduce text to lower case
	const text = event.target.value.toLowerCase();
	// Loop tasks array
	document.querySelectorAll('.task-list__item').forEach(listItem => {
		let item = listItem.firstChild.textContent;
		// Condition check
		if (item.toLocaleLowerCase().indexOf(text) != -1) listItem.style.display = 'block';
		else listItem.style.display = 'none';
	});
}

// 5. Modal window events functions
function closeModalClick(event) {
	if (event.target === overlay) overlay.style.display = 'none';
}

function closeModalEsc(event) {
	if (event.key === 'Escape') overlay.style.display = 'none';
}

// 6.addToLocalStorage
function addToLocalStorage(target) {
	// Variable declaration
	let tasks;
	// Condition check
	if (localStorage.getItem('tasks') === null) tasks = [];
	else tasks = JSON.parse(localStorage.getItem('tasks'));
	// Push input value to our array
	tasks.push(target);
	// LocalStorage set item
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 7.removeToLocalStorage
function removeToLocalStorage(target) {
	// Variable declaration
	let tasks;
	// Condition check
	if (localStorage.getItem('tasks') === null) tasks = [];
	else tasks = JSON.parse(localStorage.getItem('tasks'));
	// Loop array
	tasks.forEach((task, index) => {
		if (target.textContent === task) tasks.splice(index, 1);
	});
	// LocalStorage set item
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 8.clearLocalStorage
function clearLocalStorage() {
	localStorage.clear();
}

// 9. getTasks after refresh page
function getTasks() {
	// Variable declaration
	let tasks;
	// Condition check
	if (localStorage.getItem('tasks') === null) tasks = [];
	else tasks = JSON.parse(localStorage.getItem('tasks'));
	// Loop array
	tasks.forEach(task => {
		// Variable declaration
		let taskItem = document.createElement('li');
		let taskItemRemove = document.createElement('a');
		// Add class
		taskItem.className = 'task-list__item';
		taskItemRemove.classList = 'task-list__link';
		// Add text content
		taskItem.textContent = task;
		taskItemRemove.innerHTML = `<i class="fa fa-remove"></i>`;
		// Add to tasks list
		tasksList.appendChild(taskItem);
		taskItem.appendChild(taskItemRemove);
	});
}

// Events
function eventLaunch() {
	document.addEventListener('DOMContentLoaded', getTasks);
	form.addEventListener('submit', createTask);
	tasksList.addEventListener('click', removeTask);
	clean.addEventListener('click', removeAllTasks);
	inputFilter.addEventListener('keyup', filterTasks);
	window.addEventListener('click', closeModalClick);
	window.addEventListener('keydown', closeModalEsc);
}

// 10.eventLaunch
eventLaunch();