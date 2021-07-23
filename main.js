function preload(){}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video,230,150,220,200);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);

fill(0,255,0);
stroke(0,255,0);
rect(90,30,450,30);

fill(255,0,0);
stroke(255,0,0);
circle(575,50,80);

fill(0,255,0);
stroke(0,255,0);
rect(565,90,30,380);

fill(255,0,0);
stroke(255,0,0);
circle(575,440,80);

fill(0,255,0);
stroke(0,255,0);
rect(85,434,450,30);

fill(255,0,0);
stroke(255,0,0);
circle(50,440,80);

fill(0,255,0);
stroke(0,255,0);
rect(40,90,30,310);
}

function take_snapshot(){
    save("frameclicker.png")
}