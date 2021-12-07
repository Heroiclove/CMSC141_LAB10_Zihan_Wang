let capture;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(0);
  let a = capture.get(0, 0, 320, 240);
  a.filter(INVERT);
  image(a, 0, 0, width / 2, height / 2);

  let b = capture.get(320, 0, 320, 480);
  b.filter(THRESHOLD);
  image(b, 320, 0);

  let c = capture.get(0, 240, 320, 480);
  c.filter(THRESHOLD);
  image(c, 0, 240);

  let d = capture.get(320, 240, 320, 480);
  d.filter(INVERT);
  image(d, 320, 240);
}
