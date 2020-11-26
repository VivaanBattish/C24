const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log,log2,log3,log4;
var pig,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(900,250,70,70);
    box5 = new Box(800,150,70,70);

    ground = new Ground(600,height,1200,20);

    log = new logs(800,320,270,PI/2);
    log2 = new logs(800,160,270,PI/2);
    log3 = new logs(765,130,130,PI/4);
    log4 = new logs(825,130,130,PI/-4);

    pig = new pigs(800,330);
    pig2 = new pigs(800,170);

    bird = new Bird(300,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig.display();
    pig2.display();

    log.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
}