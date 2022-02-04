Status = " ";
iv = " ";
function preload(){

}

function setup(){
canvas = createCanvas(420,340);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,420,340);
}


function start(){
    od = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("MS").innerHTML = "Status: Detecting Objects";
iv = document.getElementById("object").value
}

function modelLoaded(){
    console.log("Model Loaded!");
Status = true;
}