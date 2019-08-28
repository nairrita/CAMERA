
var screen;



function setup(){
    createCanvas(400,400);
    background(0);
    screen= createCapture(VIDEO);
    screen.size=(400,400);
    screen.hide();
  
}

function draw(){
   background(0);
     image(screen,0,0);

}