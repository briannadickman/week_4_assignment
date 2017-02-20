/**
Array Review
**/

function createArray() {
  // create an array with 6 elements (numbers and strings only)
  // Write code below
  var myArray = [42, "laser guns", 13, "banana", "elephant", 7];
  // return this array
  return myArray;
}

function loopArray(array) {
  // used below
  var conString = ['animal', 'crackers', '13', 'soup'];
  // Write code here: Concatentate all of the values in array together using a loop
  for(var i = 0; i < conString.length; i++){

    return conString(i) + ;
  }

  // return concatentated values
  return conString;
}


function arrayReverser(arrayParam) {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!
  var reversedArray = [];
  // Write the code here


  // return our reversed array
  return reversedArray;
}

// call and console log the return for loopArray and arrayReverser

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
