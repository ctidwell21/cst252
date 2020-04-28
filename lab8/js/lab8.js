/**
 * Author: Christian Tidwell <ctidwell@csumb.edu>
 * Created: 24 February, 2020
 * 
 * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
 **/

// the function which uses the timeout function to order the function
function firstThing(test) {
	debugger;
	console.log(test + ": The first thing. <br>.");
}

function secondThing(test) {
	console.log(test + ": The second thing. <br>.");
}

function thirdThing (test) {
	console.log(test + ": The third thing. <br>");
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// second test with no order
setTimeout(function() {
	firstThing("TEST 2");
}, 0);

setTimeout(function() {
	secondThing("TEST 2");
}, 0);

setTimeout(function() {
	thirdThing("TEST 2");
}, 0);

// the third test which orders from 3, 1, and 2
setTimeout(function() {
	firstThing("TEST 3");
}, 2000);

setTimeout(function() {
	secondThing("TEST 3");
}, 3000);

setTimeout(function() {
	thirdThing("TEST 3");
}, 1000);
