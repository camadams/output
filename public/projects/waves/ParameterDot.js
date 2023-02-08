class ParameterDot {
  constructor(x, y, amp, period) {
    this.x = x;
    this.y = y;
    this.selected = false;
  }

  update() {
    if (this.selected) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  show() {
    ellipse(this.x, this.y, 10);
  }
}
