//Getting the image from the webcam to display in the canvas.  Use the function .createCapture(VIDEO); https://p5js.org/examples/dom-video-capture.html
//createCapture() creates a video dom element.  This is separate from the canvas.
//createCapture() is part of the p5 dom element library

var myVideo;

function setup() {
	createCanvas(640, 360);
	background(51);
	//create the video, store it in a variable.  This will create a video as an element separate from the canvas

	myVideo = createCapture(VIDEO);
	//give video a size so it doesn't appear so so large
	myVideo.size(640, 360);
	//un-comment the line below to hide myVideo, and create your own in the canvas (see the draw() loop)
	myVideo.hide();

	//console.log(myVideo);
}
function draw() {
	// draw the video onto the canvas (using the width and height of the canvas)
	image(myVideo, 0, 0, width, height);

	//simple manipulation -
	//tint the video - can do this in the canvas
	//tint(230, 12, 0);
	//or change the size, tie it to a mouse position
	//image(myVideo, 0, 0, mouseX, height);
	// rotate(PI / 3.0); //rotate the video
	//or flip it and display a flipped version
	//translate(myVideo.width,0);
	// scale(-1.0,1.0);
	//display the video with by using the variable and image()
	// image(myVideo,0,0);
	//or work directly with pixels
	//hint: increase the value in the position that 12 is in now, to change the size of the bit-mapping
	myVideo.loadPixels();
	for (var y = 0; y < height; y += 8) {
		for (var x = 0; x < width; x += 8) {
			var offset = (y * width + x) * 4;
			fill(
				myVideo.pixels[offset],
				myVideo.pixels[offset + 1],
				myVideo.pixels[offset + 2]
			);
			rect(x, y, 8, 8);
		}
	}
}
