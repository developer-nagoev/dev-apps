const form = document.forms[0];
const relaodPage = document.querySelector('.page__reload');

const printedPlace = document.querySelector('.generate');
const namesList = document.querySelector('.generate-list');
const message = document.querySelector('.message');

const displayData = data => {
	namesList.innerHTML = '';
	printedPlace.style.display = 'block';
	data.forEach(item => {
		const li = document.createElement('li');
		li.classList.add('generate-list__item');
		li.textContent = item.name;
		namesList.appendChild(li);
	});
}

const printedMessage = text => {
	message.classList.add('message--open');
	message.textContent = text;
	setTimeout(() => message.classList.remove('message--open'), 2000);
}
const getData = async (country, gender, number) => {
	try {
		const url = 'https://uinames.com/api/';
		const request = await fetch(`${url}?amount=${number}&gender=${gender}&region=${country}`);
		const jsonData = await request.json();
		return jsonData;
	} catch (error) {
		console.error(error);
	}
}

form.addEventListener('submit', e => {
	e.preventDefault();
	const values = {
		country: form.querySelector('.country').value,
		gender: form.querySelector('.gender').value,
		number: form.number.value
	}
	if (values.country === '' || values.gender === '' || values.number === '') {
		printedMessage('Fill in all the fields');
	} else {
		getData(values.country, values.gender, values.number)
			.then(result => displayData(result))
			.catch(err => console.log(err));
	}


});

relaodPage.addEventListener('click', () => {
	window.location.reload();
})
