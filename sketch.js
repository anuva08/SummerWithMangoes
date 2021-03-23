
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango5,mango6;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,200,30);
	mango3 = new mango(1100,150,30);
	mango4 = new mango(1000,100,30);
	mango5 = new mango(1000,200,30);
	mango6 = new mango(900,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,40);

	stone = new Stone(250,400,20);

	chain = new Slingshot (stone.body,{x :240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  text("Press Space to get another chance",50,50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  groundObject.display();

  stone.display();

  chain.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX , y : mouseY});
	  
	}
	
	function mouseReleased(){
		chain.fly();
	}
	
	function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position
	
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance <= lmango.r + stone.r){
     Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		
	chain.attach(stone.body);
		
		
	}
}
	
