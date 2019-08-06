class UI {
	constructor() {
		this.init()
	}
	init(budget) {
		// variables
		const amount = document.querySelector('.amount__count');
		const left = document.querySelector('.left__count');
		// inner html
		amount.innerHTML = `&#36; ${budget}`;
		left.innerHTML = `&#36; ${budget}`;
	}
	updateBudget(name, amount, budgetList) {
		// variables
		const list = document.querySelector(budgetList);
		const listItem = document.createElement('li');
		// add class
		listItem.classList.add('spend-item');
		// inner html
		listItem.innerHTML = `
			<span class="spend-item__name">${name}</span>
			<span class="spend-item__count">&#36;${amount}</span>`;
		// append to list
		list.appendChild(listItem);
	}
}

export { UI as default };