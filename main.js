noseX=0;
noseY=0;

function preload() {
    bigode=loadImage('bigode.png');
}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.position(500, 180);
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.position(500, 180);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y+8;
        console.log("noseX= "+results[0].pose.nose.x);
        console.log("noseY= "+results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(bigode, noseX, noseY, 70, 20);
}

function takeSnapshot() {
    save('mySelfie.png');
}