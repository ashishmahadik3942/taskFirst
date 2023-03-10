
const output = document.getElementById("rangeValue");
const rangeSlider = document.getElementById("rangeSlider");

rangeSlider.addEventListener('input', () => {
	output.textContent = rangeSlider.value;
})




function getValues(e) {
	event.preventDefault(); //Stop making form to reload a page in JavaScript

	//Getting The Values by ID or names
	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const currentAddress = document.getElementById("currentAddress").value;
	const permanentAddress = document.getElementById("permanentAddress").value;
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;
	const zipCode = document.getElementById("zipCode").value;
	const favColor = document.getElementById("favColor").value;
	const data = document.getElementsByName("gender");
	const userDateInput = document.getElementById("birthday").value;
	const time = document.getElementById("time").value;
	const mobile = document.getElementById("phone").value;
	let hobbies = document.getElementsByName("hobbies");
	let j = 1;
	const week = document.getElementById("week").value;
	const bdaymonth = document.getElementById("bdaymonth").value;
	const fileName = document.getElementById("fileName").value;
	const linkedinLink = document.getElementById("linkedinLink").value;
	const githubLink = document.getElementById("githubLink").value;
	const projectDesc = document.getElementById("projectDesc").value;




	//Printing The Information in the Console
	console.log("Hello Javascript");
	console.log("Form Input Values: ");
	console.log("First Name => " + firstName);
	console.log("Last Name => " + lastName);
	console.log("Current Address => " + currentAddress);
	console.log("Permanent Address => " + permanentAddress);
	console.log("City => " + city);
	console.log("State => " + state);
	console.log("Zip Code => " + zipCode);
	console.log("Fav Color => " + favColor);

	// Printing Gender
	for (let i = 0; i < data.length; i++) {
		if (data[i].checked) {
			console.log("Gender => " + data[i].value);
		}

	}


	//Birthdate & Age
	console.log("Birthdate => " + userDateInput);
	// convert user input value into date object
	var birthDate = new Date(userDateInput); 	//Example User Date Input : 2021-03-25

	// get difference from current date;
	var difference = Date.now() - birthDate.getTime();
	var ageDate = new Date(difference);
	var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
	console.log("Age => " + calculatedAge);
	document.getElementById("age").value = calculatedAge;


	console.log("Time => " + time);
	console.log("Mobile => " + mobile);

	//Printing Hobbies
	for (let i = 0; i < hobbies.length; i++) {
		if (hobbies[i].checked) {

			console.log("Hobbies", j++, " => " + hobbies[i].value);
		}
	}

	console.log("Week => " + week);
	console.log("Birthday Month => " + bdaymonth);
	console.log("Range =>" + rangeSlider.value); 	// Range 
	console.log("File Name => " + fileName);
	console.log("Project Description: => " + projectDesc);
	console.log("Linkedin Link => " + linkedinLink);
	console.log("Github Link => " + githubLink);

}




function calculateUserAge() {
	const userDateInput = document.getElementById("birthday").value;
	//Birthdate & Age
	// convert user input value into date object
	var birthDate = new Date(userDateInput);	 //Example User Date Input : 2021-03-25
	// console.log("BirthDate Object => " + birthDate);

	// get difference from current date;
	var difference = Date.now() - birthDate.getTime();
	var ageDate = new Date(difference);
	var calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
	// console.log("Age => " + calculatedAge);
	document.getElementById("age").value = calculatedAge;
}








// document.getElementById('form').addEventListener('submit', function (event) {
// 	event.preventDefault();

// 	const form = event.target;

// 	const firstName = form.validationTooltip01;
// 	const emailInput = form[1];

// 	alert(firstName.value);
// }, false);


// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
// 	e.preventDefault()
// 	const formData = new FormData(form)
// 	for (const pair of formData.entries()) {
// 		console.log(pair)
// 	}
// })