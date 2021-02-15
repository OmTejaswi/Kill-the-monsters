const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var ground1;
var backGroundImg;

var back;
var superHero;

var blocks = [];

var monster1;

function preload() {
//preload the images here
backGroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1500, 800);
 
  

  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground1 = new createGround(300,600,1200,10);

  superHero = new createHero(300,400,100);

  for(var i = 300; i < 307; i++) {
    blocks.push(new Block(500,i));
  }

  for(var i = 300; i < 306; i++) {
    blocks.push(new Block(550,i));
  }
  for(var i = 300; i < 308; i++) {
    blocks.push(new Block(600,i));
  }
  for(var i = 300; i < 305; i++) {
    blocks.push(new Block(650,i));
  }

  monster1 = new createMonster(800,200,200,200);

//Engine.run(engine);
}

function draw() {
  background(255);
   Engine.update(engine);

  imageMode(CENTER);
  back = image(backGroundImg,0,0,2550,1500);

  push();
  ground1.display();
  superHero.display();
  pop();

  push();
  
  for(var i =0; i < blocks.length; i++) {
    blocks[i].display();
  }

  //for(var i =0; i )
  pop();

  monster1.display();

}

