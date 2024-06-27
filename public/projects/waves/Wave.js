class Wave {
  // constructor(x, y, amp, period) {
  //   this.x = x;
  //   this.y = y;
  //   this.amp = amp;
  //   this.points = [];
  //   this.period = period;
  //   this.generatePoints();
  // }

  constructor(parameterDot, i) {
    this.x = 0;
    this.y = (height / (parameterDot.numWaves + 1)) * (i + 1);

    var ampIncrement = parameterDot.maxAmp / (parameterDot.numWaves - 1);

    // this.amp = (parameterDot.maxAmp / (parameterDot.numWaves - 1)) * i + 5;
    this.amp = 5 + i * ampIncrement;
    this.period = parameterDot.periodIncrement * (i + 5);

    var angle = 0;
    this.points = [];
    for (let i = 0; i < width; i++) {
      const f = -1 * sin(angle) * this.amp;
      // const f = -1 * sin(angle + noise((this.y + i) / 500)) * this.amp;
      this.points.push(f);
      angle += (this.period / width) * 2 * Math.PI;
    }
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
