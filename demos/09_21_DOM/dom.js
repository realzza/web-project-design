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
