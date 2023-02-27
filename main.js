Harry_Potter_song="";
Peter_pan_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_Potter_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}