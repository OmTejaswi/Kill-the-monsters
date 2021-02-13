const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var ground1;
var backGroundImg;

var back;
var superHero;


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

  superHero = new createHero(300,400,20);

}

function draw() {
  //background(0);

  imageMode(CENTER);
  back = image(backGroundImg,0,0,2550,1500);

  ground1.display();
  superHero.display();
}

