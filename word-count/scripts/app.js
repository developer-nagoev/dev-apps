/**================================================
 * @name WordCount
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
// Variables
const words = document.querySelector('#word-count');
const characters = document.querySelector('#character-count');
// Function
const inputHandler = event => {
	// Make sure input is our textarea
	if (!event.target.matches('[data-character-count]')) return;
	// Get the word count
	const wordCount = event.target.value.split(/[\n\r\s]+/g).filter(word => word.length > 0);
	// Update the DOM
	words.textContent = wordCount.length;
	// Add text content
	characters.textContent = event.target.value.length;
};
// Event
document.addEventListener('input', inputHandler);