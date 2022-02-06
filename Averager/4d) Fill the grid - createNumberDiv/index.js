"use strict";

function createNumberDiv (){
    let numberDiv = document.createElement ("div");
    numberDiv.innerHTMl = randomNumber(100);

    return numberDiv;
}

function randomNumber (max) {
    return Math.floor (max * Math.random());
}
/*

Code a function createNumberDiv that creates a div, assigns a random number (0-99)
as the HTML-content of that div (innerHTML) and returns the reference to the
newly created div.

Note that the newly created div must not be appended inside the function createNumberDiv.
The must happen outside the function.


TEST:
document.querySelector("body").appendChild( createNumberDiv() )
This must append a div with a random number to the body each time it is called.
*/
document.querySelector("body").appendChild( createNumberDiv() )