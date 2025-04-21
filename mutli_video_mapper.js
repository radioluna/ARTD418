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

let video;
let video2;

let isPlaying = false;
let isLoaded = false;

let myFont;


function preload() {
    myFont = loadFont('assets/Roboto.ttf');
    video = createVideo(['assets/shell_1.webm']);
    video2 = createVideo(['assets/shell_2.webm']);
    video.hide();
    video2.hide();
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(myFont);

    // Wait for videos to load before creating quad maps
    video.elt.onloadeddata = () => {
        video2.elt.onloadeddata = () => {
            pMapper = createProjectionMapper(this);
            quadMap = pMapper.createQuadMap(video.width, video.height);
            quadMap2 = pMapper.createQuadMap(video2.width, video2.height);
            pMapper.load("maps/map.json");
            isLoaded = true;
        };
    };
}

function draw() {
    background(0);

    displayFrameRate();

    if (isLoaded) {
        if (isPlaying) {
            quadMap.displayTexture(video);
            quadMap2.displayTexture(video2);
        } else {
            fill(255);
            text("click to play", 0, 0);
        }
    } else {
        fill(255);
        text("loading...", 0, 0);
    }
}

function keyPressed() {
    switch (key) {
        case 'c':
            pMapper.toggleCalibration();
            break;
        case 'f':
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case 'l':
            pMapper.load("maps/map.json");
            break;

        case 's':
            pMapper.save("map.json");
            break;
    }
}

function mousePressed() {
    if (isLoaded) {
        isPlaying = true;
        video.loop();
        video2.loop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayFrameRate() {
    fill(255);
    noStroke();
    text(round(frameRate()), -width / 2 + 20, -height / 2 + 20);
}