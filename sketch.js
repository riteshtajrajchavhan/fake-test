


function preload(){
  backImg=loadImage("background.png");
  benImg=loadAnimation("ben.png","hero.png","player.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  back=createSprite(windowWidth/2+290*3,windowHeight/2);
 back.addImage(backImg);
 back.scale=2.9;
 back.velocityX=-10;

player=createSprite(windowWidth/2-400,windowHeight/2+200);
player.addAnimation("runing",benImg);
player.scale=1.0;

wall=createSprite(windowWidth/2-400,windowHeight/2+300,300,10);
wall.visible=false;

}



function draw() {
  background("pink");  
  drawSprites();

if(back.x<0){
  back.x=windowWidth/2+290*3;
}


if(keyDown("space") && player.y > windowHeight/2+200) {
  player.velocityY = -20;
}
if(touches.length > 0 &&  player.y > windowHeight/2+200) {
       player.velocityY = -20;
       touches = [];
    }
player.velocityY=player.velocityY+0.8;

player.collide(wall);

}
