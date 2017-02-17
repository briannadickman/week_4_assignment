/**
Object Literals
**/
function threeBooks() {
  // Create 3 book objects with object literal syntax. Books should have properties for title, author, and pageCount
  // Write code here
  var book1 = {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pageCount: 163
  };

  var book2 = {
    title: "The Talisman",
    author: "Stephen King & Peter Straub",
    pageCount: 646
  };

  var book3 = {
    title: "The Eye of the World",
    author: "Robert Jordan",
    pageCount: 782
  };

  // Add a property of haveRead to each book object you created. This should be set to true or false
  // Write code here

  // Store these objects in an array called books
  // Write code here

  // return this array
  return books;
}

function fixLiteralSyntax() {
  // Fix the problems with our object literal
  /**
  avengersMovie = {
      name : Avengers;
      runtime : 143 mins;
      releaseYear = 2012;
      "Director" : "Joss Whedon".
  }
  **/

  // return corrected object
  return avengersMovie;
}


/**
Object Constructors
**/

// Write a constructor function to create Book objects with the same four properties as above.
// Write code here

function createBooksWithConstructor() {
  // Create 3 new books using this constructor function.
  // Write code here

  // Store them in an array called books
  // Write code here

  // return our array of books
  return books;
}

// -- DON'T TOUCH CODE BELOW --
module.exports = {
  threeBooks: threeBooks,
  fixLiteralSyntax: fixLiteralSyntax,
  Book: Book,
  createBooksWithConstructor: createBooksWithConstructor
};
