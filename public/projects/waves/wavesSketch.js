var parameterDot;

function setup() {
  ////////////////// Working with the DOM (not used for this OpenProcessing project) ///////////////////
  var canvas = createCanvas(WEBGL);
  canvas.parent('project-container');
  resizeCanvas(document.getElementById('project-container').clientWidth, document.getElementById('project-container').clientWidth);
  parameterDot = new ParameterDot(round(width / 2), 140);
}

function draw() {
  background(230);
  // frameRateDiv.innerHTML = 'Frame Rate: ' + Math.round(frameRate());

  var waves = [];
  // var numWaves = map(mouseX, 0, width, 0, 100);
  // var numWaves = 100;
  var periodIncrement = map(parameterDot.x, 0, width, 0.3, -0.3);
  var numOfWaves = map(parameterDot.y, 0, height, 10, 30);
  for (let i = 0; i < numOfWaves; i++) {
    waves.push(new Wave(0, 10 + i * 8, 10, 5 + i * periodIncrement));
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
  var xvalue = round(map(parameterDot.x, 0, width, 0, 100));
  param_numWavesFill.style.width = `${xvalue}%`;
  param_numWavesText.textContent = `${xvalue}%`;

  var yvalue = round(map(parameterDot.y, 0, height, 0, 100));
  param_wavePeriodFill.style.width = `${yvalue}%`;
  param_wavePeriodText.textContent = `${yvalue}%`;
  // console.log('"' + value + '"');
  // progressBar.querySelector('.progress__text').textContent = `${parameterDot.x}%`;
}
