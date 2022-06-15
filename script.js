/* Project 7: Build a tip calculator.

Math Hint:
tip amount = Bill amount x (tip percentage / 100)

-Create a Github repository for this project.
-You should have a form where a user is able to input the cost of the meal.
-The form should also let the user choose the percentage tip they want to give.
-When they submit the form, show them the total with tip added.
-Display the total tip amount as well so they know how much they're tipping.
-Send me the project for review and get started on the next project. */

let btn = document.getElementById('btn'); // variable to complete calculations



// to prevent default action of form submission
form.addEventListener('submit', (e) => {
	e.preventDefault();
})

// function to prevent default actions of submit from occuring
btn.addEventListener('click', function() {
	let bill = document.getElementById('meal').value;  // amount of the meal
	let percentage = document.getElementById('percent').value;  // pecentage tipped
	
	let tip = document.getElementById('tip').value  = bill  * (percentage/100); // variable to store the calculated tip amount
	document.getElementById('total').value = parseFloat(tip) + parseFloat(bill)  /*grabbing the number and adding them instead of
	putting them next to each other*/

	
})




