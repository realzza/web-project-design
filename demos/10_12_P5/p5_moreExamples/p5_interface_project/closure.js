/*Closure in Javascript - code adapted from Dan Shiffman, p5.js videos 9.6 

in this example the function makeTimer  

*/
var x = 0;
var timer1;
var timer2;

function setup() {
  createCanvas(200, 200);
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');
    anotherTimer = createDiv('my new timer');

  makeTimer(timer1, 3000);
  makeTimer(timer2, 312);
    makeTimer(anotherTimer,500);
    
    

}

function makeTimer(myElement, wait) {
  var counter = 0;
    // syntax: setInterval(someFunction,someNumberofMillis);
  setInterval(timeIt, wait);
  function timeIt() {
    myElement.html(counter);
    counter++;
  }
}


function draw() {
  background(51);
  stroke(255);
  line(x, 0, x, height);

  x = x + 3;
  if (x > width) {
    x = 0;
  }
}
