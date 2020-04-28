/**
 * Author: Christian Tidwell <ctidwell@csumb.edu>
 * Created: 26 February, 2020
 * 
 * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
 **/

// this is sortUserName function which pops up a user input 
// and tracks the letters of a name 

// outputEl 
var outputEl = document.getElementById("output");

// the first new element with a font size css and a short phrase for the paragraph.
var new1El = document.createElement("p");
	new1El.innerHTML = "I was here!";
	new1El.style.fontSize = "200%";

// the second new element with a "times new roman" font family and a short reminder in the paragraph.
var new2El = document.createElement("p");
	new2El.innerHTML = "But I left a note for you saying, 'What's up Doc?!'";
	new2El.style.fontFamily = "times new roman";

// the appendChild that outputs both elements into the results in the browser
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);