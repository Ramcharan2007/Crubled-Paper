
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var dustbin1;
var Ground;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1=new paper();
	dustbin1=new dustbin(1200,650);
	Ground=new ground(width/2,670,width,20);
  
    //force();
  
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  paper1.display();
  dustbin1.display();
  Ground.display();
  
  
  
  drawSprites();
 
}

function keyPressed()
    {
        if(keyCode === UP_ARROW)
        {
	        Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
        }
    }

