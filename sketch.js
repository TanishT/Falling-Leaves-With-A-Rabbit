var garden,rabbit, apple, leaf, oLeaf, rLeaf;
var gardenImg,rabbitImg, appleImg, leafImg,OleafImg,rLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  oLeafImg = loadImage("orangeLeaf.png");
  rLeafImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var select_sprites=Math.round(random(1,4));
  if(frameCount % 80==0){
    if(select_sprites == 1){
      createApple();
      
    }
    else if(select_sprites == 2){
      createOrange();
      
    }
    else if(select_sprites == 3){
      createLeaf();
    }
    
    else{
      createRed();
    }
  }
}
function createApple(){
  apple=createSprite(random(50,150), 40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.5;
  apple.velocityY=3;
  apple.lifetime=150;
  apple.scale=0.06;
  
}
function createOrange(){
  oLeaf=createSprite(random(50,150), 40,10,10);
  oLeaf.addImage(oLeafImg);
  oLeaf.scale=0.5;
  oLeaf.velocityY=3;
  oLeaf.lifetime=150;
  oLeaf.scale=0.1;
}
function createRed(){
  rLeaf=createSprite(random(50,150), 40,10,10);
  rLeaf.addImage(rLeafImg);
  rLeaf.scale=0.5;
  rLeaf.velocityY=3;
  rLeaf.lifetime=150;
  rLeaf.scale=0.1;
}
function createLeaf(){
  leaf=createSprite(random(50,150), 40,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.5;
  leaf.velocityY=3;
  leaf.lifetime=150;
  leaf.scale=0.1;
}



