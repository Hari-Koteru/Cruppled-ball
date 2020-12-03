
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;
var paper,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(400,700,800,20);
	ground.shapeColor = ("blue");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	
    paper = new Paper(100,100,20,PI/2);
  
	dustbin = new Dustbin(300,100,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
    if (keycode === UP_ARROW){

       Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

	}

}



