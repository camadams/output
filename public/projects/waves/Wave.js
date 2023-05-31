class Wave {
  constructor(x, y, amp, period) {
    this.x = x;
    this.y = y;
    this.amp = amp;
    this.points = [];
    this.period = period;
    this.generatePoints();
  }

  generatePoints() {
    var angle = 0;
    this.points = [];
    for (let i = 0; i < width; i++) {
      const f = -1 * sin(angle) * this.amp;
      // const f = -1 * sin(angle + noise((this.y + i) / 500)) * this.amp;
      this.points.push(f);
      angle += (this.period / width) * 2 * Math.PI;
    }
  }

  show() {
    noFill();
    beginShape();
    for (let i = 0; i < this.points.length; i++) {
      vertex(i + this.x, this.points[i] + this.y);
    }
    endShape();
  }
}
