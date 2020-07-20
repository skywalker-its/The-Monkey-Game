//Global Variables
var monkey,monkey_Animation;
var banana,bananaImage,stone,stoneImage;
var jungle,jungleImage;
var gameOver,gameOverImage,restart,restartImage;

var score;
var stone,stoneImage

var foodGroup,obstacleGroup;

var invisibleGround;

function preload(){
  
  monkey_Animation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaImage = loadImage("Banana.png");
stoneImage = loadImage("stone.png");
jungleImage = loadImage("jungle.jpg");
GroundImage = loadImage("ground.jpg");

GameOverImage = loadImage("gameOver.png");
restartImage = loadImage("restart.png");
  
stoneImage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(600,300);
  
  score = 0;

  foodGroup = new Group();
  obstacleGroup = new Group();
  
  jungle = createSprite(300,50,300,350);
  jungle.addImage("backGround",jungleImage);
  jungle.scale = 1.3;
  jungle.x = jungle.width/2;
  jungle.velocityX = -6;
  
  monkey=createSprite(50,250,10,10);
  monkey.addAnimation("Animation",monkey_Animation);
  monkey.scale = 0.1;
  
  invisibleGround = createSprite(300,265,600,10);
  invisibleGround.visible = false;
   
  stroke("red"); 
  textSize(30);
  textFont("Georgia");
  fill("red");
   
}

function draw(){
 background(255); 
  
  if(jungle.x<0){
    jungle.x = jungle.width/2;   
  }

  //console.log(monkey.y);

  if(foodGroup.isTouching(monkey)){
    score++;
    foodGroup.destroyEach();
  }   
              
  switch(score){
          
 }
  
   if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.1;
 }


  food();
  obstacles();
  
  monkey.collide(invisibleGround);

  if(keyDown("space")&&monkey.y>=215){
     monkey.velocityY = -13;     
  }
  monkey.velocityY = monkey.velocityY+0.6
  
  drawSprites(); 
       text("Score: " + score,450,50);
}

function food(){
  if(frameCount % 200 === 0){
     
     banana = createSprite(650,150,10,10);
     banana.addImage("food",bananaImage);
     var ran = Math.round(random(1,1));
     banana.scale = 0.05;
     banana.velocityX = -5;
     banana.lifetime = 200;
     
     banana.depth = monkey.depth;
     monkey.depth = monkey.depth+1;
     
    foodGroup.add(banana);
  }
} 

function obstacles()
{
  if(frameCount % 100 === 0){
     stone = createSprite(600,235,10,10);
     stone.addImage("obstacle",stoneImage);
    var rand = Math.round(random(1,1));
     stone.scale = 0.2;
     stone.velocityX = -7;
    
    stone.lifetime = 200;
    
    stone.depth = monkey.depth;
    monkey.depth = monkey.depth+1;
     
    stone.setCollider("rectangle",0,0,300,300);
  //  stone.debug = true;
    
   obstacleGroup.add(stone)  
  }
}
