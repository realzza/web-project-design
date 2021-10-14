//Example One:  Draws ellipses at specific points - from LaurenMcCarthy's clmtrackr and p5 tutorial:  http://www.digipool.info/m/index.php/FaceTracking_with_clmtrackr_and_P5JS

/*//the size of the dots on the face
        var val = 5;
        //the object that holds our positions
        var positions;

        var outputs;

        function setup() {

          // setup camera capture
          var videoInput = createCapture();
          videoInput.size(400, 300);
          videoInput.position(0, 0);

          // setup canvas, this draws over CLMtrackr
          var cnv = createCanvas(400, 400);
          cnv.position(0, 0);

          // setup tracker
          ctracker = new clm.tracker();
          //reference model
          ctracker.init(pModel);
          //start, calling it on our element
          ctracker.start(videoInput.elt);

          fill(251);
          outputs = createP();
          outputs.parent('output');
        }

        function draw() {
          //clear the canvas, animate the dots over the face
          clear();

          // get array of face marker positions [x, y] format
          positions = ctracker.getCurrentPosition();

            //positions is an array of points, lets cycle through them
          for (var i=0; i<positions.length; i++) {

            // draw ellipse at each position point [x,y]
            var xVal = positions[i][0];
            var yVal = positions[i][1];
            ellipse(xVal, yVal, val, val);
            //write that val
            text(xVal);
          }
        }*/

//example two, face tracking with a bit more info.  Use text to add position numbers
//https://kylemcdonald.github.io/cv-examples/FaceTracking/

var capture;
var tracker;
var w = 640,
	h = 480;

var mouthSound;

function preload() {
	//mouthSound = loadSound('marbles-daniel_simon.mp3');
}

function setup() {
	capture = createCapture(
		{
			audio: false,
			video: {
				width: w,
				height: h,
			},
		},
		function () {
			console.log("capture ready.");
		}
	);
	capture.elt.setAttribute("playsinline", "");
	createCanvas(w, h);
	capture.size(w, h);
	capture.hide();

	colorMode(HSB);

	tracker = new clm.tracker();
	tracker.init();
	tracker.start(capture.elt);

	//mouthSound.loop();
	//mouthSound.setVolume(0);
}

function draw() {
	//use image to draw capture to the canvas
	image(capture, 0, 0, w, h);
	var positions = tracker.getCurrentPosition();

	noFill();
	stroke(255);
	beginShape();
	//make a shape, the line that wraps around
	for (var i = 0; i < positions.length; i++) {
		vertex(positions[i][0], positions[i][1]);
	}
	endShape();
	noStroke();

	//do we have things in the array of positions?
	if (positions.length > 0) {
		//compare positions in this array in order to get parts of the face
		var mouthLeft = createVector(positions[44][0], positions[44][1]);
		var mouthRight = createVector(positions[50][0], positions[50][1]);
		var smile = mouthLeft.dist(mouthRight);
		console.log(smile);

		for (var i = 0; i < positions.length; i++) {
			var myDiv = select(".info");

			if (smile > 68) {
				stroke(0, 100, 45);
				fill(0, 100, 45);
				myDiv.style("background-color", "rgb(255,0,0)");
			} else {
				fill(map(i, 0, positions.length, 0, 360), 50, 100);
				myDiv.style("background-color", "rgb(255,255,255)");
			}
			//add ellipse and number to each point
			ellipse(positions[i][0], positions[i][1], 4, 4);
			text(i, positions[i][0], positions[i][1]);
		}

		// uncomment the line below to show an estimate of amount "smiling"
		//rect(20, 20, smile * 3, 20);

		// uncomment for a surprise
		//noStroke();
		//fill(0, 255, 255);
		//ellipse(positions[62][0], positions[62][1], 50, 50);

		//play a sound - !?need to attach to a button press for sound to work in p5
		//or display text
	}
}
