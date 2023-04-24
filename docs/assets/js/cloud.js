let clouds = [];

function makeClouds() {
  let elements = selectAll(".cloud");
  for (let e of elements) {
    let c = new Cloud(e);
    clouds.push(c);
  }
}

class Cloud {
  constructor(element) {
    this.element = element;
    this.x;
    this.y;
    this.winPos;
    this.col = color(random(colors));
    this.col.setAlpha(100);
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
    fill(this.col);
    translate(this.winPos.x, this.winPos.y);
    ellipse(this.x, this.y, this.w, this.h);
    pop();
  }
}
