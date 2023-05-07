var parameterDot;

function setup() {
  ////////////////// Working with the DOM (not used for this OpenProcessing project) ///////////////////
  var canvas = createCanvas(WEBGL);
  canvas.parent('project-container');
  resizeCanvas(document.getElementById('project-container').clientWidth, document.getElementById('project-container').clientWidth);
  parameterDot = new ParameterDot(round(width / 2), 140);
  updateProgressBar();
  // var waves = [];

  // for (let i = 0; i < parameterDot.numWaves; i++) {
  //   waves.push(new Wave(0, parameterDot.distanceBetweenWaves + i * 8, 10, 5 + i * parameterDot.periodIncrement));
  // }
  // for (var wave of waves) {
  //   wave.show();
  // }
  var q = 33;
  param_distanceBetweenWavesFill.style.width = `${q}%`;
  param_distanceBetweenWavesText.textContent = `${q}%`;
}
function draw() {
  frameRateDiv.innerHTML = 'Frame Rate: ' + Math.round(frameRate());

  background(230);
  // frameRateDiv.innerHTML = 'Frame Rate: ' + Math.round(frameRate());

  var waves = [];
  // var numWaves = map(mouseX, 0, width, 0, 100);
  // var numWaves = 100;
  // var periodIncrement = map(parameterDot.paramX, 0, width, 0.3, -0.3);
  // var numOfWaves = map(parameterDot.y, 0, height, 10, 30);
  // var distanceBetweenWaves = map(parameterDot.y, 0, height, 10, 30);
  for (let i = 0; i < parameterDot.numWaves; i++) {
    waves.push(new Wave(0, parameterDot.distanceBetweenWaves + i * 8, 10, 5 + i * parameterDot.periodIncrement));
  }

  for (var wave of waves) {
    wave.show();
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
  const x = [1, 2, 4];

  var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  if (parameterDot.paramY === ParameterDot.DISTANCE_BETWEEN_WAVES) {
    param_distanceBetweenWavesFill.style.width = `${yvalue}%`;
    param_distanceBetweenWavesText.textContent = `${yvalue}%`;
  } else if (parameterDot.paramY === ParameterDot.NUM_WAVES) {
    param_numWavesFill.style.width = `${yvalue}%`;
    param_numWavesText.textContent = `${yvalue}%`;
  } else if (parameterDot.paramY === ParameterDot.PERIOD_INCREMENT) {
    param_wavePeriodFill.style.width = `${yvalue}%`;
    param_wavePeriodText.textContent = `${yvalue}%`;
  }
  var xvalue = round(map(parameterDot.x, 0, width, 0, 100));
  param_wavePeriodFill.style.width = `${xvalue}%`;
  param_wavePeriodText.textContent = `${xvalue}%`;

  // var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  // param_wavePeriodFill.style.width = `${yvalue}%`;
  // param_wavePeriodText.textContent = `${yvalue}%`;

  // var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  // param_wavePeriodFill.style.width = `${yvalue}%`;
  // param_wavePeriodText.textContent = `${yvalue}%`;
  // console.log('"' + value + '"');
  // progressBar.querySelector('.progress__text').textContent = `${parameterDot.x}%`;
}

function clickedOnParameter(id, yParam) {
  console.log(id);
  if (yParam) {
    if (id === 'param_numWavesFill') {
      parameterDot.paramY = ParameterDot.NUM_WAVES;
    } else if (id === 'param_wavePeriodFill') {
      parameterDot.paramY = ParameterDot.PERIOD_INCREMENT;
    } else if (id === 'param_distanceBetweenWavesFill') {
      parameterDot.paramY = ParameterDot.DISTANCE_BETWEEN_WAVES;
    }
  } else {
    if (id === 'param_numWavesFill') {
      parameterDot.paramX = ParameterDot.NUM_WAVES;
    } else {
    }
  }
}
