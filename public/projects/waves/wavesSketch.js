var parameterDot;
const SELECTED_COLOR = 'bg-sky-200';

function setup() {
  ////////////////// Working with the DOM (not used for this OpenProcessing project) ///////////////////
  var canvas = createCanvas(WEBGL);
  canvas.parent('project-container');
  resizeCanvas(document.getElementById('project-container').clientWidth, document.getElementById('project-container').clientWidth);
  parameterDot = new ParameterDot(round(width / 2), 140);
  updateProgressBar();
}
function draw() {
  frameRateDiv.innerHTML = 'Frame Rate: ' + Math.round(frameRate());
  background(230);
  var ySpacing = height / (parameterDot.numWaves + 1);
  for (let i = 0; i < parameterDot.numWaves; i++) {
    new Wave(0, ySpacing * (i + 1), 10, 5 + i * parameterDot.periodIncrement).show();
  }
  parameterDot.update();
  parameterDot.show();
  updateProgressBar();
}

function mousePressed() {
  if (dist(mouseX, mouseY, parameterDot.x, parameterDot.y) < 5) {
    parameterDot.selected = true;
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
    case ParameterDot.DISTANCE_BETWEEN_WAVES:
      distanceBetweenWavesFill.style.width = `${yValuePercentage}%`;
      distanceBetweenWavesText.textContent = `${yValuePercentage}%`;
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
    case ParameterDot.DISTANCE_BETWEEN_WAVES:
      distanceBetweenWavesFill.style.width = `${xValuePercentage}%`;
      distanceBetweenWavesText.textContent = `${xValuePercentage}%`;
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
  var oldParamId = '';
  var selectedParameter = id.slice(0, -1);
  if (id.slice(-1) === 'X') {
    // if (selectedParameter === parameterDot.paramY) return;
    oldParamId = parameterDot.paramX + 'X';
    parameterDot.paramX = selectedParameter;
  } else {
    // if (selectedParameter === parameterDot.paramX) return;
    oldParamId = parameterDot.paramY + 'Y';
    parameterDot.paramY = selectedParameter;
  }

  var oldParam = document.getElementById(oldParamId);
  oldParam.className = oldParam.className.replace(SELECTED_COLOR, '');

  var newParam = document.getElementById(id);
  newParam.className += ' ' + SELECTED_COLOR;
}
