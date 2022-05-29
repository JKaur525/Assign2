/*********************************************************************************
 *  WEB700 – Assignment 2
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Jasleen Kaur Student ID: 131688210 Date: 28/05/2022
 *
 ********************************************************************************/

const collegeData = require("./modules/collegeData");

collegeData
	.initialize()
	.then(() => {
		collegeData
			.getAllStudents()
			.then((res) => {
				console.log(`Successfully retrieved ${res.length} students`);
			})
			.catch((err) => console.log(err));

		collegeData
			.getCourses()
			.then((res) => {
				console.log(`Successfully retrieved ${res.length} courses`);
			})
			.catch((err) => console.log(err));

		collegeData
			.getTAs()
			.then((res) => {
				console.log(`Successfully retrieved ${res.length} TAs`);
			})
			.catch((err) => console.log(err));
	})
	.catch((err) => console.log(err));
