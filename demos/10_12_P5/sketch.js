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
