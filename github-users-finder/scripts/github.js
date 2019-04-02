/**================================================
 * @name Github Users Finder
 * @author Alim Nagoev
 * @license https://github.com/developer-nagoev
================================================*/
class Github {
	//Create a new object constructor that contains the user ID and its secret key (taken from a personal account on Github)
	constructor() {
		this.client_id = 'f3c64bae28692a3ba3dc';
		this.client_key = '1c10965103dfba39c16b72961e5aabc6957f19d1';
		this.repoCount = 5;
		this.repoSort = 'created: asc';
	}
	// Create a method to get data from the GitHub API
	async getUser(user) {
		const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_key}`;
		const profileReposUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.client_id}&client_secret${this.client_key}`;
		// Get data from the GitHub API
		const profileResponseData = await fetch(profileUrl);
		const profileResponseRepoData = await fetch(profileReposUrl);
		// Convert data
		const profileData = await profileResponseData.json();
		const profileRepos = await profileResponseRepoData.json();
		// return data
		return {
			profileData,
			profileRepos
		};
	}
}

