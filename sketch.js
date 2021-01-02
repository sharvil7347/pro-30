const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var boxObj,standObj,polygonObject,launcherObject;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var world,polygon;
var launchingForce=100;

function preload(){
	polygon=loadImage("images/polygon.png");
  }

  function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
    world = engine.world;
    
    standObj=new stand(235,420,30);

    //level one
    block1 = new Block(90,275,30,40);
    block2 = new Block(120,275,30,40);
    block2 = new Block(150,275,30,40);
    block3 = new Block(180,275,30,40);
    block4 = new Block(210,275,30,40);
    block5 = new Block(240,275,30,40);
    block6 = new Block(270,275,30,40);
    block7 = new Block(300,275,30,40);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);

    polygonObj=new polygon(50,200);
    launcherObject=new launcher(polygonObj.body,{x:50,y:200})
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1300,
          height: 600,
          wireframes: false
        }
      });
        
        Engine.run(engine);
// Render.run(render);
}

function draw() {

    background(230);
    //frameRate(2)
   // Engine.update(engine)
    textSize(25);
    text("Press Space to get a second Chance to Play!!",50 ,50);
    image(polygon ,200,340,200,300);
    //Engine.update(engine);

   boxObj.display();
   standObj.display();
   polygonObj.display();
   launcherObj.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display(); 
    block10.display(); 
    block11.display(); 
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    detectollision(polygonObj,block1);
    detectollision(polygonObj,block2);
    detectollision(polygonObj,block3);
    detectollision(polygonObj,block4);
    detectollision(polygonObj,block5);
    detectollision(polygonObj,block6);
    detectollision(polygonObj,block7);
    detectollision(polygonObj,block8);
    detectollision(polygonObj,block9);
    detectollision(polygonObj,block10);
    detectollision(polygonObj,block11);
    detectollision(polygonObj,block12);
    detectollision(polygonObj,block13);
    detectollision(polygonObj,block14);
    detectollision(polygonObj,block15);
    detectollision(polygonObj,block16);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();

}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygonObg.body, {x:235, y:420}) 
	  launcherObject.attach(polygonObg.body);
	}
  }

  function detectollision(lpolygon,lblock){
	
  blockBodyPosition=lblock.body.position
  polygonBodyPosition=lpolygon.body.position
  
  var distance=dist(BodyPosition.x, polygonBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  
  	if(distance<=lpolygon.r+lblock.r)
    {
     
  	  Matter.Body.setStatic(lblock.body,false);
    }

  }