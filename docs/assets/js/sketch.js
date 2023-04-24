function setup() {
  createCanvas(windowWidth, window.innerHeight).parent("#splash");
  textCol2 = color("#98CE00");

  fontGen();

  let element = document.getElementById("spacer");
  element.style.height = textSize() + "px";
  image(textMask, 0, 0);

  makeClouds();
}

function draw() {
  noFill();
  image(textMask, 0, 0);
  for (i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
  for (let c of clouds) {
    c.getPos();
    c.show();
  }
}
