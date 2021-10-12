//What if you want your canvas to animate (using the draw loop), but also be able to draw on that canvas (i.e. not over-write the canvas drawing with background())
let x = 200;
let y = 200;

let extraCanvas;

function setup(){
    //create a main canvas with create canvas - we can only do this once in p5
    createCanvas(400,400);
    //create the canvas you'd like to draw on with createGraphics()
    extraCanvas = createGraphics(400,400);
    //give the extraCanvas a clear bckground
    extraCanvas.clear();
    //this background draws the background on the main Canvas
    background(0);
}

function draw(){
    //No trails here, re-fill the background and this square appears in a random position with each loop
    background(0);

    x += random(-10,10);
    y += random(-10,10);
    
    /*fill(255, 0,0, 200);
    stroke(255);
    
    rectMode(CENTER);//draw the rectangle position from its center
    rect(x,y,20,20);
    */
    
    //Now, the canvas we can "draw" on (doesn't re-fill the background, and will leave "trails") - this draws "over" the other canvas, but it's clear (see line 13)
    if(mouseIsPressed){
        extraCanvas.fill(120,30,255,150);
        extraCanvas.noStroke();
        extraCanvas.ellipse(mouseX, mouseY, 25, 25);
    }

    
    
    
    
    
    
    //or add to one canvas while another thing is animating
    extraCanvas.fill(200,100);
    extraCanvas.stroke(255);
    extraCanvas.ellipse(random(width),random(height),10,10);
    
        
    //we created that extra canvas as graphics, so it is loaded and placed with "image()"
    image(extraCanvas, 0, 0);
    
    //want paint in background, rectangle in the foreground?  Move the drawing only to after the extraCanvasDrawing
    
    fill(255, 0,0, 200);
    stroke(255);
    rectMode(CENTER);//draw the rectangle position from its center
    rect(x,y,20,20);
    
}


//can also define with mouseDragged() outside of the drawing loop
/*function mouseDragged(){
        extraCanvas.fill(120,30,255,150);
        extraCanvas.noStroke();
        extraCanvas.ellipse(mouseX, mouseY, 60, 60);
}*/

