<<<<<<< HEAD
function setup() {
	createCanvas(640, 400);
	background(140);
	frameRate(14);
}
let x = 0;
let y = 0;
function draw() {
	background(140);
	stroke(0);
	fill(255);
	ellipse(x, y, 50, 50);
	x += 2;
	y += 2;
	if (y > height) {
		y = 0;
		x = 0;
	}
}
=======
function setup() {
  createCanvas(640, 400);
  background(140);
}

let x = 0;
let y = 0;
let bg_num = 0;
let ball_color = 255;
function draw() {
  background(bg_num % 255);
  stroke(0);
  fill(ball_color % 255);
  ellipse(x, y, 50, 50);
  x += 1;
  y += 1;
  if (y > height) {
    y = 0;
    x = 0;
  }
  bg_num += 1;
  ball_color -= 1;
}
>>>>>>> 28a36a8... stage unstaged changes
