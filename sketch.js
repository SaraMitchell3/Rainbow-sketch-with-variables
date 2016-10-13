var img;
var colourRed;
var colourOrange;
var colourYellow;
var colourGreen;
var colourBlue;
var colourIndigo;
var colourViolet;
var black = 0;
var white = 255;
var x = 450;
var y = 300;

function setup() {
  
  img = loadImage("rainbowx.png");
  img.resize(842,629);
  
  createCanvas(842, 629);
}

function draw() {
  
  colourRed = color(255,0,0);
  colourOrange = color(255,127,0);
  colourYellow = color(255,255,0);
  colourGreen = color(0,255,0);
  colourBlue = color(0,0,255);
  colourIndigo = color(75,0,130);
  colourViolet = color(148,0,211);
 
  background(img);
  
  ellipseMode(CENTER);
  strokeWeight(1.5);
  stroke(black);
  fill(colourRed);
  ellipse(x, y, 200, 200);
  
  stroke(white);
  fill(colourOrange);
  ellipse(x, y, 150, 150);
  
  //triangle pointing downwards
  stroke(black);
  fill(colourYellow);
  triangle(362, 250, x, 400, 537, 250);
  
  //triangle pointing upwards
  stroke(white);
  fill(colourGreen);
  triangle(362, 350, x, 200, 537, 350);
  
  ellipseMode(CENTER);
  stroke(black);
  fill(colourBlue);
  ellipse(x, y, 100, 100);
  
  stroke(white);
  fill(colourIndigo);
  ellipse(x, y, 50, 50);
  
  strokeWeight(5);
  stroke(colourViolet);
  point(x,y);
}
