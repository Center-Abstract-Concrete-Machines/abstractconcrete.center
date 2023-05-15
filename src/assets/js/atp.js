let plateaus = [];
let img = [];

function preload() {
  for (let g = 1; g < 13; g++) {
    let i = loadImage("/assets/img/plateau/" + g + ".png");
    img.push(i);
  }
  console.log(img);
}

function setup() {
  let pageHeight = select(".container").size().height + 1000;
  createCanvas(window.innerWidth, pageHeight);
  rectMode(CENTER);

  for (let i = 0; i < 96; i++) {
    let g = (i % 11) + 1;
    let p = new Plateau(img[g]);
    plateaus.push(p);
  }
}

function draw() {
  background("#fffbf1");
  for (let p of plateaus) {
    p.check();
    p.show();
    p.move();
  }
}

class Plateau {
  constructor(img) {
    this.img = img;
    this.x = random(width);
    this.y = random(height);
    this.size = random(0.25, 1);
  }

  show() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    image(this.img, 0, 0);
    pop();
  }
  move() {
    this.y += this.size / 8;
  }
  check() {
    if (this.y > height + 512 * this.size) {
      this.y = -512 * this.size;
    }
  }
}
