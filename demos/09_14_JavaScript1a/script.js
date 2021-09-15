/* Javascript 1a: What is?  Where To */

/* Basic Syntax Elements: Variables, Declaring Variables, Operators, Types */

/* variables.  Variables in JavaScript are used to store data values.  They can have
either fixed or variable value */
console.log(x);
// declaring a variable
var x = 7.6555;

// declaring a variable with let vs var vs const
let y = 5;

// Operators: Arithmetic
// You can manipulate these values with operators like = for assignment, or +, -, *, and / for basic math.
console.log(x + y);
console.log(x / y);
console.log(x * y);
console.log(x % y);

//Comparison operators: for comparing values == , != , === , > , <

var myNum = 3;
var myStr = "3";
console.log("equal? " + (3 == myNum)); //returns true if operands are equal
console.log("equal? " + (3 == myStr)); // will also return true if values match but not type
// for strict equality use ===
console.log("equal? " + (3 === myStr)); //returns false
//we also have not equal !=
console.log("not equal? " + (4 != myNum)); //retruns true
//and strict not equal !==
console.log("not equal? " + (3 !== myStr)); //returns true

//and the usual greater or lesser than, which can be combined with = to be inclusive of the comparator
console.log("greater than? " + (4 > myNum)); //returns true

// Types: aside from numbers, variables can also hold boolean values, strings, arrays, etc.

// Strings String Methods
let myString = "I'm a string! I'm great!";
let anotherString = "This is another string";
console.log(myString.length); // logs a value of the length of the string
console.log(myString.slice(0, 4)); //logs a section of the string
console.log(myString.replace("I'm", "You're")); //replaces the first instance in the string of the first parameter with the second
//concatenates a string or many strings
let newString = myString.concat(
  " ",
  anotherString,
  " ...and these are my strings."
);

console.log(newString);

// Booleans: true/false values
let p = false;
console.log(p);

// you can test true and false with "!" which, as in the comparison operators above, means "not".
if (!p) {
  console.log("I'm false");
} else {
  console.log("I'm true");
}

// Arrays

let names = ["John", "Annie", "Beatrice"];
let moreNames = ["Eddie", "Joe", "Theresa"];

console.log(names[0]);
// Array.push() adds a value to an array
names.push("Patricia");
console.log(names);

//Objects - a way to store a lot of data as properties with values

const person = {
  name: "Patsy",
  age: 5.3,
  occupation: "child",
};

console.log("Patsy is a " + person.occupation);

//The "document" or .html web page can also be acessed as an object through the DOM (Document Object Model), a Programming API for HTML (and XML) documents
let example = document.getElementById("example");
console.log(example.style);
myElements = document.getElementsByClassName("container");
console.log(myElements[0]);
