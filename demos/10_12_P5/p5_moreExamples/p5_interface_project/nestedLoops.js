//The canvas (and the document) are two-dimensional pixel spaces.  In many cases, you may want to do something for every x and every y, or for specific pixels in x/y pixel space.
//nested for loops are a method for this.
function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    pixelDensity(1);
    frameRate(8);
    //noLoop();
}

function draw() {
    background(0);
    strokeWeight(3);
    stroke(255);
    //the draw loop is also a loop, but it updates every time we get to the end of the function - so we can use it for animation
    //these two for loops will happen COMPLETELY, and ONCE every time the draw loop is called
    
    //for every 50 x pixels of the width...
    /*for(var x = 25; x <= width; x += random(15,25)){
        //...make a circle at every 50 y pixels of the height
        for(var y = 25; y <= height; y += random(15,25)) {
            //random fill
            fill(random(255), random(255), random(255));
            //ellipse at x and y
            ellipse(x,y,25,25);
        }//end y for loop
    }//end x for loop*/
    
    
    //another case for iterating over an array with a loop for x and y in pixel space.
    //loading the array of pixels! https://p5js.org/reference/#/p5/loadPixels
    //load the pixels.
    background(255);

    
      //loads an array of pixels
      //load pixels one by one with get(x,y) and set them with set(x,y)
      //or load ALL THE PIXELS!
      loadPixels();
        //console.log(pixelFriends);
      //loop through all of the y values for the height of the canvas
      for (var y = 0; y < height; y++) {
        //and for each y, all of the x values for the width of the canvas
        for (var x = 0; x < width; x++) {
          //for each x, create an index value for the four spots in the array each pixel takes up .  (x+y*width) gets the place of the pixel color vals. then in the array, *4
          var index = (x + y * width)*4;
          //now, index over for each val
            //set the red
          pixels[index+0] = random(255);
            //set the green
          pixels[index+1] = x;
            //set the blue
          pixels[index+2] = y;
            //set the alpha
          pixels[index+3] = 255;      
        }
      }
      updatePixels();
    
}//end draw loop - at the end of the draw loop it's going to happen all over again, at a speed based on the frameRate()