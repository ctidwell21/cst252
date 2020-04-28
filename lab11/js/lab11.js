// The sorting function where it modulates the mods.
// They are returned from the length of the inputted name
function sortingHat(name) {
	var len = name.length;
	var mod = len % 4;
	if (mod == 0) {
	return "Gryffindor";
	} 
	else if (mod == 1) {
	return ("Ravenclaw");	
	} 
	else if (mod == 2) {
	return "Slytherin";	
	} 
	else if (mod == 3) {
	return "Hufflepuff";	
	}
	return house;
}

// The DOM functions that get the text identification from the html menu.
// The values take the text element 
// from the event listner to output the name sorted in the mods.
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
	var name = document.getElementById("input").value;
	var house = sortingHat(name);
	console.log(name, house);
	newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
	document.getElementById("output").innerHTML = house;
})