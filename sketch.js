var garden,rabbit;
var gardenImg,rabbitImg;
var apple, ap;
var oleaf,ol;
var rleaf , rl;
var leaf, l;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ap = loadImage("apple.png")
  ol = loadImage("orangeLeaf.png")
  rl = loadImage("redimage.png")
  l = loadImage("leaf.png")
}

function setup()
{
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() 
{
  background(0);
    rabbit.velocityY=4
    rabbit.x=World.mouseX;

    edges= createEdgeSprites();
    rabbit.collide(edges);

    Spawnapple()
    drawSprites();
}

function Spawnapple()
{
  if(frameCount%70 === 0)
  {
  apple = createSprite(random(50,350),40,50,20)
  apple.velocityY= 5
  apple.scale=.3
  apple.addImage(ap)

  }
  Spawnoleaf()
  drawSprites();
}

function Spawnoleaf()
{
if(frameCount%70 === 0)
{
  oleaf = createSprite(random(50,350),40,50,20)
  oleaf.velocityY= 3
  oleaf.scale=0.1
  oleaf.addImage(ol)

}
Spawnrleaf()
drawSprites();
}

function Spawnrleaf()
{
if(frameCount%70 === 0)
{
  rleaf = createSprite(random(50,350),40,50,20)
  rleaf.velocityY= 2
  rleaf.scale=0.1
  rleaf.addImage(rl)

}
Spawnleaf()
drawSprites();
}

function Spawnleaf()
{
if(frameCount%70 === 0)
{
  leaf = createSprite(random(50,350),40,50,20)
  leaf.velocityY= 4
  leaf.scale=0.1
  leaf.addImage(l)

}
}