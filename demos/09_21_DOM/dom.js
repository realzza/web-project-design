<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 05d0ead... solve conflicts
=======
>>>>>>> 829c3fe90b0192cb4d21c59f403834ab6efe0bee
=======
>>>>>>> 443e906... solve conflicts
let example_div = document.getElementById("example");
example_div.style.backgroundColor = "#9f9f9f";

let classes = document.getElementsByClassName("class-example");
for (i = 0; i < classes.length; i++) {
	classes[i].style.border = "1px solid red";
}

let allP = document.getElementsByTagName("p");
for (i = 0; i < allP.length; i++) {
	allP[i].style.border = "1px solid blue";
}

myNewP = document.createElement("p");
myNewP.textContent = "I'm a new P!";
example_div.appendChild(myNewP);

let myUl = document.getElementById("example-ul");
/* for (let e of myUl.children) {
	e.style.backgroundColor = "yellow";
} */

for (i = 0; i < myUl.children.length; i++) {
	myUl.children[i].style.backgroundColor = "yellow";
}

myP = document.querySelector("p");
console.log(myP);
myP.nextElementSibling.style.backgroundColor = "blue";

let myFruits = ["apples", "oranges", "bananas", "peaches", "cantelopes"];

let myFruitList = document.createElement("ul");
for (i = 0; i < myFruits.length; i++) {
	let myFruitLi = document.createElement("li");
	myFruitLi.innerHTML = myFruits[i];
	myFruitList.appendChild(myFruitLi);
}
example_div.appendChild(myFruitList);

myIcon = document.getElementById("icon");
topNav = document.getElementById("topNav");
myIcon.addEventListener("click", () => {
	if (topNav.className === "navBar") {
		topNav.className += " responsive";
	} else {
		topNav.className = "navBar";
	}
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1fb8f44... class code
=======
>>>>>>> 05d0ead... solve conflicts
=======
>>>>>>> 1fb8f44... class code
=======
=======
<<<<<<< HEAD
>>>>>>> 1fb8f44... class code
=======
>>>>>>> c0887401060d292c36b3206f1bcefa0162784085
>>>>>>> ba29cb602e05e377cb4a2207e70e01f65f688d8c
>>>>>>> 829c3fe90b0192cb4d21c59f403834ab6efe0bee
=======
>>>>>>> 443e906... solve conflicts
let example_div = document.getElementById("example");
example_div.style.backgroundColor = "#9f9f9f";

let classes = document.getElementsByClassName("class-example");
classes[0].style.backgroundColor = "red";
classes[1].style.backgroundColor = "green";

for (i = 0; i < classes.length; i++) {
  console.log(i);
  classes[i].style.border = "1px solid blue";
}

let allP = document.getElementsByTagName("p");
for (i = 0; i < allP.length; i++) {
  allP[i].style.border = "1px solid blue";
}

myNewP = document.createElement("p");
myNewP.textContent = "I'm a new P!";
example_div.appendChild(myNewP);

let allPNodes = document.querySelectorAll("p");
console.log(allPNodes);

let myUL = document.getElementById("example-ul");
// option 1
// for (let element of myUL.children) {
//   element.style.backgroundColor = "yellow";
// }

// option 2
for (i = 0; i < myUL.children.length; i++) {
  myUL.children[i].style.backgroundColor = "yellow";
}

myP = document.querySelector("p");
console.log(myP);
myP.nextElementSibling.style.backgroundColor = "#2490F2";
myP.nextElementSibling.nextElementSibling.style.backgroundColor = "#FFCA28";

let myFruits = ["apple", "oranges", "cantaloupe", "grapes"];
let myFruitList = document.createElement("ul");
for (i = 0; i < myFruits.length; i++) {
  let myFruitLi = document.createElement("li");
  // myFruitLi.textContent
  // myFruitLi.innerHTML = "<p>%s</p>" % myFruits[i];
  myFruitLi.innerHTML = myFruits[i];
  myFruitList.appendChild(myFruitLi);
}

example_div.appendChild(myFruitList);

myIcon = document.getElementById("icon");
topNav = document.getElementById("topNav");
myIcon.addEventListener("click", () => {
  if (topNav.className === "navBar") {
    topNav.className += " responsive";
  } else {
    topNav.className = "navBar";
  }
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1fb8f44... class code
=======
=======
>>>>>>> 05d0ead... solve conflicts
>>>>>>> 1fb8f44... class code
=======
>>>>>>> 1fb8f44... class code
=======
>>>>>>> 1fb8f44... class code
=======
<<<<<<< HEAD
>>>>>>> 1fb8f44... class code
=======
>>>>>>> c0887401060d292c36b3206f1bcefa0162784085
>>>>>>> ba29cb602e05e377cb4a2207e70e01f65f688d8c
>>>>>>> 829c3fe90b0192cb4d21c59f403834ab6efe0bee
=======
>>>>>>> 1fb8f44... class code
>>>>>>> 443e906... solve conflicts
