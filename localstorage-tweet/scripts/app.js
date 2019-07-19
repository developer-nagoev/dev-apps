// import class
import Tweet from './tweet.js';
// variables
const form = document.forms[0];
const list = document.querySelector('.app-list');
const contentBody = document.querySelector('.app-body');
let store = JSON.parse(localStorage.getItem('messages')) || [];

// check condition if local storage is not empty
if (store.length > 0) {
	store.forEach(item => {
		list.insertAdjacentHTML('beforeend', `
		<li class="app-list__item" id="${item.id}">
			<span class="app-list__text">${item.text}</span>
			<span class="app-list__delete">&#215;</span></li>
		</li>`);
	});
	contentBody.style.display = 'block';
};

// form submit event
form.addEventListener('submit', e => {
	e.preventDefault();
	const message = form.message.value;
	// create record and past to the record list and local storage
	const tweet = new Tweet(message);
	tweet.addTo(list, contentBody, store);
	// reset form value
	form.reset();
});
// list click event
list.addEventListener('click', e => {
	// create  class instance
	const tweet = new Tweet();
	// delete record item from record list and local storage
	tweet.deleteTo(list, e, store, contentBody);
})
