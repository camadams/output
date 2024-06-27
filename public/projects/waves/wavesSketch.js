var parameterDot;
const SELECTED_COLOR = "bg-sky-200";

function setup() {
  ////////////////// Working with the DOM (not used for this OpenProcessing project) ///////////////////
  var canvas = createCanvas(WEBGL);
  canvas.parent("project-container");
  resizeCanvas(document.getElementById("project-container").clientWidth, document.getElementById("project-container").clientWidth);
  parameterDot = new ParameterDot(round(width / 2), round(height / 2));
  initProgressBar();
}
function draw() {
  frameRateDiv.innerHTML = "Frame Rate: " + Math.round(frameRate());
  background(230);
  var ySpacing = height / (parameterDot.numWaves + 1);
  var ampIncrement = parameterDot.maxAmp / (parameterDot.numWaves - 1);
  for (let i = 0; i < parameterDot.numWaves; i++) {
    // var wave = new Wave(0, ySpacing * (i + 1), 5 + i * ampIncrement, 5 + i * parameterDot.periodIncrement);
    var wave = new Wave(parameterDot, i);
    wave.show();
  }
  parameterDot.update();
  parameterDot.show();
  updateProgressBar();
}
function windowResized() {
  resizeCanvas(document.getElementById("project-container").clientWidth, document.getElementById("project-container").clientWidth);
}
function mousePressed() {
  if (dist(mouseX, mouseY, parameterDot.x, parameterDot.y) < 8) {
    parameterDot.selected = true;
    // parameterDot.selected = !parameterDot.selected;
  }
}

function mouseReleased() {
  parameterDot.selected = false;
}

function updateProgressBar() {
  var yValuePercentage = round(map(parameterDot.y, 0, height, 0, 100));
  var xValuePercentage = round(map(parameterDot.x, 0, width, 0, 100));
  switch (parameterDot.paramY) {
    case ParameterDot.NUM_WAVES:
      numWavesFill.style.width = `${yValuePercentage}%`;
      numWavesText.textContent = `${yValuePercentage}%`;
      break;
    case ParameterDot.PERIOD_INCREMENT:
      periodFill.style.width = `${yValuePercentage}%`;
      periodText.textContent = `${yValuePercentage}%`;
      break;
    case ParameterDot.MAX_AMP:
      maxAmpFill.style.width = `${yValuePercentage}%`;
      maxAmpText.textContent = `${yValuePercentage}%`;
      break;
  }

  switch (parameterDot.paramX) {
    case ParameterDot.NUM_WAVES:
      numWavesFill.style.width = `${xValuePercentage}%`;
      numWavesText.textContent = `${xValuePercentage}%`;
      break;
    case ParameterDot.PERIOD_INCREMENT:
      periodFill.style.width = `${xValuePercentage}%`;
      periodText.textContent = `${xValuePercentage}%`;
      break;
    case ParameterDot.MAX_AMP:
      maxAmpFill.style.width = `${xValuePercentage}%`;
      maxAmpText.textContent = `${xValuePercentage}%`;
      break;
  }
  // if (parameterDot.paramY === ParameterDot.DISTANCE_BETWEEN_WAVES) {
  //   distanceBetweenWavesFill.style.width = `${yValuePercentage}%`;
  //   distanceBetweenWavesText.textContent = `${yValuePercentage}%`;
  // } else if (parameterDot.paramY === ParameterDot.NUM_WAVES) {
  //   numWavesFill.style.width = `${yValuePercentage}%`;
  //   numWavesText.textContent = `${yValuePercentage}%`;
  // } else if (parameterDot.paramY === ParameterDot.PERIOD_INCREMENT) {
  //   periodFill.style.width = `${yValuePercentage}%`;
  //   periodText.textContent = `${yValuePercentage}%`;
  // }
  // var xvalue = round(map(parameterDot.x, 0, width, 0, 100));
  // periodFill.style.width = `${xvalue}%`;
  // periodText.textContent = `${xvalue}%`;

  // var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  // periodFill.style.width = `${yvalue}%`;
  // periodText.textContent = `${yvalue}%`;

  // var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  // periodFill.style.width = `${yvalue}%`;
  // periodText.textContent = `${yvalue}%`;
  // console.log('"' + value + '"');
  // progressBar.querySelector('.progress__text').textContent = `${parameterDot.x}%`;
}

function clickedOnParameter(id) {
  var oldParamId = "";
  var selectedParameter = id.slice(0, -1);
  var isXParam = id.slice(-1) === "X";

  if (isXParam) {
    if (selectedParameter === parameterDot.paramY) return;
    oldParamId = parameterDot.paramX + "X";
    parameterDot.paramX = selectedParameter;
    switch (selectedParameter) {
      case ParameterDot.NUM_WAVES:
        parameterDot.x = map(parameterDot.numWaves, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX, 0, width);
        break;
      case ParameterDot.PERIOD_INCREMENT:
        parameterDot.x = map(parameterDot.periodIncrement, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX, 0, width);
        break;
      case ParameterDot.MAX_AMP:
        parameterDot.x = map(parameterDot.maxAmp, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX, 0, width);
        break;
    }
  } else {
    if (selectedParameter === parameterDot.paramX) return;
    oldParamId = parameterDot.paramY + "Y";
    parameterDot.paramY = selectedParameter;
    switch (selectedParameter) {
      case ParameterDot.NUM_WAVES:
        parameterDot.y = map(parameterDot.numWaves, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX, 0, height);
        break;
      case ParameterDot.PERIOD_INCREMENT:
        parameterDot.y = map(parameterDot.periodIncrement, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX, 0, height);
        break;
      case ParameterDot.MAX_AMP:
        parameterDot.y = map(parameterDot.maxAmp, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX, 0, height);
        break;
    }
  }

  var oldParam = document.getElementById(oldParamId);
  oldParam.className = oldParam.className.replace(SELECTED_COLOR, "");

  var newParam = document.getElementById(id);
  newParam.className += " " + SELECTED_COLOR;
}

function initProgressBar() {
  var numWavesPercentage = round(map(parameterDot.numWaves, ParameterDot.NUM_WAVES_MIN, ParameterDot.NUM_WAVES_MAX, 0, 100));
  numWavesFill.style.width = `${numWavesPercentage}%`;
  numWavesText.textContent = `${numWavesPercentage}%`;

  var periodPercentage = round(map(parameterDot.periodIncrement, ParameterDot.PERIOD_INCREMENT_MIN, ParameterDot.PERIOD_INCREMENT_MAX, 0, 100));
  periodFill.style.width = `${periodPercentage}%`;
  periodText.textContent = `${periodPercentage}%`;

  var maxAmpPercentage = round(map(parameterDot.maxAmp, ParameterDot.MAX_AMP_MIN, ParameterDot.MAX_AMP_MAX, 0, 100));
  maxAmpFill.style.width = `${maxAmpPercentage}%`;
  maxAmpText.textContent = `${maxAmpPercentage}%`;
}
