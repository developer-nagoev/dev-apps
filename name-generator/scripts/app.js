import Generate from './generate.js';
// variables
const generate = new Generate('.generate', '.generate-list', '.message');
const form = document.forms[0];
const relaodPage = document.querySelector('.page__reload');

// events
// form submit
form.addEventListener('submit', e => {
	e.preventDefault();
	// create obj with data
	const values = {
		country: form.querySelector('.country').value,
		gender: form.querySelector('.gender').value,
		number: form.number.value
	}
	// check condition
	if (values.country === '' || values.gender === '' || values.number === '') {
		// display message
		generate.printedMessage('Fill in all the fields');
	} else {
		// get data
		generate.getData(values.country, values.gender, values.number)
			.then(result => generate.displayData(result))
			.catch(err => console.log(err));
	}
});

// reload page
relaodPage.addEventListener('click', () => window.location.reload())
