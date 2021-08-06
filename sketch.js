var bg ;
var allPlayers
var character


function preload(){
bg = loadImage("bgimg1.jpg");
character= loadImage("ch 1.png");
}

function setup() {
  createCanvas(1000,700);
  win=createSprite(100,550,10,80);
  win.addImage(character)
 
 
}

function draw() {
  background(bg);

  



  drawSprites();
}