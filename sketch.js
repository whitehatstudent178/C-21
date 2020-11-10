var fixedRect, movingRect;
var o1,o2;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(200,200,80,50);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "magenta";
  fixedRect.shapeColor = "magenta";
  
  o1 = createSprite(50, 100, 50, 80);
  o1.shapeColor = "teal";
  o2 = createSprite(50, 800,80,30);
  o2.shapeColor = "indigo";

gameObject1 = createSprite(100,100,50,50);
gameObject2=createSprite (200,100,50,50);
gameObject3=createSprite (300,100,50,50);
gameObject4=createSprite(400,100,50,50);
gameObject1.shapeColor="yellow";
gameObject2.shapeColor="yellow";
gameObject3.shapeColor="yellow";
gameObject4.shapeColor="yellow";

  o2.velocityY = -5;
  o1.velocityY = +3;

}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y=mouseY;

  console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect,gameObject3)){
    fixedRect.shapeColor = "midnightblue";
    gameObject1.shapeColor = "midnightblue";
  }else{
    fixedRect.shapeColor = "magenta";
    gameObject1.shapeColor = "magenta";
  }
  bounceOff();
  drawSprites();
}