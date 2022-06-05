/*********************************************************************************
 *  WEB700 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Jasleen Kaur Student ID:131688210 Date: 22/05/2022
 *
 ********************************************************************************/

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
	"Welcome to WEB700 Assignment 1",
	"This assingnemnt was prepared by Jasleen Kaur",
	"Jasleen Kaur:jkaur525@myseneca.ca",
	"User Logged In",
	"Main Panel",
	"Logout Complete",
];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function httpRequest(httpVerb, path) {
	let pathIndex;
	for (var i = 0; i < serverPaths.length; i++) {
		if (path === serverPaths[i]) {
			pathIndex = i;
			break;
		}
	}

	if (serverVerbs[pathIndex] === httpVerb) {
		return `200: ${serverResponses[pathIndex]}`;
	} else {
		return `404: Unable to process ${httpVerb} request for ${path}`;
	}
}

function automateTests() {
	var testVerbs = ["GET", "POST"];
	var testPaths = [
		"/",
		"/about",
		"/contact",
		"/login",
		"/panel",
		"/logout",
		"/randomPath1",
		"/randomPath2",
	];

	function randomRequest() {
		var randVerb = getRandomInt(testVerbs.length);
		var randPath = getRandomInt(testPaths.length);
		console.log(httpRequest(testVerbs[randVerb], testPaths[randPath]));
	}

	setInterval(randomRequest, 1000);
}

automateTests();
