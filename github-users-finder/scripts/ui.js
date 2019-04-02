/**================================================
 * @name Github Users Finder
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
================================================*/
class UI {
	constructor() {
		this.profile = document.querySelector('.app-output');
	}
	// Create a method that will display the data
	showProfile(user) {
		this.profile.innerHTML = `
		<div class="output-header">
			<img src="${user.avatar_url}" alt="${user.login}" class="output-image" alt="">
			<a href="${user.html_url}" class="output-view" target="_blank">View Profile</a>
		</div>

		<div class="output-body">
				<ul class="output-list">
					<li class="output-list__item output-list__item_repos">Public Repos:${user.public_repos}</li>
					<li class="output-list__item output-list__item_gist">Public Gists:${user.public_gists}</li>
					<li class="output-list__item output-list__item_followers">Followers: ${user.followers}</li>
					<li class="output-list__item output-list__item_following">Following: ${user.following}</li>
				</ul>
				<ul class="output-info">
					<li class="output-info__item">Company: ${user.company}</li>
					<li class="output-info__item">Website/Blog: ${user.blog}</li>
					<li class="output-info__item">Location: ${user.location}</li>
					<li class="output-info__item">Member Since: ${user.created_at}</li>
				</ul>
			</div>`;
	}
	// Create a method that will clear the output
	clearProfile() {
		document.querySelector('.content_bottom').style.display = 'none';
		this.profile.innerHTML = '';
	}
	// Create a method that will display an error message on the screen
	alertMessage(messageText, className) {
		this.clearAlert();
		const div = document.createElement('div');
		div.className = className;
		div.append(document.createTextNode(messageText));
		const container = document.querySelector('.content_top');
		const containerChild = document.querySelector('.app-head');
		container.insertBefore(div, containerChild);
		setTimeout(() => this.clearAlert(), 2000);
	}
	// Create a method that will clear the search field
	clearAlert() {
		const currentAlert = document.querySelector('.error');
		if (currentAlert) currentAlert.remove();
	}
	// Create a method that will display a list of the last 5 created repositories
	showRepos(userRepos) {
		var output = '';
		const outputRepos = document.querySelector('.output-repos');
		userRepos.forEach(repo => {
			output += `
			<div class="output-row">
				<div class="output-col">
					<a href="${repo.html_url}" class="output-col__link" target="_blank">${repo.name}</a>
				</div>
				<div class="output-col">
					<ul class="output-col-list col-list">
						<li class="col-list__item">Stars: ${repo.stargazers_count}</li>
						<li class="col-list__item">Watchers: ${repo.watchers_count}</li>
						<li class="col-list__item">Forks: ${repo.forks_count}</li>
					</ul>
				</div>
			</div>`;
			outputRepos.innerHTML = output;
		})
	}
}