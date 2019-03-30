// Variable declaration
const form = document.forms[0];
const input = form.elements[0];
const tasks = document.querySelector('.app__list');
const clear = document.querySelector('.app__clear');
const message = document.querySelector('.app__message');
const toggle = document.querySelector('.theme');


// functions
// Create an array to store the data we create
// Data - what the user writes in the form field
var itemData = JSON.parse(localStorage.getItem('tasks')) || [];
// Add data after page reload
if (itemData.length > 0) {
	itemData.forEach(item => {
		tasks.insertAdjacentHTML('beforeend', `
		<li class="app-item">
			<span class='app-item__text'>${item}</span>
			<div class='app-item__edit'>
				<a href='#' class='app-item__complete'><i class='demo-icon icon-check'></i></a>
				<a href='#' class='app-item__update'><i class='demo-icon icon-edit'></i></a>
				<a href='#' class='app-item__delete'><i class='demo-icon icon-trash'></i></a>
			</div>
		</li>`);
		// Task Editing Function
		handlerTask(item);
	});
}
// 1. formHandler:
function formHandler() {
	// Resetting default form behavior
	event.preventDefault();
	// Variable that stores the text of the input field
	let inputValue = input.value;
	// Check for filling the input field
	if (inputValue === '') alertMessage('Please fill in the field', 'app__message_error');
	else {
		// create task
		createTask(inputValue);
		// clear the field and focus on it.
		input.value = '';
		input.focus();
		// Add task text to itemData array
		itemData.push(inputValue);
		// Save the task text in the browser's memory
		localStorage.setItem('tasks', JSON.stringify(itemData));
		// task actions
		handlerTask(inputValue);
	}

}

// 2. alertMessage
function alertMessage(text, className) {
	message.textContent = text;
	message.classList.add(className, 'app__message_show');
	input.focus();
	setTimeout(() => message.classList.remove(className, 'app__message_show'), 3000);
}

// 3. createTask
function createTask(input) {
	// create element
	const item = document.createElement('li');
	// add class
	item.classList.add('app-item');
	// add html code inside the item
	item.innerHTML = `
	<span class='app-item__text'>${input}</span>
	<div class='app-item__edit'>
		<a href='#' class='app-item__complete'><i class='demo-icon icon-check'></i></a>
		<a href='#' class='app-item__update'><i class='demo-icon icon-edit'></i></a>
		<a href='#' class='app-item__delete'><i class='demo-icon icon-trash'></i></a>
	</div>`;
	// append item inside the tasks
	tasks.appendChild(item);
}

// 4. handlerTask
function handlerTask(task) {
	// Variable declaration
	const items = document.querySelectorAll('.app-item');
	// check items
	items.forEach(action => {
		if (action.querySelector('.app-item__text').textContent === task) {
			// Task Execution Event
			action.querySelector('.app-item__complete').addEventListener('click', event => {
				// our target element will inside the variable
				const target = event.target;
				// reset default event
				event.preventDefault();
				// add class
				action.querySelector('.app-item__text').classList.toggle('app-item__text_complete');
				target.classList.toggle('visability');
			});
			// Task Editing Event
			action.querySelector('.app-item__update').addEventListener('click', event => {
				// reset default event
				event.preventDefault();
				// edit input value
				input.value = task;
				input.focus();
				tasks.removeChild(action);
				// filter item for localStorage
				itemData = itemData.filter(item => item !== task);
				localStorage.setItem('tasks', JSON.stringify(itemData));
			});
			// Task delete event
			action.querySelector('.app-item__delete').addEventListener('click', event => {
				// reset default event
				event.preventDefault();
				// remove child inside tasks list
				tasks.removeChild(action);
				// filter item for localStorage
				itemData = itemData.filter(item => item !== task);
				localStorage.setItem('tasks', JSON.stringify(itemData));
				// show message to display
				alertMessage('Task successfully deleted', 'app__message_success');
			});
		}
	});
}
// 5. clearTasks
function clearTasks() {
	// reset default event
	event.preventDefault();
	if (itemData.length <= 0) alertMessage('There are no tasks to delete', 'app__message_error');
	else {
		// Clearing the array
		itemData = [];
		// Delete the saved data from LocalStorage
		localStorage.removeItem('tasks');
		// Using a loop, we delete all child elements of the list with tasks.
		const taskItems = tasks.querySelectorAll('.app-item');
		if (taskItems.length > 0) taskItems.forEach(item => tasks.removeChild(item));
		// show message to display
		alertMessage('All tasks deleted successfully', 'app__message_success');
	}
}
// 6.themeToggle
function themeToggle() {
	// reset default event
	event.preventDefault();
	document.querySelector(':root').classList.toggle('light-theme');
}
// events
form.addEventListener('submit', formHandler);
clear.addEventListener('click', clearTasks);
toggle.addEventListener('click', themeToggle);