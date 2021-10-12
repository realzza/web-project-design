var canvas; 

var interfaceDiv;

var clearButton;

var changeButton;

var storeStroke;

var strokeColor;

function setup(){
    //create a canvas with pixel values, assign it to main
    //canvas = createCanvas(200,200);
    //canvas.parent('#interface');
    
    //canvas with window width and window height
    //canvas = createCanvas(windowWidth,windowHeight);
    //make sure it's in the background, but then theres still stuff behind it
    //canvas.style('z-index','99');
    //canvas.parent('#interface');
    
    //get ahold of some element
    interfaceDiv = select('#interface');
    //return its properties
    //console.log(interfaceDiv.width);
    //set the canvas width and height to the properties of b
    canvas = createCanvas(interfaceDiv.width,interfaceDiv.height);
    canvas.parent('#interface');
    
    //attach events to existing dom elements
    clearButton = select('#clear');
    //console.log(clearButton);
    clearButton.mousePressed(clearCanvas);
    //background(0);
    
    //change the stroke weight
    //set an initial value
    strokeWeight(10);
    stroke(255);
    //store that value
    storeStroke = 10;
    
    strokeColor = 255;
    
    
    
    //attach the changing function to a button
    changeButton = select('#changePen');
    changeButton.mousePressed(changePen);
    background(0);
}

function draw(){
   //background(0);

}

function mouseDragged(){
    console.log('im happening!');
    //strokeWeight(10);
    //stroke(255);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

function clearCanvas(){
    clear();
    //redraw background
    background(0);
}


function changePen(){
    strokeColor-=30;
    storeStroke-=2;
    stroke(strokeColor);
    
    strokeWeight(storeStroke);
    //reset
    if(storeStroke<2){
        storeStroke=10;
    }
    
    if(strokeColor<50){
        strokeColor = 255;
    }
}

function windowResized(){
    console.log('resize!');
    resizeCanvas(interfaceDiv.width,interfaceDiv.height);
    //console.log(interfaceDiv.width);
}