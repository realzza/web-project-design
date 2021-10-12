var dropzone;
var myCanvas;


function setup() {
  myCanvas = createCanvas(200, 200);
  background(0);
  //hide the canvas, we're not drawing anything to it
  myCanvas.hide();  
    
//#dropzone is an element in the html document
  dropzone = select('#dropzone');
  dropzone.drop(gotFile);
}

function gotFile(file) {
  //console.log(file);  //what's in the file?  how do you access its properties?
  //create a paragraph with the file
  createP(file.name + " " + file.size);
  img = createImg(file.data);//get the file data, store that in a new variable
  //draw that image to the canvas
  img.size(100, 100);

  
}


