function setup() {
  ////////////////// Working with the DOM (not used for this OpenProcessing project) ///////////////////
  var canvas = createCanvas(WEBGL);
  canvas.parent('project-container');
  resizeCanvas(document.getElementById('project-container').clientWidth, document.getElementById('project-container').clientWidth);
  background(230);

  var waves = [];
  for (let i = 0; i < 30; i++) {
    waves.push(new Wave(0, 10 + i * 8, 10, 5 + i * -0.1));
  }

  for (var wave of waves) {
    wave.show();
  }
}
