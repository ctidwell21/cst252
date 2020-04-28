// first.js
// Our first JavaScript program
// Author: Christian Tidwell <ctidwell@csumb.edu>
// Date: 27 Jan 2020
// License: MIT

// generate some text
var sheepText = "";
for (i=0; i<100; i++) {
	sheepText += "Sheep Number " + i + "<br>";	
}
console.log()

// generate new element 
newEl = document.createElement ("P");

// add text to element
newEl.innerHTML = sheepText;

// find output div
oldEl = document.getElementById("output");

// put new elemeent in output div
oldEl.appendChild(newEl);
