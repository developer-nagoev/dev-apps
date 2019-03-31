/**================================================
 * @name CatPictureGenerator
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
const btnXml = document.querySelector(".btn-xml");
const btnFetch = document.querySelector(".btn-fetch");
const btnAxios = document.querySelector(".btn-axios");
const btnJquery = $(".btn-jquery");
const loader = document.querySelector(".loader");
const loaderJQ = $(".loader");
const resultPlace = document.querySelector(".result-place");
const resultPlaceJQ = $(".result-place");
const errorPlace = document.querySelector(".error-place");
const api = "https://api.thecatapi.com/v1/images/search?size=full";

//  XMLHTTPREQUEST METHOD
function xmlMethod() {
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		if (xhr.readyState === 4 && xhr.status === 200)
			loader.style.display = "block";
		setTimeout(() => {
			loader.style.display = "none";
			resultPlace.src = JSON.parse(xhr.responseText)[0].url;
		}, 3000);
	};
	xhr.onerror = () => errorPlace.innerHTML = '<h3 class="wrong">Somthing Wrong!</h3>';
	xhr.open("GET", api);
	xhr.send();
}

// FETCH METHOD
function fetchMethod() {
	fetch(api)
		.then(handleErrors)
		.then(responseData => responseData.json())
		.then(response => {
			loader.style.display = "block";
			setTimeout(function () {
				loader.style.display = "none";
				resultPlace.src = response[0].url;
			}, 3000);
		})
		.catch(error => console.log(error));
}

function handleErrors(request) {
	if (!request.ok) throw Error(request.data);
	return request;
}

// JQUERY METHOD
function jqueryMethod() {
	$.get(api)
		.done(function (res) {
			loaderJQ.css("display", "block");
			setTimeout(function () {
				loaderJQ.css("display", "none");
				resultPlaceJQ.attr("src", res[0].url);
			}, 3000);
		})
		.fail(function (res) {
			return console.log("UPSS, FAIL!!!");
		});
}
// AXIOS METHOD
function axiosMethod() {
	axios(api).then(function (res) {
		loader.style.display = "block";
		setTimeout(function () {
			loader.style.display = "none";
			resultPlace.src = res.data[0].url;
		}, 3000);
	});
}

// EVENT LISTENERS
btnXml.addEventListener("click", xmlMethod);
btnFetch.addEventListener("click", fetchMethod);
btnJquery.click(jqueryMethod);
btnAxios.addEventListener("click", axiosMethod);
