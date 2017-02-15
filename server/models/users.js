"use strict";

/**
* Users Model
* In charge of all things dealing with the user
*
*/

module.exports = {
	/**
	* newUser
	* Creates a new user and returns it
	*
	* @param {string} username - username for the new user
	* @param {string} password - password for the new user
	* @param {string} email - email address of the new user
	* @param {string} firstName - first name of the new user
	* @param {string} lastName - last name of the new user
	* @returns {object} user - the full user that was created
	*/
	newUser: (username, password, email, firstName, lastName) => {
		const user = {
			error: false,
			id: username,
			username: username,
			password: password,
			email: email,
			firstName: firstName,
			lastName: lastName,
			skills: []
		};
		return user;
	},
	/**
	* addSkill
	* Adds a skill id to the user model
	*
	* @param {object} user - the user object to modify
	* @param {object} skill - the skill object to modify user with
	* @returns {object} user - the modified user
	*/
	addSkill: (user, skill) => {
		user.skills.push(skill);
		return user;
	},
	/**
	* deleteRecipe
	* Removes a skill id to the user model
	*
	* @param {object} user - the user object to modify
	* @param {object} skill - the skill object to modify user with
	* @returns {object} user - the modified user
	*/
	deleteSkill: (user, skill) => {
		const index = user.skills.indexOf(skill);
		if (index > -1) {
			user.skills.splice(index, 1);
		}
		return user;
	}
};
