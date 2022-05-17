
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;

var block1, block2, block3;

var engine, world;

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;
   
	//Crie os Corpos Aqui.

	var plane_options = {

       isStatic: true

	};

	var block1_options = {

		restituition: 0.5,
		friction: 0.02,
		frictionAir: 0
 
	 };
	 
	 var block2_options = {

		restituition: 0.7,
		friction: 0.01,
		frictionAir: 0.1
 
	 };	 

	 var block3_options = {

		restituition: 0.01,
		friction: 1,
		frictionAir: 0.3
 
	 };	 

	plane = Bodies.rectangle(540, 600, 1200, 2, plane_options);
	World.add(world, plane);

    block1 = Bodies.circle(220, 10, 45, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(110, 50, 30, 15, block2_options);
	World.add(world, block2);

	block3 = Bodies.rectangle(350, 50, 70, 10, block3_options);
	World.add(world, block3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("yellow");

  rect(plane.position.x, plane.position.y, 1200, 2);
  ellipse(block1.position.x, block1.position.y, 45);
  rect(block2.position.x, block2.position.y, 30, 15);
  rect(block3.position.x, block3.position.y, 70, 10);

  drawSprites();
 
}



