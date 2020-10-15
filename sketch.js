var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftWall, rightWall,baseWall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	leftWall=createSprite(width/2-75,600,20,100);
	leftWall.shapeColor="red";
	
	rightWall=createSprite(width/2+75,600,20,100);
	rightWall.shapeColor="red";
	
	baseWall=createSprite(width/2,650,170,20);
	baseWall.shapeColor="red";
	
	leftBody = Bodies.rectangle(width/2-75,600,20,100,{isStatic:true});
	rightBody = Bodies.rectangle(width/2+75,600,20,100,{isStatic:true});
	baseBody = Bodies.rectangle(width/2,650,170,20,{isStatic:true});
	World.add(world,leftBody);
	World.add(world,rightBody);
	World.add(world,baseBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



