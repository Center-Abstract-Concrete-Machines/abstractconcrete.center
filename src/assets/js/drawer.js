let noiseScale = 0.003;

let particles = [];

const spdRange = [0.5, 2];
let count = 0;

let font; // will hold font
let points; // will hold points of font
let bounds;
let colors = ["#fffbf1", "#2d2d2a", "#eee5e9"];
let textCol2;
let textMask;
let content;
const theText = "CCAM";

function preload() {
  font = loadFont("assets/fonts/Righteous-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, window.innerHeight).parent("#splash");
  textCol2 = color("#98CE00");

  fontGen();

  content = select("#content");
  content.position(0, textSize());
  image(textMask, 0, 0);
}

function getPoints(text, sample, thresh) {
  let offset = width / 20;
  let pts = font.textToPoints(text, offset, textSize() - offset, textSize(), {
    sampleFactor: sample,
    simplifyThreshold: thresh,
  });

  return pts;
}

function fontGen() {
  particles = [];
  textSize(maxWidth(theText, width));
  points = getPoints(theText, 0.6, 0);
  console.log(points.length);
  points2 = getPoints(theText, 1, 0.7);
  bounds = font.textBounds(theText, 50, textSize() - 50, textSize());
  drawText();
  for (let p of points) {
    let x = Math.floor(p.x);
    let y = Math.floor(p.y);
    let b = new Particle(x, y);
    particles.push(b);
  }
  console.log(particles.length);
}

function maxWidth(string, width) {
  let dif = width;
  let sz = 20;
  while (dif > 1) {
    textSize(sz);
    let check = textWidth(string);
    dif = width - check;
    sz++;
  }
  return sz;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //   background("#fffbf1");
  //   content.position(0, textSize());
  //   fontGen();
}

function drawText() {
  textMask = createGraphics(bounds.w + 100, bounds.h * 2);
  textMask.noFill();
  textCol2.setAlpha(80);
  textMask.stroke(textCol2);
  textMask.strokeWeight(15);

  for (let p = 0; p < points2.length; p++) {
    if (p > 0) {
      textMask.line(
        points2[p].x,
        points2[p].y,
        points2[p - 1].x,
        points2[p - 1].y
      );
    }
  }
}

function draw() {
  noFill();
  image(textMask, 0, 0);
  for (i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dir = createVector(0, 0);
    this.speed = random(spdRange[0], spdRange[1]);
    this.col1 = color(random(colors));
    this.col2 = color(random(colors));
    this.r = (spdRange[1] + spdRange[0] - this.speed) * 5;
    this.alpha = 255;
  }
  move() {
    this.noise =
      500 *
      map(
        noise(this.pos.x * noiseScale, this.pos.y * noiseScale),
        0.2,
        0.8,
        -1,
        1
      );
    this.dir = createVector(cos(this.noise), sin(this.noise));
    this.dir.mult(this.speed);
    this.pos.add(this.dir);
  }

  display() {
    let col = lerpColor(this.col1, this.col2, this.noise);
    col.setAlpha(40);
    stroke(col);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
}
