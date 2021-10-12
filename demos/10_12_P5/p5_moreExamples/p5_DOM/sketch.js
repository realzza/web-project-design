var sketch1 = function (sketch) {
	var x = 400;
	var y = 100;

	var color;

	//a variable to store the new div object
	var newDiv;

	var newP;

	sketch.setup = function () {
		sketch.createCanvas(800, 400);
		//You can create DOM elements with the .create___ functions in p5
		//createDiv is stored in a variable, you can create the div and size at the same time
		newDiv = sketch.createDiv("a new div").size(200, 100).id("newDiv");
		//you can add properties to this DIV
		//newDiv.id('newDiv');
		//newDiv.addClass('')
		//you can also change styles

		newDiv.style("background-color", "#000");
		newDiv.style("color", "rgb(242, 61, 61)");

		//create other elements (we have createP, createA, and createElement, among others)
		newP = sketch.createP("new paragraph");
		//now attach the new paragraph to a parent container
		newP.parent("newDiv");
	};

	sketch.draw = function () {
		sketch.background(255);
		//this is in draw so we can change values using the draw loop
		color = sketch.random(255);
		var color2 = sketch.random(255);
		var color3 = sketch.random(255);
		//add color to the new string
		color = "rgb(" + color + "," + color2 + "," + color3 + ")";
		console.log(color);
		//change the color using the draw loop
		newP.style("color", color);

		sketch.stroke("#000");
		sketch.fill("#be2525");

		sketch.rect(x, y, 100, 100);

		//the position of the rectangle is different than the position of the div, even if we give them the same x,y values, because the position of the div is relative to the document, and the position of the rectangle is relative to the canvas

		newDiv.position(x, 920); //this position is absolute, so it will appear over whatever item
		//x = sketch.random(400);//assign x to a random value between 0 and 400
	};
};

new p5(sketch1, "createElements");

//second div.
var sketch2 = function (sketch) {
	var newP;

	var sizeDiv;

	var width;

	var height;

	sketch.setup = function () {
		newP = sketch.createP("follower");
		sketch.createCanvas(600, 600);

		sizeDiv = sketch.createDiv("a new div!");
		//set a bunch of style properties at once
		sizeDiv.style(
			"font-family:monospace; background-color:#FF0000; color:#FFFFFF; font-size:18pt; padding:10px;"
		);
	};

	//change something with mouse interaction attached to this div
	sketch.draw = function () {
		sketch.background("#fff");

		//this is the <p> element created on line 66.  Here it's movement is tied to the mouseposition
		newP.position(sketch.mouseX, sketch.mouseY + 1500); //this is relative to the DOM so we have to add a lots of pixels to get it this far down on the page
		sketch.fill("#FF0000");
		//here the width of the div is also tied to the mouse position
		width = sketch.map(sketch.mouseX, 0, 1200, 50, 200);
		//apply that width with "size"
		sizeDiv.size(width, 200);
		//and the width of the ellipse to this as well
		sketch.ellipse(300, 300, width, width);
	};
};

new p5(sketch2, "mouseInteraction");

//3. Callback functions
var sketch3 = function (sketch) {
	var newDiv;

	var newP;

	var w;

	var h;

	sketch.setup = function () {
		var button;
		newDiv = sketch.createDiv("Click Here").id("anotherDiv").size(400, 150);
		newP = sketch.createP("a new p!");
		newP.parent("anotherDiv");
		button = sketch.createButton("click!");
		//you can also change elements with a callback function
		button.class("myButton");
		button.mouseClicked(changeColor);
		sketch.createCanvas(400, 400);
		sketch.background(255);
	};

	sketch.draw = function () {
		//and you can bind click events to everything
		newDiv.mouseClicked(addRect);
	};

	//this is where we define the callback function
	function changeColor() {
		var color = sketch.random(255);
		var fontSize = sketch.random(48);
		fontSize = fontSize.toString() + "px";
		color = "rgb(" + color + ",100,210)";
		newP.style("color", color);
		newP.style("font-size", fontSize);
	}

	function addRect() {
		sketch.fill(sketch.random(255));
		sketch.rect(sketch.random(200), sketch.random(200), w / 2, h / 2);
		w = sketch.random(400);
		h = sketch.random(400);
	}
};

new p5(sketch3, "callbackFunction");

var sketch4 = function (sketch) {
	var textbox;
	var slider;
	var paragraph;

	sketch.setup = function () {
		sketch.noCanvas();
		textbox = sketch.createInput("enter text");
		slider = sketch.createSlider(10, 64, 10, 4);
		paragraph = sketch.createP("starting text");

		textbox.changed(updateText);
		slider.changed(updateSize);
		//slider.input(updateSize);
		//textbox.input(doSomething); not yet working due to editor issue (2015.10.24)
	};

	function updateSize() {
		// paragraph.style("font-size", "24pt");
		paragraph.style("font-size", slider.value() + "pt");
	}

	function updateText() {
		paragraph.html(textbox.value());
	}
};

new p5(sketch4, "inputs");
