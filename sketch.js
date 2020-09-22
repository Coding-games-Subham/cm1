
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);
    //console.log("test")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper();
	ground = new Ground(400,height,800,20);
	log1 = new logDust(700,600,20,170);
	log2 = new logDust(500,600,20,170);
	log3 = new logDust(600,680,220,20);

	//Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  keyPressed();
  ball.display();
 ground.display();
 log1.display();
 log2.display();
 log3.display();
 
 
}



