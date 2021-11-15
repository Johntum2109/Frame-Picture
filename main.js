// Upload Assets
function preload() {}

// Setup
function setup() 
{ 
    // Canvas
    canvas = createCanvas(600, 480);
    canvas.center();

    // Video
    video = createCapture(VIDEO); // Webcam Access
    video.hide();
}

function draw() 
{ 
    
    image(video, 120, 125, 350, 225);
    ellipse(50, 50, 80, 80);
    ellipse(50, 430, 80, 80);
    ellipse(555, 50, 80, 80);
    ellipse(555, 430, 80, 80);
    fill("red");
}