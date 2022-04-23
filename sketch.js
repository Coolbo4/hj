var score =0;
var star1Img,star2Img,star3Img,star4Img,star5Img,rocketImg;
var sp,bg;
var star1;

function preload(){
    star1Img = loadImage("star 1.png");
    star2Img = loadImage("star 2.png");
    star3Img = loadImage("star 3.png");
    star4Img = loadImage("star 4.png");
    star5Img = loadImage("star 5.png");
    rocketImg = loadImage("rocket 1.png");
    sp = loadImage("sb.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight );
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
    bg.addImage(sp);
    bg.scale = 1.1;
    
    createEdgeSprites()

    rocket = createSprite(displayWidth-500,350,10,10);
    rocket.visible = true
    rocket.addImage("rocket",rocketImg);
    rocket.scale = 0.2
     

    

    star1 = createSprite(displayWidth-150,100,20,20)
    star1.visible = true
    star1.addImage("star1",star1Img);
    star1.scale = 0.2
    star1.velocityX= -6
    star1.velocityY = 4
  
  
    

    star2 = createSprite(displayWidth-493,120,20,20);
    star2.visible = true
    star2.addImage("star2",star2Img);
    star2.scale = 0.12;
    star2.velocityX=7
    star2.velocityY=5
    
   

    star3 = createSprite(displayWidth-930,639,20,20);
    star3.visible = true
    star3.addImage("star3",star3Img);
    star3.scale = 0.16;
    star3.velocityX=-7
    star3.velocityY=-4
   

    star4 = createSprite(displayWidth-67,244,20,20);
    star4.visible = true
    star4.addImage("star4",star4Img);
    star4.scale = 0.2;
    star4.velocityX=-5
    star4.velocityY=8
    
    star5 = createSprite(displayWidth-930,103,20,20);
    star5.visible = true
    star5.addImage("star5",star5Img);
    star5.scale = 0.12;
    star5.velocityX=9
    star5.velocityY=5
   

    


}
function draw() {
    background(0);

     if (star1.x > windowWidth || star1.x <0){
    star1.x = displayWidth -150;
  }

  if(star1.y > windowHeight || star1.y <0){
      star1.y = 100;
  }

  if(star2.x > windowWidth || star2.x <0){
      star2.x = displayWidth -493;
  }

  if(star2.y > windowHeight || star2.y <0){
      star2.y = 120;
  }
  if(star3.x > windowWidth || star3.x <0){
      star3.x = displayWidth -930;
  }
  
  if(star3.y > windowHeight || star3.y <0){
      star3.y = 639;
  }
 
  if(star4.x > windowWidth || star4.x <0){
      star4.x = displayWidth -67;
  }

  if(star4.y > windowHeight || star4.y <0){
      star4.y = 244;
  }

  if (star5.x > windowWidth || star5.x <0){
    star5.x = displayWidth -930;
  }

  if(star5.y > windowHeight || star5.y <0){
      star5.y = 103;
  }
  
  if (keyDown("RIGHT_ARROW")){ rocket.x += 2; }
  if (keyDown("LEFT_ARROW")){ rocket.x -= 2; }
  if (keyDown("UP_ARROW")){ rocket.y -= 2; }
  if (keyDown("DOWN_ARROW")){ rocket.y += 2; }



    drawSprites();
}
