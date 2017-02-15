"use strict";

const expect = require("chai").expect;
const userModel = require("../models/users");

let user;
let skill;

describe("User Model - New User", () => {
	before(() => {
		user = userModel.newUser("username", "password", "email", "firstName", "lastName");
	});

	it("user should be a valid object", (done) => {
		expect(user).to.not.be.an("undefined");
		expect(user).to.be.an("object");
		return done();
	});

	it("user should have required properties", (done) => {
		expect(user).to.have.property("error");
		expect(user).to.have.property("id");
		expect(user).to.have.property("username");
		expect(user).to.have.property("password");
		expect(user).to.have.property("email");
		expect(user).to.have.property("firstName");
		expect(user).to.have.property("lastName");
		expect(user).to.have.property("skills");
		return done();
	});

	it("user should have the correct starting values", (done) => {
		expect(user.error).to.be.a("boolean");
		expect(user.error).to.equal(false);
		expect(user.id).to.be.a("string");
		expect(user.id).to.equal("username");
		expect(user.username).to.be.a("string");
		expect(user.username).to.equal("username");
		expect(user.password).to.be.a("string");
		expect(user.password).to.equal("password");
		expect(user.email).to.be.a("string");
		expect(user.email).to.equal("email");
		expect(user.firstName).to.be.a("string");
		expect(user.firstName).to.equal("firstName");
		expect(user.lastName).to.be.a("string");
		expect(user.lastName).to.equal("lastName");
		expect(user.skills).to.be.an("array");
		expect(user.skills.length).to.equal(0);

		return done();
	});
});

describe("User Model - Add Skill", () => {
	before(() => {
		skill = null;
		user = userModel.addSkill(user, skill);
	});

	it("returned user should be a valid object", (done) => {
		expect(user).to.not.be.an("undefined");
		expect(user).to.be.an("object");
		return done();
	});

	it("returned user should contain the modified skills array", (done) => {
		expect(user.skills.length).to.equal(1);
		expect(user.skills[0]).to.equal(null);
		return done();
	});
});

describe("User Model - Delete Skill", () => {
	before(() => {
		user = userModel.deleteSkill(user, skill);
	});

	it("returned user should be a valid object", (done) => {
		expect(user).to.not.be.an("undefined");
		expect(user).to.be.an("object");
		return done();
	});

	it("returned user should contain the modified recipes array", (done) => {
		expect(user.skills.length).to.equal(0);
		return done();
	});
});
