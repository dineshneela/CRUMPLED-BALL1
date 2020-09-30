
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,floor,box1,box2,box3
/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball=new paper (60,20,25);
  floor=new ground (400,500,800,20)
  box1=new ground (650,480,150,20)
  box2=new ground (730,430,20,120)
  box3=new ground (580,430,20,120)
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
 ball.display();
 floor.display();
 box1.display();
 box2.display();
 box3.display();
 keyPressed();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
    
    Matter.Body.applyForce(ball.body,ball.body.position, {x:5,y:-6})
    
    
  }
//else{
  //Matter.Body.applyForce(ball.body,ball.body.position, {x:5,y:5})
//}
   
  
  }



