function preload(){
    img = loadImage('banana.jpg');
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("bananastatus").innerHTML = "Status: detecting object...";
}
function modelLoaded(){
    console.log('CocoSSd model loaded!');
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(results, error){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 800, 600);
    fill('#6a0dad');
    text('banana', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 400);
}