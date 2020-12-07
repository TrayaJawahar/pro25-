// creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating variables 
var paper1;
var ground;
var wall1;
var wall2;
var wall3;
var dimage;

function preload()
{
  // loading the image
  dimage = loadImage("pictures/dustbingreen.png");
}

function setup() {
  createCanvas(1600, 400);
  
  // creating engine and world 
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(0,390,5000,20);
    paper1= new Paper (200,200,0,0);
    fill("white");

    wall1 = new Dustbin(1200,370,200,20);
   
    
   wall2 = new Dustbin(1115,280,20,170);
    wall3 = new Dustbin(1235,280,20,170);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground.display();
  wall2.display();
   wall3.display();
   
 wall1= image(dimage, 1100, 190, 150, 200);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:585,y:-585});
  }
}


