var movingrect;
var fixedrect




function setup() {
createCanvas(800,400);
 fixedrect = createSprite(200,200,60,40)
 fixedrect.velocityX = 5;
 fixedrect.shapeColor = "green";
 movingrect = createSprite(600,200,40,60)
 movingrect.velocityX = -5;
 movingrect.shpeColor = "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  
  bounceOff(movingrect,fixedrect);
}
