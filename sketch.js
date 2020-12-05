const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var funEngine,funWorld,ground,ball;

function setup() {
  createCanvas(800,400);
  funEngine = Engine.create();
  funWorld = funEngine.world;
  var option = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(400,390,800,20,option);
  World.add(funWorld,ground);
  
  var ballOption = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,200,20,ballOption);
  World.add(funWorld,ball);
}

function draw() {
  background(0);  
  Engine.update(funEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}