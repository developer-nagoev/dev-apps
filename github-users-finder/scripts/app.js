/**================================================
 * @name Github Users Finder
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
================================================*/
// Create a new instance of the class GitHub
const github = new Github();
// Create a new instance of the class UI
const ui = new UI();
// Variable declaration
const field = document.querySelector('.app-input');
// Data entry event in the field
field.addEventListener('keyup', e => {
	// Variable to store input data
	const fieldValue = e.target.value;
	// Variable to store received data after request
	const container = document.querySelector('.content_bottom');
	// Check condition
	if (fieldValue !== '') {
		// Create http request with use GitHub class method
		github.getUser(fieldValue)
			.then(data => {
				// Check condition
				if (data.profileData.message === 'Not Found') {
					// Show message
					ui.alertMessage('User is not found', 'error');
					// Hide container
					container.style.display = 'none';
				} else {
					// Show profile data
					ui.showProfile(data.profileData);
					// Show container
					container.style.display = 'block';
					// Show profile repos
					ui.showRepos(data.profileRepos);
				}
			});
	} else {
		// Clear profile
		ui.clearProfile();
		// Hide container
		container.style.display = 'none';
	}
})