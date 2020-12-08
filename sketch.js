
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	bobDiameter = 40

	bobobj1 = new Bob(200,600,100);
	bobobj2 = new Bob(300,600,100);
	bobobj3 = new Bob(400,600,100);
	bobobj4 = new Bob(500,600,100);
	bobobj5 = new Bob(600,600,100);
	
	roof = new Ground(400,100,500,50);

	rope1 =new Slingshot(bobobj1.body,roof.body,-bobDiameter*2,0)
	rope2 =new Slingshot(bobobj2.body,roof.body,-bobDiameter*2,0)
	rope3 =new Slingshot(bobobj3.body,roof.body,-bobDiameter*2,0)
	rope4 =new Slingshot(bobobj4.body,roof.body,-bobDiameter*2,0)
	rope5 =new Slingshot(bobobj5.body,roof.body,-bobDiameter*2,0)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobobj2.display();
  bobobj3.display();
  bobobj1.display();
  bobobj4.display();
  bobobj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		matter.Body.applyForce(paperObject.body.position,{x:85,y:-85});
	}
}



