// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 6 April, 2020
//  * 
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/


// The entire object prototype with the constructed material
// to output the specified vehicle
class Vehicle {
	constructor(make) { 
	this.make = make; }
	info() {
	return 'Make: ' + this.make;
	} 
}

class Description extends Vehicle {
  constructor(make, model) {
	super(make);
	this.model = model; }
	show() {
	return this.info() +  
	'. Model: ' + this.model; 
	}
}


// Button event function to activate the vehicle description when clicked
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	

myDescription = new Description("Subaru", "Impreza");
console.log(myDescription.show());
})