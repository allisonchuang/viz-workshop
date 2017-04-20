function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    // var red = random(255);
    // var green = random(255);
    // var blue = random(255);
    // fill(red, green, blue);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
    stroke(255, 255, 255, 25);
  }
  // ellipse(mouseX, mouseY, 80, 80);
  rect(mouseX,mouseY,50,50);
}
