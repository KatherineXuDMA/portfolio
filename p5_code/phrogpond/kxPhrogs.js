
// Phrog Pond by Katherine Xu (Spring 2025)

class kxPhrogs {

    // phrog body and flower color
    c;
    c2;
    //
    
    lx;
    ly;
    rot;
    sc;

    speedx;
    speedy;

    txt;

    constructor (lc, lc2, llx, lly, lrot, lsc) { 
        this.c = lc;
        this.c2 = lc2;
        this.lx = llx;
        this.ly = lly;
        this.rot = lrot;
        this.sc = lsc;

        this.speedx = random(-1,1);
        this.speedy = random(-1,1);  

        this.txt = " ";
    }

    kxcamelliaphrog() { 

        push(); 
        translate(this.lx,this.ly);
        rotate(radians(this.rot));
        scale(this.sc);
      
        this.lilypad();
      
      // ----- Body
        fill(this.c);
        ellipse(100,100,180,150,0);
      
      // ----- Legs
        this.leggies(70,140,140);
        this.toesies(28,-105,45);
        this.toesies(75,-115,45);
        this.leggies(112,137,40);
        this.leggies(160,115,40);
        this.toesies(-77,150,-45);
        this.toesies(-125,173,-45);
      // -----
      
        fill(this.c2);
        this.face(70,120,5,5);
        this.camellia();

        textSize(20);
        text(this.txt,10,-20);
      
        pop();
    }

    kxlilyphrog() { 

        push();
        translate(this.lx,this.ly);
        rotate(radians(this.rot));
        scale(this.sc);
      
        this.lilypad();
      
      // ----- Body
        fill(this.c);
        ellipse(100,100,180,150,0);
        
      // ----- Legs
        this.leggies(150,105,40);
        this.toesies(80,-108,45);
        this.toesies(-87,140,-45);
        this.leggies(118,137,40);
        this.leggies(70,145,140);
      
        this.toesies(30,-102,45);
        this.toesies(-120,172,-45);
      // ------
      
        fill(this.c2);
        this.face(145,110,5,1);
        this.lilyflower();

        textSize(20);
        text(this.txt,210,-20);
      
        pop();
    }


    updatePhrog() {
    
      // ---------------- Bounce Behavior

      this.lx += this.speedx;
      this.ly += this.speedy;

      if ( this.lx < 0 ) {
      this.speedx = -this.speedx;
      }
      if ( this.lx > width ) {
      this.speedx = -this.speedx;
      }
      if ((this.ly < 0) || (this.ly > height)) {
        this.speedy = -this.speedy;
      }
      // ----------------
    }


    leggies(lx,ly,rot) {
    
        push();
    
        translate(lx,ly)
        rotate(radians(rot));
        rect(0,0,60,15)
    
        pop();
    }
    
    toesies(lx,ly,rot) {
        push();
    
        translate(lx,ly)
        rotate(radians(rot));
    
        circle(200,200,15,15);
        circle(190,210,15,15);
        circle(180,200,15,15);
        
        pop();
    }
    
    face(lx,ly,w,h) {
    
        push();
    
        translate(lx,ly);
        stroke(0);
        strokeWeight(6);
        fill(255);
    
        ellipse(10,10,w,h);
        ellipse(-10,10,w,h);
    
        noFill();
        arc(0, -15, 80, 80, 7.4, 2);
    
        stroke(255, 136, 203);
        ellipse(25,15,10,5);
        ellipse(-25,15,10,5);
    
        pop();
    }

    camellia() {
        push();
    
        translate(2,15);
    
        this.petals(42,20,115,60,8);
        this.petals(170,36,120,60,8);
        this.petals(110,12,115,60,8);
        this.petals(102,60,120,60,8);
    
        fill(255, 233, 95);
        translate(108,25);
        rotate(radians(7))
        ellipse(0,0,70,35)
        
        pop();
    }

    lilyflower() {
        push();

        translate(8,12);
        rotate(radians(-5));
  
        this.petals(25,20,120,55,25);
        this.petals(50,5,120,55,60);
        this.petals(140,20,120,55,-25);
        this.petals(120,5,120,55,-60);
        this.petals(85,3,115,52,90);

        fill(17, 144, 45);
        this.petals(45,55,90,40,20);
        this.petals(125,55,90,40,-20);

        pop();
    }
    
    petals(lx,ly,w,h,rot) {

        push();
    
        translate(lx,ly);
        rotate(radians(rot));
        ellipse(0,0,w,h);
    
        pop();
    }

    lilypad() {

        push();
    
        translate(100,165);
        fill(17, 144, 45);
        rotate(radians(180));
        arc(0, 0, 350, 120, -1, PI + HALF_PI);
        
        pop();
    }


// ------------------- Display/Action Methods

    multiphrog() { // Randomizes phrogs color and position!
    this.lx = random(0,width);
    this.ly = random(0,height);
    this.c = color(random(255), random(255),random(255));
    this.c2 = color(random(255), random(255),random(255));
    }

    speedphrog() { // Randomizes phrogs speed!
      this.speedx += random(-1,2);
      this.speedy += random(-1,2);
    }

    sizephrog() { // Randomizes phrogs size and rotation!
    this.sc = random(.3,5);
    this.rot = random(360);
    }

    speakphrog() { // Activates phrogspeak!
      this.txt = "Ribbit!";
    }

}