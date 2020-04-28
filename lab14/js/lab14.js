// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 18 March, 2020
//  * 
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// The entire object prototype with the constructed material
// to output the specified vehicle
function Vehicle(make, model, year, color) { 
this.make = make; 
this.model = model; 
this.year = year; 
this.color = color; 
this.name = function() { 
	return(this.make + " " + this.model + " " + this.year + " " + this.color); } 
} 

// Button event function to activate the vehicle description when clicked
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	
// Instantiated objects used to give the 
// output of the constructor
var bike = new Vehicle("Subaru", "Impreza", "2017", "blue");

// The object in reference from the function with 
// instantiated variables inherited from the constructor
bike.name();
console.log(name);
document.getElementById("output").innerHTML += "<p>" + bike.name() + "</p>";
})
// document.getElementById("output").innerHTML 
// += "<p>" + bike.info() + "</p>"; 
