// Array Methods
const myAnimals = ["possums", "bears", "skunks", "cougars"];
console.log(myAnimals.length);

// .push() to add a new value to the end of the array
let newAnimal = "raccoons";
myAnimals.push(newAnimal);
console.log(myAnimals);

//you can also use the length to push a val into the end of the array
myAnimals[myAnimals.length] = "squirrels";
//in the line above you're essentially adding squirrels at the next index
console.log(myAnimals);

// .pop() removes the last element of the array
myAnimals.pop();
console.log(myAnimals);
// and can be repeated
myAnimals.pop();
console.log(myAnimals);

//.slice will copy an array
myAnimalsAgain = myAnimals.slice();
console.log(myAnimalsAgain);

// while the above will change the original array, the next few will not
// .map() will perform a function on each val of the array

const candies = ["snickers", "reese's", "payday"];
const newCandies = candies.map(candyFunction);

function candyFunction(candy) {
	const newCandy = candy.charAt(0).toUpperCase() + candy.slice(1);
	return newCandy;
}
console.log(newCandies);

// .filter() will return an array of all elements that pass a test.  If no elements pass the test, it will return an empty array

const numbers = [12, 9, 33, 42, 78, 99, 62, 4, 26];
const evenNumbers = numbers.filter(isEven);
function isEven(num) {
	if (num % 2 == 0) {
		return num;
	}
}

console.log(evenNumbers);

// .sort() will sort the elements of the array in ascending value.  It does this alphabetically by first character, and works well for strings

const myFruits = ["apples", "bananas", "pears", "nectarines", "cantelopes"];
const sortedFruits = myFruits.sort();
console.log(sortedFruits);

//you can use .sort() to sort numerical values in ascending order, but you have to pass a comparison function
// function(a,b){return a-b} will compare the values in an array and if it returns a negative number, it will sort the first value before the second
const numbersToSort = [100, 15, 89, 90, 12, 5, 1, 18];
console.log(numbersToSort.sort()); //returns sorted by first val [1,100,12,15 ...]
const sortedNums = numbersToSort.sort((a, b) => {
	return a - b;
});
console.log(sortedNums);

//looping through arrays: forEach() loops through the array and performs a function for each element
const superheroes = [
	"batman",
	"superman",
	"the flash",
	"the green hornet",
	"superwoman",
];

// .forEach() calls a function on each element in an array
superheroes.forEach((hero) => {
	console.log(hero);
});
