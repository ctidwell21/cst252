// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 15 April, 2020
//  * License: Public Domain
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// the event for the color crimson
$("button.crimson").click(function() {
    // remove the class
    $("#result").removeClass("teal");
    // crimson class toggled
    $("#result").toggleClass("crimson");
});

// event for color green button
$("button.green").click(function() {
    // remove the crimson class
    $("#result").removeClass("crimson");
    // toggle class green
    $("#result").toggleClass("green");
});

// teal button event
$("button.teal").click(function() {
    // green class removes
    $("#result").removeClass("green");
    // teal class is toggled
    $("#result").toggleClass("teal");
});