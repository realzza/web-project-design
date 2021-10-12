var canvas;
var mic;

//update sketch to load and play a dragged file and control the viz from that volume

//update sketch to load an array of files and click through the array

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    //put the canvas behind
    canvas.style('z-index','-1');
    canvas.parent('interface');
    
    
    
    
    mic = new p5.AudioIn();
    mic.start();
    
    //colorMode(RGB,100);
  }

    



function draw(){
    
    background(30,100,0);
        /*for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
        stroke(i, j, 100);
        point(i, j);*/
    var level = mic.getLevel();
    console.log(level);
    var size = map(level, 0, 0.8, 3, windowHeight/2);
    stroke('#000');
    ellipse(windowWidth/2, windowHeight/2, size, size);
    
}

function windowResized(){
    resizeCanvas();
}