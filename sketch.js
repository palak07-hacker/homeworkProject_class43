var bg,bg2,form,system1,code,security1;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security1 = new security();
  system1 = new system();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security1.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites();
}