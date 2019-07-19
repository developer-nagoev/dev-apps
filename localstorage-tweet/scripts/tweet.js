/**
 * @param Class
 */
class Tweet {
	constructor(value) {
		// create a variables
		this.recordItem = document.createElement('li');
		// this.recordText = document.createElement('span');
		this.value = value;
	}
	// function to add record to the list and local storage
	addTo(list, listBody, storeArr) {
		// add class
		this.recordItem.classList.add('app-list__item');
		// set attr and text content
		this.recordItem.setAttribute('id', this.uniqueId())
		// append record item to list
		this.recordItem.innerHTML = `
			<span class="app-list__text">${this.value}</span>
			<span class="app-list__delete">&#215;</span>`;
		list.appendChild(this.recordItem);
		// show block
		listBody.style.display = 'block';
		// add data to local storage
		storeArr.push({ text: this.value, id: this.recordItem.id });
		localStorage.setItem('messages', JSON.stringify(storeArr));
	}
	// function to get random id
	uniqueId() {
		return 'id-' + Math.random().toString(36).substr(2, 16);
	}
	// function to delete record item from list and local storage
	deleteTo(list, eve, storeArr, listBody) {
		const target = eve.target;
		// check condition
		if (target.className === 'app-list__delete') {
			target.parentElement.remove();
			// filter array
			const targetID = target.parentElement.id;
			storeArr = storeArr.filter(item => item.id !== targetID);
			// update local storage
			localStorage.setItem('messages', JSON.stringify(storeArr));
		}
		// if list don`t have children - hide him
		list.children.length === 0 ? listBody.style.display = 'none' : false;
	}
}

// export class
export { Tweet as default };