
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite  (70,350,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  
  ground = createSprite(400,350,900,20);
  ground.velocityX = -4;
  ground.x = ground.width/2

  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup=  new Group();
  
  survivalTime = 0;

  
}


function draw() {
  background  ("white");
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime :"+survivalTime,200,50)
  
  if(obstacleGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
    ground.velocityX = 0;
    monkey.velocityY=0;

     }
  
if(keyDown("space")){
  monkey.velocityY = -12 ;
}
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if(ground.x/2){
    ground.x = 200;
    monkey.collide(ground);
    
  }
  obstacles();
  bananas();
  drawSprites();
  
  
  
}

function bananas(){
  if(World.frameCount%80===0){ 
    banana = createSprite(350,200,20,20)
    banana.addImage(bananaImage);
    banana.scale= 0.1;
    banana.y = Math.round(random(120,200))
    banana.velocityX = -8;
    banana.setLifetime = 200;
    
    bananaGroup.add(banana);
    
  
  }
}

function obstacles(){
  if(World.frameCount%20===0){ 
    obstacle = createSprite(400,325,100,100)
    obstacle.addImage(obstaceImage);
    obstacle.scale= 0.1;
    obstacle.x = Math.round(random(200,400))
    obstacle.velocityX = -8;
    obstacle.setLifetime = 200;
    obstacleGroup.add(obstacle);
  
  }
}