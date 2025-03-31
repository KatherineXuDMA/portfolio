
// Michaelsoft Binbows 95 by Katherine Xu (Spring 2025)

// Variables
let gridx,gridy;
let gridSize;
let crntkey;
let togglebck = 0;
let togglems = 0;
let antactiv = 0;
let anteffect = false;
lyo = 25;

// Assets
let bgd;
let font;
let ant;
let cursor;
let srtbutton;
let bckgrnd0;
let bckgrnd1;
let bckgrnd2;
let bckgrnd3;
let ms0;
let ms1;
let ms2;
let ms3;
let ms4;


function preload() {
  font = loadFont('assets/pixel_font.ttf');

}

function setup() {

    createCanvas(700, 500);

    bgd = loadImage("assets/bckchanger.png");
    ant = loadImage("assets/antconga.png");
    cursor = loadImage("assets/cursify.png");
    srtbutton = loadImage("assets/startbutton.png");
    
    bckgrnd0 = loadImage("assets/milaswindowspxart.jpg");
    bckgrnd1 = loadImage("assets/cityskyline.png");
    bckgrnd2 = loadImage("assets/vaporwave.jpg");
    bckgrnd3 = loadImage("assets/fallleaves.png");

    ms0 = loadImage("assets/glove.png");
    ms1 = loadImage("assets/eyespy.gif");
    ms2 = loadImage("assets/gauntlet.png");
    ms3 = loadImage("assets/classic.png");
    ms4 = loadImage("assets/rainbow.gif");


    gridx = width/2;
    gridy = height/2;
    gridSize = 40;
    textFont(font);
    textSize(13); 
    

    console.log("Welcome to Michaelsoft Binbows 95!");
    console.log("Click to interact with our various fun applications!");

}


function backgroundStuff() {

  rectMode(RADIUS)
  noStroke();
  fill(219, 210, 162);
  rect(350,250,350,250);

  rectMode(CENTER);
  fill(189, 178, 118);
  rect(350,250,660,460);

// --------------------------------- Switches backgrounds
  if (togglebck == 0) {
    image(bckgrnd0,35,38,630,408);
  }

  else if (togglebck == 1) {
    image(bckgrnd1,35,38,630,408);
  }

  else if (togglebck == 2) { 
    image(bckgrnd2,35,38,630,408);
    console.log ("There's a secret hidden here..");
  }

  else {
    image(bckgrnd3,35,38,630,408);
  }
// ----------------------------------

  fill(53, 92, 245);
  rect(350,457,630,23);

  image(ant,64, 245-lyo ,40,39);
  image(bgd,61,312-lyo,45,48);
  image(cursor,62,398-lyo,45,45);
  image(srtbutton,35,445,70,70);

  fill(255);
  stroke(0);
  text("Ant Crawler",45,300-lyo);
  text("Scene",65,370-lyo);
  text("Randomizer",49,385-lyo);
  text("Cursify",62,458-lyo);

  // -------------------------------- Switches Cursors
  if (togglems == 0) {
    noCursor();
    image(ms3,mouseX,mouseY,12,17); 
  }
  else if (togglems == 1) {
    image(ms0,mouseX,mouseY,17,17);
    
  }
  else if (togglems == 2) {
    image(ms1,mouseX,mouseY,27,27);
    console.log ("Hold click for eye to respond!");
  }
  else if (togglems == 3) {
    image(ms4,mouseX,mouseY,27,27);
    
  }
  else {
    image(ms2,mouseX,mouseY,22,22);
    
}
// -----------------------------------
} 


function draw() {

  backgroundStuff();
  
  if(keyIsPressed) { 
   keyChoice();
  }
  
  // Activates Ant Crawler
  if (antactiv == 1) {
    image(ant,gridx,gridy,gridSize,gridSize);

  }
  if (anteffect == true && antactiv == 1) {
    push();
    tint(20, 255, 42);
    image(ant,gridx,gridy,gridSize,gridSize);
    pop();
  }
  else if (anteffect == false && antactiv == 1) {
    noTint();
  }

  // Shows ant position and key code
  if ((antactiv == 1) && (keyIsPressed === true)) {
    console.log("ant goes to x = " + gridx + ", y = " + gridy + " | key number: " + keyCode);

  }

  // Eyespy Cursor Easter Egg
  if ((togglems == 2) && (mouseIsPressed === true)) {
    text("I see you!", mouseX + 20, mouseY);

  }


  rectMode(CORNER);
  //rect(36,447,68,20);
  rectMode(CENTER);
}


// ---------------------------- App Functions

// Ant Crawler
function mousePressed() {
  
  if ((mouseX >= 45 && mouseY >= 215) && (mouseX <= 125 && mouseY <= 280)) {
    console.log("Ant activated! WASD to move | Press x to deactivate | Press c to toggle ant color");
    antactiv = 1;

  }

// Scene Randomizer
  if ((mouseX >= 45 && mouseY >= 295) && (mouseX <= 125 && mouseY <= 335)) {
  
    togglebck = int(random(4));
    console.log("Current background is #" + togglebck + "!");
  }

// Cursify
  if ((mouseX >= 45 && mouseY >= 375) && (mouseX <= 125 && mouseY <= 435)) {
  
    togglems = int(random(5));
    console.log("Current cursor is #" + togglems + "!");

  }
}
// -----------------------------
 

// Turns off Ant Crawler + Toggles Ant Effect
function keyPressed(){
  if ( key == 'x' || key == 'X' ) {
    antactiv = 0;
    console.log("Ant deactivated!");
  }
  if (( key == 'c' || key == 'C' ) && (anteffect == false)) {
    anteffect = true;
    console.log("ant color is = " + anteffect + "!");
  } else if ( key == 'c' || key == 'C' ) {
    anteffect = false;
    console.log("ant color is = " + anteffect + "!");
  }
}

// Vaporwave Background Easter Egg
function mouseMoved(){
  if (togglebck == 2) {
    if (mouseX > 380){
      tint(85, 0, 255);
      console.log("Purple Vaporwave!");
    }
    else if (mouseX < 380) {
      noTint();
      image(bckgrnd2,35,38,630,408);
    }
  }
}

// ----------------------------- Ant Controls
function keyChoice() {

  let crntkey = key;
  switch(crntkey) {

  // left
case 'a':
  if (!((gridx - 40) < 40)) {  // checks for false before true
    gridx+= -gridSize;
  }
  image(ant,gridx,gridy,gridSize,gridSize);

  break;

  // up
case 'w':
  if ((!(gridy - 40) < 40)) {
    gridy+= -gridSize;
  } 
  image(ant,gridx,gridy,gridSize,gridSize);

  break;
  
  //right
case 'd':
  if (!((gridx + 40) > 660)) {
    gridx+= gridSize;
  }
  image(ant,gridx,gridy,gridSize,gridSize);

  break;
  
  // back
case 's':
  if (!((gridy + 40) > 660)) { 
    gridy+= gridSize;
  } 
  image(ant,gridx,gridy,gridSize,gridSize);

  break;

// ------------------------------------

default:

  break;
}
key = " "; 

}