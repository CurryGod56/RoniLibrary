var fixedRect, movingRect;
var gameObject1, movingObject2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  gameObject1 = createSprite(600,500,50,50);
  gameObject1.shapeColor = "blue";
  movingObject2 = createSprite(500,400,50,50);
  movingObject2.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

bounceoff(movingRect,fixedRect);
movingObject2.x = mouseX;
movingObject2.y = mouseY;

if(isTouching(gameObject1,movingObject2)){
  gameObject1.shapeColor = "red";
  movingObject2.shapeColor = "red";
}
else{
  gameObject1.shapeColor = "blue";
  movingObject2.shapeColor = "blue";
}
  
  drawSprites();
}



