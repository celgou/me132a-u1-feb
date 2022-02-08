"use strict";

/*

By now, you whould have a JS-program that fills a grid of X columns and Y rows
with random numbers (a div for each) between 0 and 99.
The values of R and C come from the input fields.

Now we will add code so that we can select and deselect numbers
from the grid by clicking on them.

*/


/*

STEP 1
The first thing we need is a CSS-class called selected.
Add CSS-rules for .selected to the CSS-file. A change of 
background-color and color is enough but feel free!

*/


/*

STEP 2
Now you need to understand how elementRef.classList.toggle() works.
Check it out here:
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
or here:
https://www.w3schools.com/howto/howto_js_toggle_class.asp

*/



/*

STEP 3
As mentioned above, the number will be selected / deselected when the user clicks on it.
Clearly, we need to add an eventListener to each of the numbers in the grid (or,
more correctly, to each of the divs in the grid). We've called them numberDivs.

The best way to do that is to add the eventListener when the numberDiv is created.
The numberDivs are created in the function createNumberDiv(), so that is where each numberDiv
must get its eventListener.

The only thing the eventListener needs to do (so far) is to toggle the class "selected" from
the classList.

*/
"use strict";

function gridMaker (gridContainer, R, C) {
gridContainer.style.display = `grid`;
gridContainer.style.height = `50vh`;
gridContainer.style.width = `50vh`;
gridContainer.style.gridTemplateRows = R + "fr";
gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

}

gridMaker( document.querySelector("#grid"), 4, 3 );

function gridMaker (gridContainer, R, C) {
gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;

}


document.querySelector("button").addEventListener("click", function () {

let elementReferens = document.querySelector("#grid");
let nRows = document.querySelector("#inputRows").value;
let nCols = document.querySelector("#inputCols").value;

gridMaker( elementReferens, nRows, nCols );

});

gridMaker(
    document.querySelector("#grid"),
    R,
    C,
  );
  
  
  function createNumberDiv () { 
  
  let numberDiv = document.createElement("div");
  numberDiv.innerHTML = randomNumber(100);

  return numberDiv;

}
  
  function gridMaker (gridContainer, R, C) {

    gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  
            gridContainer.innerHTML= "";
  
            let nTotal = R * C;
            for (let i = 0; i < nTotal; i++) {
              gridContainer.appendChild( createNumberDiv() );
            }
          
          }
          function randomNumber (max) {
            return Math.floor(max * Math.random());
          }

         
function createNumberDiv () {

    // Create each numberDiv
    let numberDiv = document.createElement("div");
    numberDiv.innerHTML = randomNumber(100);
  
    // The eventListener so that it reacts on click
    numberDiv.addEventListener("click", function() {
  
      // Toggle the selected class
      numberDiv.classList.toggle("selected");
  
      // Update the results
      updateResults("selected");
  
    });
  
    return numberDiv;
  
  }


  gridMaker ();

console.log ()
/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/