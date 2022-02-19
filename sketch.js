const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
let engine;
let world;
var fruit;
var rope; 
var fruit_con;
function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  ground = new Ground(250,690,500,10);

  rope=new Rope(7,{x:245,y:30});
  fruit=Bodies.circle(300,300,20)
  Matter.Composite.add(rope.body,fruit)

  fruit_con=new Link(rope,fruit)
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,30,30.);
}




