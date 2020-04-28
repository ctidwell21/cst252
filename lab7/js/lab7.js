/**
 * Author: Christian Tidwell <ctidwell@csumb.edu>
 * Created: 19 February, 2020
 * 
 * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
 **/

// this is sortUserName function which pops up a user input 
// and tracks the letters of a name 
 function sortUserName(myUsername) {
 	var userName = window.prompt("Enter your username:");
 	console.log("Christian N. Tidwell =", userName);
 	// string is split with an array
 	var nameArray = userName.split('');
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
// this is the output to the whole function title 
// "Fixed Username"
 document.writeln("Fixed Username: ",
 	sortUserName(), "</br>");