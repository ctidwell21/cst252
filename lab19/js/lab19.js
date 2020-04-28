// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created: 22 April, 2020
//  * License: Public Domain
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// the click function of the button
$("button").click(function(results){
	// AJAX function to get data
  // ajax() jQuery method
  $.ajax({
      // The URL
      url: "https://www.api.worldpop.org/v1/tasks/308d3762-21ca-5280-8a08-d1bbc67aa27d",
      // The data to send
      data: { },
      // The GET request typed
      type: "GET",
      // The type of data we expect back
      dataType : "json",
  })
  // If the request succeeds
  .done(function( results ) {
  	// Insert data into output div
    console.log(results);
    /* var fact = results.facts */[0];
    var data = results.data;
    $("activate").html("Number of results: " + data);
  })
  // The function if AJAX fails
  .fail(function( xhr, status, errorThrown ) { 
      alert(errorThrown + " Status:" + status );
  });
})