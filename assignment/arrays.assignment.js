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



var newArray = ['animal', 'crackers', '13', 'soup'];

function loopArray(array) {
  // used below
  var conString = [];
  // Write code here: Concatentate all of the values in array together using a loop
  for(var i = 0; i < newArray.length; i++){
      conString += newArray[i];
  }
  // return concatentated values
  return conString;
}



var arrayParam = [1, 2, 3, 4, 5];

function arrayReverser() {
  // Copy items from arrayParam to a new array called reversedArray, reversing the order of elements
  // Last element on arrayParam should become the first in reversedArray
  // Do not use Array.reverse()!
  var reversedArray = [];
  var j = 0;
  // Write the code here
  for (var i = arrayParam.length - 1; i >= 0 ; i--) {
      reversedArray[j] = arrayParam[i];
      j++;
  }
  // return our reversed array
  return reversedArray;
}

// call and console log the return for loopArray and arrayReverser

loopArray();
console.log(loopArray(newArray));
arrayReverser(arrayParam);
console.log(arrayReverser(arrayParam));

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  createArray: createArray,
  loopArray: loopArray,
  arrayReverser: arrayReverser
};
