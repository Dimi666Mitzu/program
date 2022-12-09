
  var dim;
  var x = 50;
var b = 200;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    dim = width / 2;
    background(0);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(1);
    
  }
  
  function draw() {
    background(0);
    for (var x = 0; x <= width; x += dim) {
      drawGradient(x, height / 2);
    }
      push();
    translate(width * 0.8, height * 0.5);
    rotate(frameCount / 10);
    star(0, 0, 30, 70, 5);
    pop();
  }
  function star(x, y, radius1, radius2, POINTS) {
    var angle = TWO_PI / POINTS;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  function drawGradient(x, y) {
 
    var radius1 = dim / 2;
    var radius2 = dim / 2;
    var h = random(0, 360);
    for (let r = radius1; r > 0; --r) {
      fill(h, 90, 90);
      star(x, y, radius1, radius2, POINTS);
      h = h % 360;
    }
    for (let r = radius2; r > 0; --r) {
      fill(h, 90, 90);
      star(x, y, radius1, radius2, POINTS)
      h = h % 360;
    }
  }
   


