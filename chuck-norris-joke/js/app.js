/**================================================
 * @name Chuck Norris Joke
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
const button = document.querySelector('.app__button');
const text = document.querySelector('.app__text');
const url = 'https://api.chucknorris.io/jokes/random';

// Use Fetch
button.addEventListener('click', e => {
	e.preventDefault();
	fetch(url)
		.then(response => response.json())
		.then(data => {
			text.textContent = data.value;
			text.style.display = 'block';
		})
		.catch(error => console.log(error));
})

// Use XHR Method
// button.addEventListener('click', e => {
// 	e.preventDefault();
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', url);
// 	xhr.onload = () => {
// 		if (xhr.status === 200) {
// 			text.textContent = JSON.parse(xhr.responseText).value;
// 			text.style.display = 'block';
// 		}
// 	};
// 	xhr.send();
// })