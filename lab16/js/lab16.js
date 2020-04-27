// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 13 April, 2020
//  * 
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// jQuery button function which triggers the colors of the web page
$(document).ready(function() {
	$("button").click(function() {
		// an alert box to warn the user that elements will change.
		alert("Everything's gonna change!");
    	$("p").css("color", "teal");
    	$("p1").css("color", "teal");
    	$("p2").css("color", "teal");
    	$("p3").css("color", "teal");
    		$("h1").css("color", "teal");
    			$("h2").css("color", "teal");
    				$("div").css("background-color", "white");
    					$("body").css("background-color", "teal");
    						$("button").css("background-color", "green");
    							$("a").css("color", "teal");

// jQuery documentation which has the argument attached to the text method to change the sentences on trigger
    $("p1").text("The challenges were to figure how to assign the text with jQuery coding rather than javascript. One was that with the help of W3schools (https://www.w3schools.com/jquery/html_text.asp), I had to attach the paragraph texts with the text method to change the sentences.");
    $("p2").text("The only problems were getting the right jQuery codes organized in the right place to function for the web page.")
	$("p3").text("Everything you see is the result. The colors of the site have reversed in their tags implemented. For example, the green color from the background is now the background color on the button."); 
  });
});