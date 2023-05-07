class ParameterDot {
  static NUM_WAVES = 0;
  static PERIOD_INCREMENT = 1;
  static DISTANCE_BETWEEN_WAVES = 2;

  constructor(x, y, amp, period) {
    this.x = x;
    this.y = y;
    this.selected = false;

    this.numWaves = x;
    this.numWaves = map(this.numWaves, 0, height, 4, 30);

    this.periodIncrement = y;
    this.periodIncrement = map(this.periodIncrement, 0, width, 0.3, -0.3);

    this.distanceBetweenWaves = 10;

    this.paramY = ParameterDot.NUM_WAVES;
    this.paramX = ParameterDot.PERIOD_INCREMENT;
  }

  update() {
    if (this.selected) {
      if (0 < mouseX && mouseX < width) {
        this.x = mouseX;
      }
      if (0 < mouseY && mouseY < height) {
        this.y = mouseY;
      }

      switch (this.paramX) {
        case ParameterDot.NUM_WAVES:
          this.numWaves = this.x;
          break;
        case ParameterDot.PERIOD_INCREMENT:
          this.periodIncrement = this.x;
          break;
        case ParameterDot.DISTANCE_BETWEEN_WAVES:
          this.distanceBetweenWaves = this.x;
          break;
      }
      switch (this.paramY) {
        case ParameterDot.NUM_WAVES:
          this.numWaves = this.y;
          break;
        case ParameterDot.PERIOD_INCREMENT:
          this.periodIncrement = this.y;
          break;
        case ParameterDot.DISTANCE_BETWEEN_WAVES:
          this.distanceBetweenWaves = this.y;
          break;
      }
      this.numWaves = map(this.numWaves, 0, height, 4, 30);
      this.periodIncrement = map(this.periodIncrement, 0, width, 0.3, -0.3);
      this.distanceBetweenWaves = map(this.distanceBetweenWaves, 0, height, 2, 50);

      // this.numWaves = round(this.numWaves);
      // this.periodIncrement = round(this.periodIncrement);
      // this.distanceBetweenWaves = round(this.distanceBetweenWaves);
    }
  }

  show() {
    ellipse(this.x, this.y, 10);
  }
}
