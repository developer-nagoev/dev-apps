/**================================================
 * @name Book List
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables declaration
const form = document.forms[0];
const table = document.querySelector('.book-list');
const message = document.querySelector('.message');


// class Book
class Book {
	constructor(name, author, isbn) {
		this.name = name;
		this.author = author;
		this.isbn = isbn;
	}
}
// class UI
class UI {
	// add form data to list
	addFormDataToList(data) {
		const tableRow = document.createElement('tr');
		tableRow.classList.add('table__row');
		tableRow.innerHTML = `
			<td class="table__cell">${data.name}</td>
			<td class="table__cell">${data.author}</td>
			<td class="table__cell">${data.isbn}</td>
			<td class="table__cell"><button class="delete">&times;</button></td>`;
		table.appendChild(tableRow);
	}
	// show message to display
	showMessage(text, action) {
		message.textContent = text;
		message.classList.add(action);
		setTimeout(() => message.classList.remove(action), 2000);
	}
	// clear form data
	clearFormData() {
		form.elements[0].value = '';
		form.elements[1].value = '';
		form.elements[2].value = '';
	}
	// delete book item from list
	removeBookItem(target) {
		target.parentElement.parentElement.remove();
	}
}

// class Store
class Store {
	// get items from localStorage data
	static getItems() {
		let booksArr;
		if (localStorage.getItem('books') === null) booksArr = [];
		else booksArr = JSON.parse(localStorage.getItem('books'));
		return booksArr;
	}
	// add items to localStorage data
	static addItems(books) {
		const booksArr = Store.getItems();
		booksArr.push(books);
		localStorage.setItem('books', JSON.stringify(booksArr));
	}
	// display items from localStorage data
	static displayItems(books) {
		const booksArr = Store.getItems(books);
		booksArr.forEach(book => {
			const ui = new UI();
			ui.addFormDataToList(book);
		});
	}
	// remove items from localStorage data
	static removeItems(isbn) {
		const booksArr = Store.getItems();
		booksArr.forEach((book, index) => {
			if (book.isbn === isbn) booksArr.splice(index, 1);
		});
		localStorage.setItem('books', JSON.stringify(booksArr));
	}
}

// events
document.addEventListener('DOMContentLoaded', Store.displayItems);

form.addEventListener('submit', e => {
	// Reset default event
	e.preventDefault();
	// Get form values
	const name = document.querySelector('#name').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;
	// Create new UI
	const ui = new UI();
	// Validation fields
	if (name === '' || author === '' || isbn === '') {
		// Show message to display
		ui.showMessage('Please fill in the fields', 'fail');
	} else {
		// Create new Book 
		const book = new Book(name, author, isbn);
		// Add form values to table cells
		ui.addFormDataToList(book);
		// Add  form values to localStorage
		Store.addItems(book);
		// Show message to display
		ui.showMessage('Book successfully added', 'success');
		// Clear form values
		ui.clearFormData();
	}

});

table.addEventListener('click', e => {
	// Create new UI
	const ui = new UI();
	const target = e.target;
	if (target.classList.contains('delete')) {
		// Remove book item from list
		ui.removeBookItem(target);
		// Remove book item from localStorage
		Store.removeItems(target.parentElement.previousElementSibling.textContent);
		// Show message to display
		ui.showMessage('Book successfully deleted', 'success');
	}
});



