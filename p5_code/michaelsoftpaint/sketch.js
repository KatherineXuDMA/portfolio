
// Michaelsoft Paint by Katherine Xu (Spring 2025)

// ------- vars and assets
let currentkey = '1';
let bgc;
let gkcount;
let plus = 0;
let brush = 0;

let xpwindow;
let star;
let cat;


function setup() {
    createCanvas(850, 630);
    background(255);
    smooth();

    bgc = color(255);
    gkcount = 20;

    xpwindow = loadImage("assets/window.png");
    star = loadImage("assets/stars2.gif");
    cat = loadImage("assets/cat.png");

}


function draw() {

    if(keyIsPressed) {
      clear_print();
    
    }
    
    if(mouseIsPressed) {
      drawChoice();
    }
    noTint();
    image(xpwindow,0,0,850,630);
    
}



// ---------------------------------------------------------- Brush Keys
function drawChoice() {

  let currentkey = key;

switch(currentkey) {
case '1':
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '2':
  drawline(color(149,190,255), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '3':
  drawline(color(255,149,179), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '4':
  drawline(color(255,66,94), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '5':
  drawline(color(255,147,70), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '6':
  drawline(color(25,123,43), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '7':
  drawline(color(2,35,112), mouseX, mouseY, pmouseX, pmouseY); 
  break;

// ----------------------------------------------------- Special Brush Keys

case '8':
  kxRainbrush(mouseX, mouseY, pmouseX, pmouseY);
  break;

case '9':
  kxCloudBrush(mouseX, mouseY, pmouseX, pmouseY);
  break;

case 'q':
  console.log("Cat Brush selected!"); 
  kxCatBrush(color(0), mouseX, mouseY, pmouseX, pmouseY);
  
  break;

case 'w':
  console.log("Star Brush selected!");
  kxStarBrush(color(0), mouseX, mouseY, pmouseX, pmouseY);
  
  break;

// --------------------------------------------------------


// ----------- Eraser and Default
case '0':
  console.log("Eraser selected!");
  eraser(color(255), mouseX, mouseY, pmouseX, pmouseY);
  
  break;

default:             
  console.log("No Brush Selected"); 

  break;
  }
}


// ------------------------ Standard Brush
function drawline(k,lx,ly,px,py) {
  colorMode(RGB)
  
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py); 
  // console.log("x = " + mouseX + ", y = " + pmouseY);

  // Increased/Decrease brush size by increment, max is 50.
  if (plus == 1) {
    strokeWeight(25);
    stroke(k);
    line(lx, ly, px, py);
  }
  if (plus == 2) {
    strokeWeight(50);
    stroke(k);
    line(lx, ly, px, py);
  }
  else if (plus >= 3) {
    plus = 2;
  }
  if (plus <= -1) {
    plus = 0;
  }
}

function keyPressed() {
  
  // ----------------- Increase/Decrease brush size
  if (key == 'k') {
    plus = plus + 1;
    console.log("Brush size increased!");
    console.log(plus);
  }
  if (key == 'j') {
    plus = plus - 1;
    console.log("Brush size decreased!");
    console.log(plus);
  }

  // ---------------- States brush type
  if (key == '1') {
    console.log("#1 Black Brush selected!");
  }
  if (key == '2') {
    console.log("#2 Sky Blue Brush selected!");
  }
  if (key == '3') {
    console.log("#3 Pastel Pink Brush selected!");
  }
  if (key == '4') {
    console.log("#4 Light Red Brush selected!");
  }
  if (key == '5') {
    console.log("#5 Orange Brush selected!");
  }
  if (key == '6') {
    console.log("#6 Dark Green Brush selected!");
  }
  if (key == '7') {
    console.log("#7 Dark Blue Brush selected!");
  }
  if (key == '8') {
    console.log("Rain-Brush selected!");
  }
  if (key == '9') {
    console.log("Cloud Brush selected!");
  }
}


// ------------------------ Unique Brushes

function kxRainbrush(lx, ly) {
  colorMode(HSB); 

  stroke((5*frameCount) % 360, 100, 100);
  
  strokeWeight(20);
  line(lx, ly, pmouseX, pmouseY);

}

function kxCloudBrush(lx, ly) {
  let rancolor = color(random(256,256,256), random(100,256,100), random(100,256,100));  // Color Object
  let r = random(20);
  colorMode(RGB)
  
  strokeWeight(1);
  fill(rancolor);
  stroke(rancolor);

  for (let i = 0; i < r; i++) {
    let lr = random(5,40);
    let srx = random(-39,39);
    let sry = random(-39,39);
    ellipse(lx+srx, ly+sry, lr, lr)
  }
} 

function kxCatBrush(k, lx, ly) {
  colorMode(RGB)
  let rancolor2 = color(random(256,256,256), random(100,256,100));

  tint(rancolor2);
  image(cat,lx,ly,random(1,20) + 50,random(1,20) + 50);
}

function kxStarBrush(kcount, lx, ly,) { 
  colorMode(RGB)
  let rancolor3 = color(random(256,256,256), random(100,256,0), random(256,256,100));
  
  tint(rancolor3);
  image(star,random(10)+lx,ly,100,100);
  
}


// ------------------------------------- Eraser and Canvas Options

function eraser(k, lx, ly, px, py) {
  strokeWeight(25);
  stroke(k);
  line(lx, ly, px, py);

}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(255);

  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';

  }
}

