const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var ground1;
var backGroundImg;

var back;
var superHero;

var blocks = [];

function preload() {
//preload the images here
backGroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1500, 800);
 
  

  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground1 = new createGround(300,600,1000,10);

  superHero = new createHero(300,400,70);

  for(var i = 100; i < 107; i++) {
    blocks.push(new Block(500,i));
  }

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

}

