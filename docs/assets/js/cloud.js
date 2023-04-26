let clouds = [];

function makeClouds() {
  let elements = selectAll(".cloud");
  for (let e of elements) {
    let col = random(colors);
    let c = new Cloud(e, col);
    clouds.push(c);
  }
}

class Cloud {
  constructor(element, col) {
    this.element = element;
    this.x;
    this.y;
    this.winPos;
    this.color = "rgb(239, 131, 84)";
    this.colors = [];
    this.sz = random(20, 50);
    this.w;
    this.h;
    this.puffx = [];
    this.puffy = [];
    this.getPos();
    this.genCloud();
    this.show();
  }
  genCloud() {
    let num = (this.w * this.h) / 1000;
    for (let i = 0; i < num; i++) {
      this.puffx[i] = random(0, this.w);
      this.puffy[i] = random(0, this.y);
      let alpha = random(100, 255);
      this.colors[i] = color(this.color);
      this.colors[i].setAlpha(alpha);
    }
  }
  getPos() {
    this.winPos = select(".grid").position();
    let pos = this.element.position();
    let sz = this.element.size();
    this.x = pos.x;
    this.y = pos.y;
    this.h = sz.height;
    this.w = sz.width;
  }
  show() {
    ellipseMode(CORNER);

    push();
    noStroke();
    translate(this.winPos.x + this.x, this.winPos.y + this.y);
    for (let i = 0; i < this.puffx.length; i++) {
      fill(this.colors[i]);
      circle(this.puffx[i], this.puffy[i], this.sz);
    }

    pop();
  }
}
