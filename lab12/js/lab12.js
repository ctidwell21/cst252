// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 9 March, 2020
//  * 
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// Function input value used for the conditionals to loop the values in for the web browser
function FizzBuzzBoom(outputStr) {
var outputStr = '';
debugger;
for (var i=1; i <= 200; i++) {
  outputStr += i + ". ";
  if (i % 3 == 0) {
    // if divisible by 3
  outputStr += ("Fizz!");
  } 
  if (i % 5 == 0) {
    // if divisible by 5
  outputStr += ("Buzz!");
  } 
  if (i % 7 == 0) {  
    // if divisible by 7
  outputStr += ("Boom!");
  } 
  if (outputStr != "") {
    console.log(outputStr + "!");
  } else {
    console.log(i);
  }
  outputStr += "<br>";
}
  return outputStr;
}

// All functions sends the output information to the div in the web browser
  var outputEl = document.getElementById("button");
  button.addEventListener("click", function() {
  var outputStr = document.getElementById("input").value;
  var outputEl = document.getElementById("output");
  var newEl = document.createElement("p");
  var outputStr = FizzBuzzBoom(outputStr);
  // console.log(outputStr);
  // newText = "<p>" + outputStr + "</p>";
  newEl.innerHTML = FizzBuzzBoom(); 

  // Appends paragraph into the div area
  outputEl.appendChild(newEl);
})


