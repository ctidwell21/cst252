/**
 * Author: Christian Tidwell <ctidwell@csumb.edu>
 * Created: 17 February, 2020
 * 
 * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
 **/

 // Variables
 myTransport = ["Honda", "legs", "bus", "bike"];

 myMainRide = {
 	make : "Honda",
 	model : "CRX",
 	color : "Red",
 	year : 1985,
 	age : function() {
 		return 2019 - age;
 	}
 }

 // output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
 	JSON.stringify(myMainRide, null, '\t'), "</pre>");