let img;
let words;

let theText;

let c;

let pos = 1;

let spacing = 50;

let rotSpeed = 120000; // higher number means slower rotation
let rotSpeed2 = rotSpeed * 2;
let rotSpeed3 = rotSpeed / 2;
let factor = 30; // higher means less movement

let kawingan_font;

// Set these to true to enable clear and save functionality
let toggle_clear = false;
let toggle_save = false;


function preload(){
  // Load all of our images
  img = loadImage("output_670.png");

  img1 = loadImage("output_670.png");
  img2 = loadImage("output_670_2.png");
  img3 = loadImage("output_670_3.png");
  img4 = loadImage("output_670_4.png");
  img5 = loadImage("output_670_5.png");
  img6 = loadImage("output_670_6.png");


  
  kawingan_font = loadFont('Kawingan-Regular.otf');
}

function setup() {
  c = createCanvas(displayWidth, displayHeight, WEBGL);
  background(150);
  noStroke();
  
  // get the text contents from html element
  // theText = document.getElementById('words').innerHTML;
  
  // words = createGraphics(window.innerWidth - 4, window.innerHeight - 4);
  // words.textFont(kawingan_font);
  // words.textAlign(CENTER);
  // words.textSize(133);
  // words.fill(3, 7, 11);
  // words.noStroke();
  // words.text(theText, width * 0.5, height * 0.5);

    
   describe(
    'Pixels of earth tone colors smear slowly across the screen in a rotating pattern behind the main text of the poem. Scrolling shifts the direction and speed of the swimming colors and typed keystrokes cause dramatic shifts in the colors getting painted to the screen.'
  );
}



function draw(){
  
 


	push();
	translate(100, 100, spacing * 10);
	rotateY(millis() / rotSpeed);
  rotateX(millis() / rotSpeed);
  rotateZ(millis() / rotSpeed3);
  //rotateY(mouseY / rotSpeed);
  //rotateZ(mouseX / rotSpeed3);
	rotateX(pos / rotSpeed3);
	rotateY(pos / rotSpeed3);
	rotateZ(pos / rotSpeed3);
  texture(img);
  plane(img.width, img.height);
	pop();
  
  
}

function mouseWheel(event) {
  pos += event.delta * 2;
  //uncomment to block page scrolling
  //return false;
}

function keyTyped() {

  // Capture key strokes and associate them with different image layers
  if (key === 'q') {
    pos += rotSpeed / factor;
    img = img1;
  } else if (key === 'w') {
    pos -= rotSpeed / factor;
    img = img1;
  } else if (key === 'e') {
    pos -= rotSpeed / factor;
    img = img3;
  } else if (key === 'r') {
    pos -= rotSpeed / factor;
  } else if (key === 't') {
    pos += rotSpeed / factor;
    img = img1;
  } else if (key === 'y') {
    pos += rotSpeed / factor;
    img = img2;
  } else if (key === 'u') {
    pos += rotSpeed / factor;
    img = img3;
  } else if (key === 'i') {
    img = img1;
  } else if (key === 'o') {
    img = img4;
  } else if (key === 'p') {
    pos += rotSpeed / factor;
    img = img4;
  } else if (key === 'a') {
    pos -= rotSpeed / factor;
    img = img1;
  } else if (key === 's') {
    img = img5;
  } else if (key === 'd') {
    pos += rotSpeed / factor;
    img = img5;
  } else if (key === 'f') {
    pos -= rotSpeed / factor;
    img = img5;
  } else if (key === 'g') {
    img = img6;
  } else if (key === 'h') {
    pos += rotSpeed / factor;
    img = img6;
  } else if (key === 'j') {
    pos -= rotSpeed / factor;
    img = img6;
  } else if (key === 'k') {
    pos += rotSpeed / factor;
    img = img1;
  } else if (key === 'l') {
    pos += rotSpeed / factor;
    img = img2;
  } else if (key === 'z') {
    pos += rotSpeed / factor;
    img = img1;
  } else if (key === 'x') {
    pos += rotSpeed / factor;
    img = img2;
  } else if (key === 'c') {
    pos += rotSpeed / factor;
    img = img6;
  } else if (key === 'v') {
    pos += rotSpeed / factor;
    img = img4;
  } else if (key === 'b') {
    pos += rotSpeed / factor;
    img = img5;
  } else if (key === 'n') {
    pos += rotSpeed / factor;
    img = img3;
  } else if (key === 'm') {
    pos -= rotSpeed / factor;
    img = img1;
  }


  // uncomment to prevent any default behavior
  return false;
}

// Press any key to clear
function keyPressed(){
  //background(100);
  if(toggle_save == true){
    saveCanvas(c, 'myCanvas', 'png');
  }

}


// Press and release mouse to save snapshot of canvas
function mouseReleased(){
  if(toggle_clear == true){
    background(175);
  } 
}


 