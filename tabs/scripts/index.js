/**================================================
 * @name TabsVanilla
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables declaration
const controls = document.querySelectorAll('.tabs-control__item');
const contents = document.querySelectorAll('.tabs-content__item');

// Loop arrays
for (let i = 0; i < controls.length; i++) {
	// Events
	controls[i].addEventListener('click', function () {
		contents.forEach(contentsItem => contentsItem.classList.remove('selected'));
		controls.forEach(controlsItem => controlsItem.classList.remove('selected'));
		contents[i].classList.add('selected');
		controls[i].classList.add('selected');
	});
}