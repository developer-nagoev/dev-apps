
/**
 * @IMPORTS
 */
import Cart from './cart.js';

/**
 * @VARIABLES
 */
const coursesList = document.querySelector('.courses-list');
const coursesListItemBtn = coursesList.querySelectorAll('.cart-btn');
const cartList = document.querySelector('.table-body');
const cartListClear = document.querySelector('.cart__clear');
const cart = new Cart();
let store = JSON.parse(localStorage.getItem('courses')) || [];

// check condition to empty local storage
cart.storeCheck(store, cartList);

// courses list click event
coursesList.addEventListener('click', e => {
	e.preventDefault();
	// check condition
	if (e.target.classList.contains('cart-btn')) {
		e.target.classList.add('isDisabled');
		// call function
		cart.getCard(e.target.parentElement.parentElement, store, cartList);
	};
});
// cart list click event
cartList.addEventListener('click', e =>
	e.target.classList.contains('delete') ? cart.deleteFromCart(coursesListItemBtn, e.target, store) : false);

// clear all data from cart and local storage
cartListClear.addEventListener('click', e => {
	e.preventDefault();
	cart.clearCart(cartList, coursesListItemBtn);
});