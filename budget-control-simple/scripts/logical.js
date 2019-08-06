class Logic {
	constructor() {
		this.init()
	}
	init(budget, tmp) {
		this.budget = budget;
		this.tmp = tmp;
	}
	updateBudgetCount(spend, spendContainer, leftContainer) {
		// update budget
		this.budget = this.budget - spend;
		// variables
		const spendEl = document.querySelector(spendContainer);
		const left = document.querySelector(leftContainer);
		// inner content
		spendEl.innerHTML = `&#36;${this.budget}`;
		// check conditions
		if (this.budget <= 0) {
			spendEl.innerHTML = '&#36;0';
			document.querySelector('.form__btn').setAttribute("disabled", "disabled");
			document.querySelectorAll('.form__input').forEach(input => input.setAttribute("disabled", "disabled"));
		}
		if ((this.tmp / 4) > this.budget) {
			left.classList.remove('left--50');
			left.classList.add('left--25');
		}
		else if ((this.tmp / 2) > this.budget) {
			left.classList.remove('left--25');
			left.classList.add('left--50');
		}

	}

}

export { Logic as default };