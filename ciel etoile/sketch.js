let isVertical = true;
// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  c1 = color(70, 0, 131);
  c2 = color(177, 70, 209);
}

function draw() {
  // put drawing code here
  background(25, 14, 30);
  stroke(255);

  setGradient(0, 0, width / 2, height, c1, c2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, c2, c1, X_AXIS);


  let counter = 0;
  while (counter < 100) {
    mouliStar(noise(1, counter) * width,
      noise(2, counter) * height,
      noise(2, counter) * 10,
      noise(2, counter) * 10)
      ;
    counter++;
  }
}


function mouliStar(x, y, w, h) {
  stroke(255);
  fill(255);
  ellipse(252, 144, 72, 72);
  push();
  translate(x, y)
  rotate(millis() / 500)

  if (frameCount % 3 == 0) {
    line(-w / 2, 0, w / 2, 0);//LIGNE VERTICALE
    
  } else {

    line(0, -h / 2, 0, h / 2);
    //LIGNE HORIZONTALE
  }

  pop();


}



function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}



