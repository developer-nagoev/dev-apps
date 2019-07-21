(function () {
	/**
	 * @VARIABLES
	 */
	const coursesList = document.querySelector('.courses-list');
	// const coursesListItem = coursesList.querySelectorAll('.courses-item');
	const coursesListItemBtn = coursesList.querySelectorAll('.cart-btn');
	const cartList = document.querySelector('.table-body');
	const cartListClear = document.querySelector('.cart__clear');
	let store = JSON.parse(localStorage.getItem('courses')) || [];

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
	/**
	 * @FUNCTIONS
	 */
	// add data id to product item
	const uniqueId = () => 'id-' + Math.random().toString(36).substr(2, 16);
	// add product to cart and local storage
	const addToCart = obj => {
		const tableRow = document.createElement('tr');
		// add id attr
		tableRow.setAttribute('id', uniqueId());
		// insert html code to element
		tableRow.innerHTML = `
			<td class="table__col">
				<img src="${obj.image}" alt="Course image">
			</td>
			<td class="table__col table__col-name">${obj.name}</td>
			<td class="table__col">${obj.cost}</td>
			<td class="table__col">
				<button class="delete" data-remove="${obj.button}">&#215;</button>
			</td>`;
		// add element to cart list
		cartList.appendChild(tableRow);
		// add to local storage
		store.push({
			id: tableRow.id,
			image: obj.image,
			name: obj.name,
			cost: obj.cost,
			button: obj.button
		});
		localStorage.setItem('courses', JSON.stringify(store));
	}
	// to get product data
	const getCard = target => {
		const card = {
			image: target.querySelector('.courses-item__image').src,
			name: target.querySelector('.courses-item__title').textContent,
			cost: target.querySelector('.courses-item__prices-new').textContent,
			button: target.querySelector('.courses-item__btn').dataset.product
		}
		// call function
		addToCart(card);
	}
	/**
	 * @EVENTS
	 */
	// courses list click event
	coursesList.addEventListener('click', e => {
		e.preventDefault();
		// check condition
		if (e.target.classList.contains('cart-btn')) {
			e.target.classList.add('isDisabled');
			// call function
			getCard(e.target.parentElement.parentElement);
		}
	});
	// cart list click event
	cartList.addEventListener('click', e => {
		const element = e.target;
		// check condition
		if (element.classList.contains('delete')) {
			// loop
			coursesListItemBtn.forEach(item =>
				// check condition and disable className from button if condition is true
				item.dataset.product === element.dataset.remove ? item.classList.remove('isDisabled') : false);
			// remove element from cart
			element.parentElement.parentElement.remove();
			// remove element from from local storage
			store = store.filter(item => item.id !== element.parentElement.parentElement.id);
			localStorage.setItem('courses', JSON.stringify(store));
		};
	});
	// clear all data from cart and local storage
	cartListClear.addEventListener('click', e => {
		e.preventDefault();
		cartList.innerHTML = '';
		localStorage.clear();
		coursesListItemBtn.forEach(button => button.classList.remove('isDisabled'));
	});
})();