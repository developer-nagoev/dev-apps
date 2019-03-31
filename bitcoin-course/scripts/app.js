/**================================================
 * @name RefreshBitcoin
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
const btn = document.querySelector('.refresh');
const eur = document.querySelector('.euro');
const gbp = document.querySelector('.gbp');
const usd = document.querySelector('.usd');
const update = document.querySelector('.update');

/**========================
 * XHR MEHTOD
 ========================*/
btn.addEventListener('click', () => {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			eur.textContent = JSON.parse(xhr.responseText).bpi.EUR.rate_float;
			gbp.textContent = JSON.parse(xhr.responseText).bpi.GBP.rate_float;
			usd.textContent = JSON.parse(xhr.responseText).bpi.USD.rate_float;
			update.textContent = JSON.parse(xhr.responseText).time.updated;
		}
	}
	xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	xhr.send();
});

/**========================
 * FETCH MEHTOD
 ========================*/
// btn.addEventListener("click", function() {
//   var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//   fetch(url)
//     .then(function(responseData) {
//       return responseData.json();
//     })
//     .then(function(data) {
//       var price = data.bpi.EUR.rate_float;
//       result.textContent = price;
//     });
// });