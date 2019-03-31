/**================================================
 * @name Random User
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
 ================================================*/
var btn = document.querySelector('.generate');
var url = 'https://randomuser.me/api';
// ==========================================
btn.addEventListener('click', () => {
	fetch(url)
		.then(handleErrors)
		.then(responseData => responseData.json())
		.then(response => editData(response.results[0]))
		.catch(error => console.log(error));
})
// ========================= 

function handleErrors(request) {
	if (!request.ok) throw Error(request.data);
	return request;
}

function editData(data) {
	var avatar = document.querySelector('.avatar');
	var firstName = document.querySelector('.user-name .first');
	var lastName = document.querySelector('.user-name .last');
	var nickName = document.querySelector('.user-nickname');
	var userMail = document.querySelector('.user-email');
	var userCity = document.querySelector('.user-city');
	// =================================================
	avatar.src = data.picture.large;
	firstName.textContent = data.name.first;
	lastName.textContent = data.name.last;
	nickName.textContent = data.login.username;
	userMail.textContent = data.email;
	userCity.textContent = data.location.city;
}