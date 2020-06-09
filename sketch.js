var paper;
var basketBottom,basketLeft,basketRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paper.addImage("ball.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.createRect(200,200,50,50);
  
  drawSprites();
 
}



