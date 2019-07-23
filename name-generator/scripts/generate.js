class Generate {
	constructor(printedPlace, namesList, message) {
		this.printedPlace = document.querySelector(printedPlace);
		this.namesList = document.querySelector(namesList);
		this.message = document.querySelector(message);
	}
	async displayData(data) {
		this.namesList.innerHTML = '';
		this.printedPlace.style.display = 'block';
		data.forEach(item => {
			const li = document.createElement('li');
			li.classList.add('generate-list__item');
			li.textContent = item.name;
			this.namesList.appendChild(li);
		});
	}
	async getData(country, gender, number) {
		try {
			const url = 'https://uinames.com/api/';
			const request = await fetch(`${url}?amount=${number}&gender=${gender}&region=${country}`);
			const jsonData = await request.json();
			return jsonData;
		} catch (error) {
			console.error(error);
		}
	}
	printedMessage(text) {
		this.message.classList.add('message--open');
		this.message.textContent = text;
		setTimeout(() => this.message.classList.remove('message--open'), 2000);
	}
}

export { Generate as default };