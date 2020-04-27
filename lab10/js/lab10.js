/**
 * Author: Christian Tidwell <ctidwell@csumb.edu>
 * Created: 2 March, 2020
 * 
 * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
 **/

// this is sortUserName function which pops up a user input 
// and tracks the letters of a name 
 function sortUserName(myUsername) {
 	// string is split with an array
 	var nameArray = myUsername.split('');
 	console.log("nameArray.sort =", nameArray);
 	// sorts the name characters in the array
 	var nameArraySort = nameArray.sort();
 	console.log("nameArraySort =", nameArraySort);
 	// joins the array in the strings shown in single quotations
 	var nameSorted = nameArraySort.join('');
 	console.log("nameSorted =", nameSorted);

  	// this returns the inputted name sorted after it's 
 	// been entered 
 	return nameSorted;
 }

// button variable that inputs an array of the name 
// given from the DOM property values and variables 
	var button = document.getElementById("my-button");
	button.addEventListener('click', function() {
		var inputValue = document.getElementById('name-field').value;
		var output = document.getElementById('output');
		output.innerHTML = sortUserName(inputValue);
		console.log("The input:", inputValue);
	});



