
// Phrog Pond by Katherine Xu (Spring 2025)

let phrogs;


function setup() {
  createCanvas(600,600);
  background(0);
  noStroke();

  // Sets number of phrogs spawned.
  phrogs = new Array(4);


  // Spawns randomized phroggies!
  for (let i = 0; i < phrogs.length; i++) { 
    phrogs[i] = new kxPhrogs(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),250,250,0,random(.3,1));

  }
  console.log("Welcome to phrog pond!");
  console.log("Controls: r = randomize, s = speed, a = add phrogs, w = phrog speak, e = crazy mode");

}

function draw() {
  background(36, 81, 146);

  // Helps distribute camellia and lily phrogs.
  for (let i = 0; i < phrogs.length; i++) {
    if ( i % 2 == 0 ) {
      phrogs[i].kxcamelliaphrog(); 
    } else {
      phrogs[i].kxlilyphrog();
    }
    phrogs[i].updatePhrog();
  }

}

// ---------------------- Toggles Action/Display Methods
function keyPressed() {
  if (key == 'r') {
    for (let i = 0; i < phrogs.length; i++) {
      phrogs[i].multiphrog(); 
    }
  }
  if (key == 's') {
    for (let i = 0; i < phrogs.length; i++) {
      phrogs[i].speedphrog(); 
    }
  }
  if (key == 'e') {
    for (let i = 0; i < phrogs.length; i++) {
      phrogs[i].sizephrog(); 
    }
  }
  // Increases length of phrog array to add new phrogs.
  if (key == 'a') {
    phrogs[phrogs.length] = new kxPhrogs(color(random(255),random(255),random(255)), color(random(255),random(255),random(255)),250,250,0,random(.3,1));
  }
  
  if (key == 'w') {
    for (let i = 0; i < phrogs.length; i++) {
      phrogs[i].speakphrog(); 
    }
  }
}
