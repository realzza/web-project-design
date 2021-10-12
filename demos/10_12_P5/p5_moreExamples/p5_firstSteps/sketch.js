var mySketch = function(s){
    var myCanvas;

    s.setup = function () {
    myCanvas = s.createCanvas(800,400);//draw a canvas 800 pixels wide and 400 pixels high
    //myCanvas.parent("canvas1");//attach that canvas to the container with the id canvas1
    }

    s.draw = function() {
    
    
    s.background(255);
    s.fill('#f21d5d');
    s.ellipse(50, 50, 80, 80);

    }
}

var myp5 = new p5(mySketch, 'canvas1');