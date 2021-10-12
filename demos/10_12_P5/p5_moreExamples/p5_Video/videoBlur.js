let video;
let slider;

function setup() { 
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.id("slider");
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id("canvas");
  background(42);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id("video");

  
  let s = new Seriously();
  let src = s.source("#video");
  let tgt = s.target("#canvas");
  
  let blur = s.effect("blur");
  blur.amount = "#slider";
  blur.source = src;
  tgt.source = blur;
  
  s.go();
} 