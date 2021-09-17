/* Functions, Methods, and Events */

/**
 * Functions are blocks of code that are designed to perform a particular
 * task.  The function is executed when something
 * invokes it.
 **/

// defining a function

function myAddingFuction(x, y) {
	return x + y;
}

// invoking a function
console.log(myAddingFuction(3, 4));
console.log(myAddingFuction());
console.log(myAddingFuction(3, 4, 1));

// anonymous function

const anonFunction = function () {
	console.log("I'm anonymous");
};

anonFunction();

// anonymous function as callback for another function
document.addEventListener("DOMContentLoaded", (e) => {
	console.log("The dom content totally loaded!");
});
// function scope

var myBool = true;

// function arguments
function betterAdd() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(betterAdd(6, 7, 8, 9, 10));

/*
 * Methods are actions that can be performed on objects, or functions defined within objects
 */

// example of an object with a method
const character = {
	name: "Skootles the Pigeon",
	id: 001,
	weapon: "Wings of Knives",
	running: 2.4,
	attack: 8.8,
	shield: 7.5,
	characterRate: function () {
		return (
			Math.round(((this.running + this.attack + this.shield) / 3) * 10) / 10
		);
	},
};

console.log(character.characterRate());

// invoking the method

/* JS also has a number of built in methods and objects that we've already discussed like the document object.  There is also the window object, the Math object, which has a number of helpful math methods (see line 59, above) */

/* //Math object
console.log(Math.round(77.89)); //round to integer
console.log(Math.ceil(77.89)); //round up to integer
console.log(Math.floor(77.89)); //round down to integer

//see: https://www.w3schools.com/js/js_math.asp for all Math methods

//Math.random() returns a random number between 0 and 1
console.log(Math.random() * 100); //returns integers between 0 and 100 */

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
//randomRange(0, 255);

/*
 *  Events
 * See MDN Listing of events and DOM objects associated: https://developer.mozilla.org/en-US/docs/Web/Events
 */

// call event with event handler "onclick"
let clickDiv = document.getElementById("click-event");
clickDiv.onclick = function () {
	let color = randomRange(0, 255);
	let color2 = randomRange(0, 144);
	clickDiv.style.backgroundColor = "rgb(" + color2 + ", 240," + color + ")";
};
// addEventListener for "scoll" event
window.addEventListener("scroll", function (e) {
	let yPos = window.scrollY;
	let topLink = document.getElementById("to-top");
	if (yPos >= 240) {
		topLink.className = "topLink show";
	} else {
		topLink.className = "topLink hide";
	}
});
