var mouse , mouseImg1,mouseImg2
var groundImg
var cat,catImg1,catImg2





function preload() {
    //load the images here
    groundImg = loadImage("images/garden.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg1  = loadAnimation("images/cat1.png")
    catImg2  = loadAnimation("images/cat2.png","images/cat3.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(350,600,50,50)
    mouse.addAnimation("mouse",mouseImg1)
    mouse.scale = 0.2
    cat = createSprite(800,600,50,50)
    cat.addAnimation("cat",catImg1)
    cat.scale = 0.15


}

function draw() {

    background(groundImg);
    //Write condition here to evalute if tom and jerry collide
   
    if(cat.x - mouse.x < (cat.width - mouse.width)/2 + 200){
        cat.velocityX = 0
        mouse.changeAnimation("mouse")
        cat.changeAnimation("cat")
    }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing" , mouseImg2);
       mouse.changeAnimation("mouseTeasing")
       mouse.frameDelay = 25;
       cat.addAnimation("catmoving", catImg2)
       cat.changeAnimation("catmoving")
       //cat.x = cat.x -10;
       cat.velocityX = -5

    }

  //For moving and changing animation write code here


}
