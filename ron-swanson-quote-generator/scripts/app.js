/**================================================
 * @name RonSwansonQuoteGenerator
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const btnXhr = document.querySelector('.xhr');
const btnFetch = document.querySelector('.fetch');
const btnAxios = document.querySelector('.axios');
const quote = document.querySelector('.quote-area');

/**===================
 *  XHR METHOD
 ===================*/
btnXhr.addEventListener('click', () => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.status == 200 && xhr.readyState == 4) {
			const text = JSON.parse(xhr.responseText)[0];
			quote.textContent = text;
		}
	}
	xhr.open('GET', url);
	xhr.send();
})
/**===================
 *  FETCH METHOD
 ===================*/
btnFetch.addEventListener('click', () => {
	fetch(url)
		.then(res => res.json())
		.then(resData => quote.textContent = resData[0])
})
/**===================
 *  AXIOS METHOD
 ===================*/
btnAxios.addEventListener('click', () => {
	axios(url)
		.then(res => quote.textContent = res.data[0])
})
/**===================
 *  JQUERY METHOD
 ===================*/
$('.jquery').click(() => {
	var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
	$.get(url)
		.done(res => $('.quote-area').text(res[0]))
		.fail(res => console.log("UPSS, FAIL!!!"))
})