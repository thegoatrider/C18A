//global variables
var monkey,monkeyrunning,bananai,banana,obstacle,obstacleimage,obstaclegroup,bg,jungle,jungleimg,invisibleGround,grpb,score,obstaclegroup;

var ground,groundi;
function preload(){
  bg=loadImage("jungle.jpg");
  monkey = loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  groundi=loadImage("ground.jpg");
  bananai = loadImage("Banana.png");
  jungleimg = loadImage("jungle.png");
  obstacleimage = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  //All images loaded below
  jungle=createSprite(300,200,100,100);
  jungle.addImage("bgc",bg);
  jungle.scale= 1.5;
  jungle.x = jungle.width/2;
  jungle.velocityX=-2;

  invisibleGround = createSprite(200,290,600,10);
  invisibleGround.visible = false;
  
  ground=createSprite(200,380,600,20);
  ground.addImage(groundi);
  ground.scale=0.5;

  score = 0; 

  monkeyrunning=createSprite(60,240,30,30);
  monkeyrunning.addAnimation(monkey);
  monkeyrunning.scale= 0.2;
  
  obstaclegroup = new Group();
  grpb = new Group();
  }

function draw(){
 background(255); 
  //Reset jungle
 if(jungle.x<0){
  jungle.x = jungle.width/2;
}
  //Jump monkey
 if(keyDown("space") ) {
    monkeyrunning.velocityY = -5;
  }
  //Adding score and destoying bananas
  if(monkeyrunning.istouching(grpb)){
  score = score + 2;
  grpb.destroyEach();
  }

  if(obstaclegroup.istouching(monkeyrunning)){
    monkeyrunning.scale=0.2;
  }

  //Adding gravity
  monkeyrunning.velocityY = monkeyrunning.velocityY+ 0.1;
  
  //Monkey colliding with the ground
  monkeyrunning.collide(invisibleGround);
  
  //Switch case to increase monkey size
  switch (score) {
      case 10:monkeyrunning.scale=0.25;
      break;
      case 20:monkeyrunning.scale=0.35;
      break;
      case 30:monkeyrunning.scale=0.45;
      break;
      case 40:monkeyrunning.scale=0.55;
      break;
  }
  //All function called
  obstaclegroup1();
  bananagroup();
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function bananagroup(){
  //Function to create bananas for monkey
  banana = createSprite(300,100,20,20);
  banana.addImage(bananai);
  banana.lifetime = 1000;
  grpb.add(banana);
}

function obstaclegroup1(){
  //Function to create obstacles for monkey
  obstacle = createSprite(randomNumber(100,500),240,10,10);
  obstacle.addImage(obstacleimage);
  obstacle.lifetime = 1000;
  obstaclegroup.add(obstacle);
}