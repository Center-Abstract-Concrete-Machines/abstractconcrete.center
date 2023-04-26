function setup() {
  let pageHeight = select(".grid").size().height + 1000;
  console.log(pageHeight);
  createCanvas(windowWidth, pageHeight).parent("#splash");
  textCol2 = color("#98CE00");

  fontGen();

  let element = document.getElementById("spacer");
  element.style.height = textSize() + "px";
  image(textMask, 0, 0);
  //makeClouds();
}

function draw() {
  noFill();
  image(textMask, 0, 0);
  for (i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  msnry.layout();
  for (let c of clouds) {
    c.getPos();
    c.show();
  }
}

// function mousePressed() {
//   if (clouds.length == 0) {
//     makeClouds();
//   }
// }
