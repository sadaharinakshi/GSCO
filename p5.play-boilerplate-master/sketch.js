var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,800);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(800,200,60,height/2);
 speed = random(55,90);
 weight = random(400,1500);
 car.velocityX = speed;
 
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX = 0;
  var deformation =(weight*speed*speed)/2*22500;
  if(deformation<100){
    car.shapeColor = "green";
  }
  if(deformation>=100 && deformation<180)
  {
    car.shapeColor = "yellow";
  }
  if(deformation>=180)
  {
    car.shapeColor = "red";
  }
}

  drawSprites();
}