
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var dustbin2;
var dustbin3;



function preload()
{
	
	//paperIMG=loadImage("paper.png");
	
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	dustbin1=new dustbin(600,600,200,20);
    dustbin2=new dustbin(690,550,20,100);
	dustbin3=new dustbin(510,550,20,100);
	
	paper1= new paper(100,620,40);
	
	
	//Create the Bodies Here.
  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.Body,paper1.Body.position,{x:40,y:-85});
	}
}



