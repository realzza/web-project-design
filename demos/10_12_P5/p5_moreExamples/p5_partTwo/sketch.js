//P5_PartTwo
//working in the p5 Instance mode

//p5 is just JavaScript, so we can organize differently to have several different canvases in the same page, and play nicely with other js and jquery.  This is called working in "instance mode", or namespacing.  You assign the sketch function to a variable in javascript, then call that variable in a new p5 "instance" https://github.com/processing/p5.js/wiki/Global-and-instance-mode
//See Dan Shiffman's tutorial on namespacing: https://www.youtube.com/watch?v=Su792jEauZg

//storing the sketch as a function in a variable creates it in the js namespace
//this function will be called after it is defined as a new instance of p5, attached to a div with a specific ID on the html page "p5_partTwo.html" that calls this sketch.js
var mySketch = function (sketch) {
	//setting these to variables that will be global within the sketch
	var x = 300;
	var y = 200;
	var width = 100;
	var height = 100;

	sketch.setup = function () {
		sketch.createCanvas(600, 400);
		sketch.background(250);
		//changing the rectMode so the rectangle orients from the center
		sketch.rectMode(sketch.CENTER);
		sketch.noLoop();
	};
	sketch.draw = function () {
		sketch.fill(255);
		sketch.stroke("#000");
		sketch.rect(x, y, width, height);
		//as the draw loop loops, width and height will increase
		width++;
		height++;
		if (width > 600) {
			//so if width becomes greater than the canvas, reset these
			width = 100;
			height = 100;
		}
	};
	//controlling the loop by stopping and starting it
	//note the difference in notation from the example at https://p5js.org/reference/#/p5/noLoop when working in instance mode

	sketch.mousePressed = function () {
		sketch.loop();
	};
};
//the line below calls this sketch in a canvas instance in the div with the id canvas1
new p5(mySketch, "canvas1");

//this sketch will do the same thing as the sketch above, but control the rate with setInterval() rather than using the frame rate in the draw loop
var intervalCanvas = function (sketch) {
	//store interval
	var interval;

	var x = 300;
	var y = 200;
	var width = 100;
	var height = 100;

	sketch.setup = function () {
		sketch.createCanvas(600, 400);
		sketch.background("#000");
		//changing the rectMode so the rectangle orients from the center
		sketch.rectMode(sketch.CENTER);
		//now set an interval for the rectangle to be drawn
		//this is native Js so we dont need to append it to sketch
		interval = setInterval(drawRect, 500); //call the drawRect function every 500 ms
	};

	function drawRect() {
		sketch.noFill();
		sketch.stroke("#fff");
		sketch.rect(x, y, width, height);
		//as the draw loop loops, width and height will increase
		width += 10;
		height += 10;
		if (width > 600) {
			//so if width becomes greater than the canvas, reset these
			width = 100;
			height = 100;
		}
	}
	//add some mouse interaction -
	//clear that interval if the mouse is pressed
	//We'll cover DOM next week, but watch Dan Shiffman's setInterval(); tutorial to figure out how to tie this to a button, and toggle it on and off: https://www.youtube.com/watch?v=CqDqHiamRHA
	sketch.mousePressed = function () {
		clearInterval(interval);
	};
};

new p5(intervalCanvas, "canvasX");

//third example

//storing and manipulating variables and objects with time and mouse interaction
var canvas2 = function (sketch) {
	//make the circle object and give it x,y,and diameter values
	var circle = {
		//these x,y values put the circle in the center
		x: 300,
		y: 200,
		//the starting diameter for the circle is 50
		diameter: 50,
	};

	//hsla syntax c = color('hsla(160, 100%, 50%, 0.5)')
	var h = 150;
	var s = 100;
	var l = 70;
	var a = 0.9;

	sketch.setup = function () {
		sketch.createCanvas(600, 400);

		//change the colormode to hsl
		sketch.colorMode(sketch.HSL);
	};

	sketch.draw = function () {
		sketch.background(255, 100, 100, 0.01); //the background is semi-transparent so we can see drawn images from previous loops

		//attach one of the hsla values to mouseY
		//what is mouseY?

		//var x = sketch.mouseY;
		//console.log(x);
		//since the values are greater than 360, we have to map https://p5js.org/reference/#/p5/map
		//mapping the larger range of values to 0-360
		var mapped = sketch.map(sketch.mouseY, 0, 600, 0, 360);

		sketch.noFill(); //lets draw the ellpise in nofill mode
		sketch.stroke(mapped, s, l, a); //assign the stroke of the sketch to the hsla variables we set above
		sketch.ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
		circle.diameter += 7; //increase diameter value
		if (circle.diameter > 600) {
			//if the diameter value is greater than the canvas width, reset the diameter
			circle.diameter = 50;
		}
	};
};

new p5(canvas2, "canvas2");

var canvas3 = function (sketch) {
	var angle = 2.0;
	var offset = 300;
	var scalar = 3.5;
	var speed = 0.1;
	var col = {
		r: 255,
		g: 0,
		b: 0,
	};

	sketch.setup = function () {
		sketch.createCanvas(600, 600);
		sketch.noStroke();
		sketch.background(0);
	};

	sketch.draw = function () {
		col.r = sketch.random(0, 200);
		col.g = sketch.random(0, 250);
		col.b = sketch.random(100, 250);
		var x = offset + sketch.cos(angle) * scalar;
		var y = offset + sketch.sin(angle) * scalar;
		sketch.fill(col.r, col.g, col.b);
		sketch.noStroke();
		sketch.ellipse(x, y, 5, 5);
		angle += speed; //increases by 0.1
		scalar += speed; //increases by 0.1
	};
};
new p5(canvas3, "canvas3");

//this uses mouse interaction to create a basic drawing app
var canvas4 = function (sketch) {
	sketch.setup = function () {
		sketch.createCanvas(600, 400);
		//draw background only once in setup
		sketch.background(255);
	};
	//first lets just give that circle a color in draw.
	sketch.draw = function () {
		sketch.fill(250, 200, 200);
	};

	//now make stuff only when the mouse is pressed or the mouse is dragged

	sketch.mousePressed = function () {
		sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
	};
	sketch.mouseDragged = function () {
		sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
	};

	//another way to achieve this with less code - uncomment the lines below and comment out the previous sketch.draw, sketch.mousePressed, sketch.mouseDragged
	//instead of saying do this when that, lets test if a condition is true and doe something
	/*sketch.draw=function() {
              sketch.stroke(0);
                sketch.fill(250,200,200);
              if (sketch.mouseIsPressed === true) {
                sketch.ellipse(sketch.mouseX, sketch.mouseY, 100, 100);
                //and because we're using the draw loop, we can also change the fill value, or other things over time using the looping native to this function.  How would you change the color?
                
              }
            }*/
};
new p5(canvas4, "canvas4");
