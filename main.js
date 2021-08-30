// Upload Assets
function preload() {}

// Setup
function setup() 
{ 
    // Canvas
    var canvas = createCanvas(600, 480);

    // Video
    var video = createCapture(VIDEO); // Webcam Access
    
}

function draw() 
{ 
    image(video, 0, 0, 1200, 480);
    ellipse(100, 100, 80, 80);
    fill("red");
}