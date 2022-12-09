let myFav;

function preload() {
  myFav = loadImage("pentacle.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(255, 0, 0);
  image(myFav, 0, 0, 1200, 700);
}

