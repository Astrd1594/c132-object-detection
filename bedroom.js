function preload(){
    img = loadImage('bed.jpg');
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('bedroomstatus').innerHTML = 'Status: detecting object...'
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
    image(img, 0, 0, 800, 600);
    fill('#6a0dad');
    text('bed', 45, 175);
    noFill();
    stroke('#6a0dad');
    rect(125, 200, 450);
}