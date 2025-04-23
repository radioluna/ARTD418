/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let pMapper;
let quadMap;
let quadMap2;
let myFont;
let img;
let img2;

function preload() {
  img = loadImage("assets/bird.png");
  img2 = loadImage("assets/bird.png");
  myFont = loadFont("assets/Roboto.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(myFont);
 
  // create mapper object
  pMapper = createProjectionMapper(this);
  console.log(this);
  
  quadMap = pMapper.createQuadMap(400, 400);
  quadMap2 = pMapper.createQuadMap(400, 400); 
  
  // loads calibration in the "maps" directory
  pMapper.load("maps/map.json");
}

function draw() {
  background(0);
  displayFrameRate();
 
  quadMap.displayTexture(img);
  quadMap2.displayTexture(img2);
}

function keyPressed() {
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("maps/map.json");
      break;
    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function displayFrameRate() {
  fill(255);
  noStroke();
  text(round(frameRate()), -width / 2 + 15, -height / 2 + 50);
}
