//Load an array of images, and loop through it, performing some action on EACH item in the array

//note: if working locally look at the HTML for this file in Firefox.  In google chrome you will get a cross-origin error
var imgs = [];//create a global variable as an empty array

var img; //var for the single image

//start with a preload function - before the page fully loads
function preload() {
    //to load one image
    img = loadImage('images/background/background_2.jpg'); // syntax to Load the image "images/objects/image_0.png
  for (var i=0; i<5; i++) {//for five images
      //the below will create a string for each image like images/image_1.png, images/image_2.png, etc.
      imgs[i] = loadImage("images/objects/image_"+i+".png"); 
  }
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    //put that background image in place
    image(img, 0, 0, windowWidth,windowHeight);
    
    frameRate(1);
    //console.log(imgs[1]);
}

function draw() {
    //console.log(imgs);
    
    
    //console.log(imgs[1]);
   // image(imgs[1],50,50);
    //we have an aray of six images
    for (var i=0; i<5; i++) {
        
    //put the image at a random place and use the data about the image width and height to size it
    console.log(imgs[i].width);
        
        
    image(imgs[i], random(width), random(height), imgs[i].width/6, imgs[i].height/6); 
  }
    
   
}