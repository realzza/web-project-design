let x, y;
function setup() {
	createCanvas(720, 400);
	background(240);
	x = width / 2;
	y = height;
}

function draw() {
	//the draw loop itself is animated so we can use it
	background(240);
	stroke(50);
	fill(100);
	ellipse(x, y, 30, 30);
	x = x - 1;
	y = y - 2;
}
