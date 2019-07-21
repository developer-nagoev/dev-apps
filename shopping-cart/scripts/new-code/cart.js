class Cart {
	storeCheck(store) {
		// check condition to empty local storage
		if (store.length > 0) {
			store.forEach(storeItem => {
				cartList.insertAdjacentHTML('beforeend', `
			<tr id="${storeItem.id}">
				<td class="table__col">
					<img src="${storeItem.image}" alt="Course image">
				</td>
				<td class="table__col table__col-name">${storeItem.name}</td>
				<td class="table__col">${storeItem.cost}</td>
				<td class="table__col">
					<button class="delete" data-remove="${storeItem.button}">&#215;</button>
				</td>
			</tr>`);
				document.querySelector(`[data-product="${storeItem.button}"]`).classList.add('isDisabled');
			});

		}
	}
	// add data id to product item
	uniqueId() {
		return 'id-' + Math.random().toString(36).substr(2, 16)
	}
	// add product to cart and local storage
	addToCart(target, store, list) {
		const tableRow = document.createElement('tr');
		// add id attr
		tableRow.setAttribute('id', this.uniqueId());
		// insert html code to element
		tableRow.innerHTML = `
			<td class="table__col">
				<img src="${target.image}" alt="Course image">
			</td>
			<td class="table__col table__col-name">${target.name}</td>
			<td class="table__col">${target.cost}</td>
			<td class="table__col">
				<button class="delete" data-remove="${target.button}">&#215;</button>
			</td>`;
		// add element to cart list
		list.appendChild(tableRow);
		// add to local storage
		store.push({
			id: tableRow.id,
			image: target.image,
			name: target.name,
			cost: target.cost,
			button: target.button
		});
		localStorage.setItem('courses', JSON.stringify(store));
	}
	// to get product data
	getCard(target, store, list) {
		const card = {
			image: target.querySelector('.courses-item__image').src,
			name: target.querySelector('.courses-item__title').textContent,
			cost: target.querySelector('.courses-item__prices-new').textContent,
			button: target.querySelector('.courses-item__btn').dataset.product
		}
		// call function
		this.addToCart(card, store, list);
	}
	// remove element from cart
	deleteFromCart(list, element, store) {
		// loop
		list.forEach(item =>
			// check condition and disable className from button if condition is true
			item.dataset.product === element.dataset.remove ? item.classList.remove('isDisabled') : false);
		// remove element from cart
		element.parentElement.parentElement.remove();
		// remove element from from local storage
		store = store.filter(item => item.id !== element.parentElement.parentElement.id);
		localStorage.setItem('courses', JSON.stringify(store));
	}
	// clear all data from cart and local storage
	clearCart(list, buttons) {
		list.innerHTML = '';
		localStorage.clear();
		buttons.forEach(button => button.classList.remove('isDisabled'));
	}

}

export { Cart as default };