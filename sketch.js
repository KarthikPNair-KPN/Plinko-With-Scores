var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState = "play";
var yellowline;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  yellowline = new YellowLine();


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50)
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  yellowline.display();
  textSize(25);
  fill("white");
  text("Score : "+score,10,30);
  text("Turn : "+turn,670,30);

  textSize(25);
  fill("white");
  text("500",20,530);
  text("500",100,530);
  text("500",180,530);
  text("500",260,530);
  text("200",340,530);
  text("200",420,530);
  text("200",500,530);
  text("100",580,530);
  text("100",660,530);
  text("100",740,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     particle.display();

     if(particle.body.position.y>760){
      if(particle.body.position.x<300 ){
        score = score+500
        particle = null

        if(turn>=5) {gameState ="end"}
      }
    }
  }
    if(particle != null){
      particle.display();
 
      //if(particle.body.position.y>760){
       if(particle.body.position.x>320 && particle.body.position<600){
         score = score+200
         particle = null
  
         if(turn>=5) {gameState = "end"}
    //   }
 }
}

if(particle != null){
  particle.display();

  //if(particle.body.position.y>760){
   if(particle.body.position.x>620 && particle.body.position<850 ){
     score = score+100
     particle = null

     if(turn>=5) {gameState = "end";}
   }
  }
 //}
}
function mousePressed(){
   if(gameState !== "end"){
     turn = turn+1
     particle = new Particle(mouseX,10,10,10); 
   }
  }   