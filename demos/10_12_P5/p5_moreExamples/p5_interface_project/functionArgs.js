var canvas; 

var interfaceDiv;

var clearButton;

var stickerButton;

var sticker;

var stickerBool;

var strokeColor;


function setup(){
    //get ahold of the element we want to put the Canvas in
    interfaceDiv = select('#interface');
    //return its properties
    //console.log(interfaceDiv.width);
    //set the canvas width and height to the properties of b
    canvas = createCanvas(interfaceDiv.width,interfaceDiv.height);
    canvas.parent('#interface');
    
    //Attach a mouse pressed event to a button and call a function
    //attach events to existing dom elements - create a button to clear the canvas
    clearButton = select('#clear');
    //console.log(clearButton);
    clearButton.mousePressed(clearCanvas);
    background('#fff');
    
    //attach a mouse pressed event to a button and call a function with parameters
    //load an image
    sticker = loadImage('images/objects/image_1.png')
    stickerButton = select('#sticker');
    stickerButton.mousePressed(function() { 
        addASticker(random(800),random(400));
    }
                              );
    
    
    //function modularity - attach the same function to buttons that "work" the same
    //this is to choose the color
    var redButton = select('#red');
    redButton.mousePressed(colorFunction);
    var greenButton = select('#green');
    greenButton.mousePressed(colorFunction);
    var blueButton = select('#blue');
    blueButton.mousePressed(colorFunction);
    var blackButton = select('#black')
    blackButton.mousePressed(colorFunction);
    
    
    //do the same for the stroke Weight
    var strokeFour = select('#four');
    strokeFour.mousePressed(strokeChange);
    var strokeSix = select('#six');
    strokeSix.mousePressed(strokeChange);
    var strokeEight = select('#eight');
    strokeEight.mousePressed(strokeChange);
    var strokeTen = select('#ten');
    strokeTen.mousePressed(strokeChange);
    
    //both of the above could probably be made more modular.  
    
}

function draw(){
   //background(0);
   //image(sticker, random(width), random(height));
}

//this is our main drawing line
function mouseDragged(){
    console.log('im happening!');
    //strokeWeight(10);
    //stroke(255);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

//this fires when the clearButton button is pressed
function clearCanvas(){
    //clear pixels, including background
    clear();
    //redraw background
    background(255);
}

function addASticker(width,height){
    image(sticker, width, height, sticker.width/2, sticker.height/2);
    //fill(255);
    //ellipse(width/2,height/2,20,20)
}

function colorFunction(){
    console.log(this.elt.id);
    var color = this.elt.id;
    console.log(typeof(color));//string
    stroke(color);
    //this uses the string that is the ID of the element to set the color - you could assign each string to a hex value instead, or use the hex value as the ID
}

function strokeChange(){
    var strokeWidth = this.elt.id;
    console.log(this);
    console.log(strokeWidth);
    console.log(typeof(strokeWidth));
    if(strokeWidth == 'four'){
        strokeWeight(4);
    } else if (strokeWidth == 'six'){
        strokeWeight(6);
    } else if (strokeWidth == 'eight'){
        strokeWeight(10);
    } else if (strokeWidth == 'ten'){
        strokeWeight(10);
    } else {
        strokeWeight(2);
    }
}


function windowResized(){
    console.log('resize!');
    resizeCanvas(interfaceDiv.width,interfaceDiv.height);
    //console.log(interfaceDiv.width);
}