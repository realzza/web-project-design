let sketch1 = function (p) {
	p.setup = function () {
		p.createCanvas(600, 400);
		p.background(240);
	};
	p.draw = function () {
		p.fill(255);
		p.stroke(250, 10, 130);
		if (p.mouseIsPressed) {
			p.ellipse(p.mouseX, p.mouseY, 25, 25);
		}
	};
};
new p5(sketch1, "canv1");

let sketch2 = function (p) {
	p.setup = function () {
		p.createCanvas(600, 400);
	};
	p.draw = () => {
		p.fill(255);
		p.stroke(10, 255, 120);
		p.background(240);
		if (p.mouseIsPressed) {
			p.rect(p.mouseX, p.mouseY, 30, 30);
		}
	};
};
new p5(sketch2, "canv2");
