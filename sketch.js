var speed, weight;
var car,wall;

function setup() {
  createCanvas(1350,400);
  speed = random(50,100);
  weight = random(400,1500); 
  wall = createSprite(1300, 200, 60,200);
  wall.shapeColor = color(80,80,80);
   
  car = createSprite(50,200,50,50);
  car.velocityX = speed;

}

function draw() {
  background(225,225,255);  

  if (wall.x - car.x < (wall.width + car.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
  
    if(deformation > 180){
      car.shapeColor ="red";
    }

  if( deformation < 180 && deformation > 100 ) {
  car.shapeColor = "yellow";
}

if(deformation < 100){
  car.shapeColor = "green";
}
}
  drawSprites();
}