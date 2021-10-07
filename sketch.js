var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation,playerImage;
var school;
var city,cityAnimation;
var gameState = "play";
function preload()
{
  carAnimation1 = loadAnimation("images/car1.png");
  carAnimation2 =  loadAnimation("images/car2.png");
  playerAnimation = loadAnimation("images/Player-03.png");
  logAnimation = loadAnimation("images/log1.png","images/log2.png");
 cityAnimation = loadAnimation("images/city1.png","images/city2.png");
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  city = createSprite (width/2,-1500);
  city.addAnimation("city",cityAnimation);
  
for (var i=0;i<6;i++){
var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
bottomGrass1.shapecolor="grey";

if (i%2 === 0){
  var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
  road.shapecolor = "black";
}
}
 for (var i = 0;i<40;i++){
  car = new Car (2);
  carGroup1.add(car.spt);
 }
 for (var i = 0;i<40;i++){
  log = new Log (-2);
  logGroup1.add(log.spt);
 }  
 player = new player (width/2,height-25);
 }

function draw() {
  background("skyblue");
 translate (0,-player.spt.y+height-150);



 for (i=1;i<logGroup1.length;i++){
   if(carGroup1[i].x<0){
    carGroup1[i].x = width;
   }
   if(carGroup1[i].x<width){

    carGroup1[i].x=0;
   }
 }
 if (carGroup1.isTouching(player.spt)){
   player.spt.x = width/2;
   player.spt.y = height-75;
 }
 if(logGroup1.isTouching(player.spt)){
   player.spt.x = player.spt.x-3;
 }
 else if((player.spt.y > height-1550 && player.spt.y < height-1300)||
 (player.spt.y < height-500 && player.spt.y > height-850) ||
 (player.spt.x<0) ||
 (player.spt.x>width)) {

  player.spt.x = width/2;
  player.spt.y = height-75;
 }
 if (city.isTouching(player.spt)) {
   gameState="win";
 }
if(gameState === "win"){
  stroke ("green");
  Fill ("green");
  textSize = 40;
  text("congratulation!You have won" , width/2-250,-1700);
  carGroup1.destroyEach();
  logGroup1.destroyEach();
}
  drawSprites();
}

