var cap;
function setup() {
  createCanvas(640, 480);
  cap = createCapture(VIDEO);
  cap.size(640,480);
  //cap.hide();
  rectMode(CENTER);
  noStroke();
}
function draw() {
  background(50);
  fill(255);
  cap.loadPixels();
    //use the green value of the pixel to size rect horizontally
      /*for (var cy = 0; cy < cap.height; cy += 10) {
        for (var cx = 0; cx < cap.width; cx += 5) {
          var offset = ((cy*cap.width)+cx)*4;
          var xpos = (cx / cap.width) * width;
          var ypos = (cy / cap.height) * height;
          rect(xpos, ypos, 10,
            10 * (cap.pixels[offset+1]/255));
        }
      }
    */
    //
    background(255);
    noStroke();
  
          var size = 12;

          for(var x = 0; x < cap.width; x += size) {
            for(var y = 0; y < cap.height; y += size) {

              var index = (x + (y * cap.width)) * 4;

              //grab the rgb values (for every 'size' pixels)
              var r = cap.pixels[index];
              var g = cap.pixels[index+1];
              var b = cap.pixels[index+2];
              var col = color(r, g, b);
              //lightness() extracts the hsl value from a color array in r,g,b https://p5js.org/reference/#/p5/lightness
              var light = lightness(col);
              //map lightness to radius, based on the size we set above.  To a value between size and 3.  Darker colors will make larger ellipses
              var radius = map(light, 0, 100, size,3);
              //
              fill(r, g, b);
              ellipse(x, y, radius);

            }
          }
     
    //cap.updatePixels();
    //image(cap,0,0);
    
    
}