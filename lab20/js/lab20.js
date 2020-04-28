// /**
//  * Author: Christian Tidwell <ctidwell@csumb.edu>
//  * Created:  April, 27 2020
//  * License: Public Domain
//  * (c) Copyright by Christian Tidwell from CST 252: Scripting for Multimedia 
//  **/

// variable is created to call the function for the value
var comicOBJ;
    $("button").click(function() {

        // comicOBJ stored from the site given to output in the browser
        $.getJSON("https://xkcd.com/info.0.json",
    function(results) {
        comicOBJ = results;
        $('div').html(comicOBJ.title);
        console.log(results);

        // image is created
        var imgOBJ = $('<img id="pic">');
        imgOBJ.attr('src', 'images/comicOBJ.png');

        imgOBJ.attr('alt', 'comicOBJ.alt');
        $('div').after(imgOBJ);

        // appends the title and paragraph of the page 
        $.each(results, function(i, comicOBJ) {
            $("div").append(comicOBJ, " ");
            });
        });
    });