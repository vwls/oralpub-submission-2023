var canvas;

function setup(){
	canvas = createCanvas(500,500);
	canvas.position(50,50);

}

function draw(){
	fill(255);
	ellipse(mouseX, mouseY, 50, 50);

}