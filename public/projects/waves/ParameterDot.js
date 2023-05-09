const DECIMAL_PLACES = 3;
class ParameterDot {
  static NUM_WAVES = 'numWaves';
  static NUM_WAVES_MIN = 1;
  static NUM_WAVES_MAX = 100;

  static PERIOD_INCREMENT = 'period';
  static PERIOD_INCREMENT_MIN = -0.3;
  static PERIOD_INCREMENT_MAX = 0.3;

  static MAX_AMP = 'maxAmp';
  static MAX_AMP_MIN = 5;
  static MAX_AMP_MAX = 150;

  constructor(x, y, amp, period) {
    this.x = x;
    this.y = y;
    this.selected = false;

    this.numWaves = x;
    this.numWaves = map(this.numWaves, 0, height, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX);

    this.periodIncrement = y;
    this.periodIncrement = map(this.periodIncrement, 0, width, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX);
    this.distanceBetweenWaves = 10;

    this.maxAmp = 60;
    // this.maxAmp = map(this.maxAmp, 0, width, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX);

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
          this.numWaves = round(map(this.x, 0, width, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX), DECIMAL_PLACES);
          break;
        case ParameterDot.PERIOD_INCREMENT:
          this.periodIncrement = round(map(this.x, 0, width, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX), DECIMAL_PLACES);
          break;
        case ParameterDot.MAX_AMP:
          this.maxAmp = round(map(this.x, 0, width, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX), DECIMAL_PLACES);
          break;
      }

      switch (this.paramY) {
        case ParameterDot.NUM_WAVES:
          this.numWaves = round(map(this.y, 0, height, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX), DECIMAL_PLACES);
          break;
        case ParameterDot.PERIOD_INCREMENT:
          this.periodIncrement = round(map(this.y, 0, height, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX), DECIMAL_PLACES);
          break;
        case ParameterDot.MAX_AMP:
          this.maxAmp = round(map(this.y, 0, height, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX), DECIMAL_PLACES);
          break;
      }
    }
  }

  show() {
    fill(255, 0, 0, 150);
    ellipse(this.x, this.y, 7);
    if (this.selected) {
      fill(255, 0, 0, 80);
      ellipse(this.x, this.y, 15);
    }
  }
}
