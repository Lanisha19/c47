var ground;
var coin, obstacle;
var player;
var coin1Img, coin2Img, coin3Img, coin4Img, coin5Img;
var obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img;
var botLImg, botRImg, playerLImg, playerRImg;
var bg;
var scoreUp, scoreDown, result;
var score;
var life;

var PLAY;
var END;
var gameState=PLAY;

var coinGroup, obstacleGroup;

function preload(){
  coin1Img = loadImage("coin1.png");
  coin2Img = loadImage("coin2.png");
  coin3Img = loadImage("coin3.png");
  coin4Img = loadImage("coin4.png");
  coin5Img = loadImage("coin5.png");

  obstacle1Img = loadImage("obstacle1D.png");
  obstacle2Img = loadImage("obstacle2SDG.png");
  obstacle3Img = loadImage("obstacle3SDG.png");
  obstacle4Img = loadImage("obstacle4SDG.png");
  obstacle5Img = loadImage("obstacle5SDG.png");

  botLImg = loadImage("botLeft.png");
  botRImg = loadImage("botRight.png");

  playerLImg = loadImage("girlLeft.png");
  playerRImg = loadImage("girlRight.png");

  bg = loadImage("bgSDG.jpg");

  //scoreUp = loadSound("scoreUp.wav");
  //scoreDown = loadSound("scoreDown.wav");
  //result = loadSound("result.wav");

}

function setup(){
  createCanvas(800, 500);

  ground = createSprite(400, 480, 800, 20);
  ground.shapeColor = "red";

  player = createSprite(400, 430, 50, 50);
  player.shpaeColor = "yellow";
  player.addImage("left", playerLImg);
  player.scale = 0.3;

  score=0;
  life=3;

  coinGroup = new Group();
  obstacleGroup = new Group();
}

function draw(){
  background(bg);

  if(gameState===PLAY){

    if(keyDown(LEFT_ARROW)){
      player.x-=5;
    }

    if(keyDown(RIGHT_ARROW)){
      player.x+=5;
      player.changeImage(playerRImg);
      player.scale = 0.3;
    }

    Coin();
    Obstacle();

    if(obstacleGroup.isTouching(player)){
      life=life-1;
    }
    if(life===0 && gameState===PLAY){
      gameState=END;
    }

  }else if(gameState===END){
    console.log("game ended");
  }

  drawSprites();

  textSize(20);
  fill("black");
  text("Score : "+score, 700, 30);

  textSize(20);
  fill("black");
  text("Life : "+score, 700, 80);

 
}

function Coin(){
  if(frameCount % 60===0){
    var rand = Math.round(random(1,5));
    coin = createSprite(100, 50, 20, 20);
    switch (rand) {
      case 1: coin.addImage("coin1", coin1Img);
      coin.scale = 0.3;
        break;
      case 2: coin.addImage("coin2", coin2Img);
      coin.scale = 0.099;
        break;
      case 3: coin.addImage("coin3", coin3Img);
      coin.scale = 0.099;
       break;
       case 4: coin.addImage("coin4", coin4Img);
       coin.scale = 0.3;
       break;
       case 5: coin.addImage("coin5", coin5Img);
       coin.scale = 0.2;
      default:
        break;
    }
    console.log(rand);

    coin.shapeColor = "blue";
    coin.velocityY=2;
    coin.x = Math.round(random(50, 750));
    coin.lifetime=250;

    coinGroup.add(coin);
  }

}

function Obstacle(){
  if(frameCount % 100===0){
    var rand=Math.round(random(1,5));
    obstacle = createSprite(100, 50, 20, 30);
    switch (rand) {
      case 1: obstacle.addImage("obstacle5", obstacle1Img);
              obstacle.scale = 0.1;
              break;
      case 2: obstacle.addImage("obstacle4", obstacle2Img);
              obstacle.scale = 0.1;
              break;
      case 3: obstacle.addImage("obstacle3", obstacle3Img);
              obstacle.scale = 0.1;
              break;
      case 4: obstacle.addImage("obstacle2", obstacle4Img);
              obstacle.scale = 0.1;
              break;
      case 5: obstacle.addImage("obstacle1", obstacle5Img);
              obstacle.scale = 0.1;
      default:break;
    }
    obstacle.shapeColor = "red";
    obstacle.velocityY=2;
    obstacle.x=Math.round(random(50, 750));
    obstacle.lifetime=250;
    obstacleGroup.add(obstacle);
  }
}