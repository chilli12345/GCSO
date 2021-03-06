var car, wall;
var weight, speed;
var carImage;

function preload(){
 carImage=loadImage("car.jpg");
}

function setup () {
  createCanvas(1600,400);
  weight=random(400,1500);
  speed=random(55,90);

  car=createSprite(50,200,50,50);
  car.addImage(carImage);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";

}

function draw(){
  background(0);
  car.velocityX=speed;
  collide();
  drawSprites();
}

function collide(){
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      textSize(30);
      fill("red");
      text("Lethal effect on Passengers",600,200);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      textSize(30);
      fill("yellow");
      text("Average effect on Passengers",600,200);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
      
      textSize(30);
      fill("green");
      text("No effect on Passengers",600,200);
    }
  }
}
