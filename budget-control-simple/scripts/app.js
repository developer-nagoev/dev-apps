// imports
import UI from './ui.js';
import Logical from './logical.js';
// variables
const moneyForm = document.querySelector('.money-form');
const budgetForm = document.querySelector('.form');
const contentParent = document.querySelector('.row');
// class instance
const ui = new UI();
const logical = new Logical();

// Add start budget event
moneyForm.addEventListener('submit', e => {
	// prevent default event
	e.preventDefault();
	// variables
	const budget = moneyForm.money__count.value;
	// methods
	ui.init(budget);
	logical.init(budget, budget);
	// show content
	contentParent.style.display = 'flex';
	// reset inputs values
	moneyForm.reset();
	// hide form
	moneyForm.style.display = 'none';
});
// Update budget event
budgetForm.addEventListener('submit', e => {
	// prevent default event
	e.preventDefault();
	// variables
	const name = budgetForm.spend.value;
	const spend = budgetForm.spend__much.value;
	// methods
	ui.updateBudget(name, spend, '.spend-list');
	logical.updateBudgetCount(spend, '.left__count', '.left');
	// form reset
	budgetForm.reset();

})