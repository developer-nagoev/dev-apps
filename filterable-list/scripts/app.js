/**================================================
 * @name Filterable List
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
//Variables declaration
const input = document.querySelector('.filter-input');
//Functions
function filterList() {
	//Variables declaration
	const inputValue = input.value.toUpperCase();
	const namesList = document.querySelector('.filter-list');
	const namesListItems = namesList.querySelectorAll('.filter-item');
	// Loop array
	for (let name of namesListItems) {
		let link = name.getElementsByTagName('span')[0];
		if (link.innerHTML.toUpperCase().indexOf(inputValue) > -1) name.style.display = '';
		else name.style.display = 'none';
	}
}

//Events
input.addEventListener('keyup', filterList);