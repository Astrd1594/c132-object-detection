function preload(){
    img = loadImage('lamp.jpg');
}
function setup(){
    canvas = createCanvas(450, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('lampstatus').innerHTML = 'Status: detecting image...';
}
function modelLoaded(){
    console.log('CocoSSD model loaded!');
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 450, 600);
    fill('#6a0dad');
    text('lamp', 45, 75);
    noFill();
    stroke('#6a0dad');
    rect(125, 60, 400);
}