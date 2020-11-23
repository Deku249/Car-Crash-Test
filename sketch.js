//Ma'am the deformation is saying NaN so I need help

var car,wall 
var speed,weight
var deformation 


function setup() {
  createCanvas(1000,800);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite( 50, 200, 50, 50);
  car.shapeColor= (255,255,255)

  wall = createSprite( 900, 200, 60, height/2 );
  wall.shapeColor=(0,0,0)
}

function draw() {
  background(200,200,200);
  
  car.velocityX = speed

  console.log(deformation)

  if (wall.x - car.x < wall.width/2 + car.width/2){

    car.velocityX = 0
   

    deformation = (0.5 * weight * speed * speed) / 22500
    
    if (deformation < 100){
      car.shapeColor="green"
    }
  
    if (deformation > 100 && deformation < 180){
      car.shapeColor="yellow"
    }
  
    if (deformation > 180){
      car.shapeColor= "red"
    }
  
  }

  drawSprites();
}