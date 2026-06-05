// ============= Childhood.exe by Katherine Xu (Art 101, Sec 2, Spring 2025)

// Toggle variables
let loy = 0;
let songplay = false;
let tv = false;
let bluescreen = false;
let misshome = false;
let dogbark = false;
let sleeping = false;
let tip = false;

// ======================== Scene 0: Intro/Help Screen ======================== //
function kxIntrohelp()  {

  this.setup = function() {
    console.log("Setup for Scene 0.");
    sound0.setVolume(.4);
    
  }

  this.enter = function() {
    console.log("Entering Scene 0!");
    background(bckgrnd0);
    

    smile.visible = true;
    clouds.visible = true;
    enterbutton.visible = true;
    enterbutton.scale = .8;

    sound0.loop();
    
  }


  this.draw = function() {
    background(bckgrnd0);
    
    // ------------ Enter Button
    if ( enterbutton.mouse.hovering() ) {
      if ( songplay == false ) {
        enterbutton.changeAnimation("play");
        soundhov.play();
        songplay = true;
      }
    } else {
      enterbutton.changeAnimation("idle");
      songplay = false;

    }
    if ( enterbutton.mouse.pressed() ) { // ----------- Exit to Scene 1
      enterbutton.visible = false;
      smile.visible = false;
      clouds.visible = false;

      songplay = false;
      this.sceneManager.showScene( kxLivingroom );
      sound0.stop();
      
    }

  }

  this.keyPressed = function() {
    
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 1: Morning Channel ======================== //
function kxLivingroom()  {

  this.setup = function() {
    console.log("Setup for Scene 1.");
    sound1.setVolume(.5);
    
  }

  this.enter = function() {
    console.log("Entering Scene 1!");
    background(bckgrnd1);
  

    you.visible = true;
    remote.visible = true;
    radio.visible = true;
    outside.visible = true;

    sound1.loop();
    
  }

  this.images = function() {
    // --- Toggles TV and tip
    if ( tv == true ) {
      image(tvscreen, 630, 110);
      image(happee, 530, 260);

    }
    if ( tip == true ) {
      image(tip1, 540, 10);
    }
 
  }


  this.draw = function() {
    background(bckgrnd1);
    this.images();
    
    // ------------ Remote
    if ( remote.mouse.hovering() ) {
      remote.changeAnimation("hover");
      console.log("Use TV Remote?");

    } else {
      remote.changeAnimation("idle");
    }
    if ( remote.mouse.pressed() && tv == false ) {
      tv = true;
      console.log("Tv on");
      petscop.setVolume(.5);
      petscop.loop();

    } else if ( remote.mouse.pressed() ) {
      tv = false;
      console.log("Tv off");
      petscop.stop();
    }

    // ------------ Radio
    if ( radio.mouse.hovering() ) {
      radio.changeAnimation("hover");
      console.log("Use radio?");

    } else {
      radio.changeAnimation("idle");
    }
    if ( radio.mouse.pressed() && songplay == false ) {
      songplay = true;
      console.log("Now Playing: candy shop by nomnomnami");
      console.log("Radio on");
      candysong.setVolume(.3);
      candysong.loop();

    } else if ( radio.mouse.pressed() ) {
      songplay = false;
      console.log("Radio off");
      candysong.stop();
    }

    // ------------ Outside Icon
    if ( outside.mouse.hovering() ) {
      outside.changeAnimation("go");
      console.log("Go outside?");

    } else {
      outside.changeAnimation("nogo");
    }
    if ( outside.mouse.pressed() ) { // ----------- Exit to Scene 2
      outside.visible = false;
      you.visible = false;
      remote.visible = false;
      radio.visible = false;

      tv = false;
      songplay = false;
      tip = false;
      candysong.stop();
      petscop.stop();
      this.sceneManager.showScene( kxClassroom );
      sound1.stop();
      
    }

  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 2: School's Not Out ======================== //
function kxClassroom ()  {

  this.setup = function() {
    console.log("Setup for Scene 2.");
    sound2.setVolume(.35);
    
  }

  this.enter = function() {
    console.log("Entering Scene 2!");
    background(bckgrnd2);
  

    smileyface.visible = true;
    smileyface.changeAnimation("happy");
    hand.visible = true;
    shadows.visible = true;
    freedom.visible = true;

    sound2.loop();
    
  }

  this.images = function() {
    image(chart, 596, 150);

    // --- Switches Presentation Image and toggles tip
    if ( bluescreen == true ) {
      image(bluescream, 596, 150);
    }
    if ( misshome == true ) {
      image(commenthome, width/2 + 180, 570);
    }
    
    if ( tip == true ) {
      image(tip2, 10, 10);
    }
    
  }

  
  this.draw = function() {
    background(bckgrnd2);
    this.images();

    // ------------ Teacher Smiley Face
    if ( smileyface.mouse.hovering() ) {
      image(pointer, 800, 240, 25, 15);
      console.log("Ask question?");

    } 
    if ( smileyface.mouse.pressed() ) {
      bluescreen = true;
      console.log("Aw dang it!");
      smileyface.changeAnimation("sad");
      bluescrn.setVolume(.6);
      bluescrn.play();
    
    }

    // ------------ Protagonist Hand
    if ( hand.mouse.hovering() ) {
      hand.changeAnimation("hover");
      
    } else {
      hand.changeAnimation("idle");
    }
    if ( hand.mouse.pressed() ) {
      misshome = true;
      console.log(":(");

    }

    // ------------ Doorway to Freedom
    if ( freedom.mouse.hovering() ) {
      freedom.changeAnimation("hover");
      console.log("Escape?");

    } else {
      freedom.changeAnimation("idle");
    }
    if ( freedom.mouse.pressed() ) { // ----------- Exit to Scene 3
      smileyface.visible = false;
      hand.visible = false;
      shadows.visible = false;
      freedom.visible = false;

      bluescreen = false;
      misshome = false;
      tip = false;

      sound2.stop();
      this.sceneManager.showScene( kxPlayground );

    }
    
  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 3: Playground Fun ======================== //
function kxPlayground ()  {

  this.setup = function() {
    console.log("Setup for Scene 3.");
    sound3.setVolume(.4);
    
  }

  this.enter = function() {
    console.log("Entering Scene 3!");
    background(bckgrnd3);
  

    kiddog.visible = true;
    friends.visible = true;
    selectjoin.visible = true;
    selectlater.visible = true;
    picnic.visible = true;

    sound3.loop();
    
  }

  this.images = function() {
    // --- Makes dog bark appear and toggles tip
    if ( dogbark == true ) {
      image(bark, 660, 500, 25, 25);
    }

    if ( tip == true ) {
      image(tip3, 540, 10);
    }
    
  }


  this.draw = function() {
    background(bckgrnd3);
    this.images();

    // ------------ Kid and Dog
    if ( kiddog.mouse.pressed() ) {
      dogbark = true;
      console.log("Man's best friend!");
      barklaugh.play();

    }

    // ------------ Friends
    if ( friends.mouse.hovering() ) {
      friends.changeAnimation("hover");
      console.log("Go to your friends?");

    } else {
      friends.changeAnimation("idle");
    }
    if ( friends.mouse.pressed() ) {
      friendquestion.visible = true;
      console.log("Do you want to play with them?");
      friendlaugh.play();

    }

    // ------------ Friend Popup and Join or Leave Buttons
    if ( friendquestion.visible == true && selectlater.mouse.hovering() ) {
      selectlater.changeAnimation("hover");
        
    } else {
      selectlater.changeAnimation("idle");
    }
    if ( selectlater.mouse.pressed() ) { 
      friendquestion.visible = false;
    }

    if ( friendquestion.visible == true && selectjoin.mouse.hovering() ) {
      selectjoin.changeAnimation("hover");
        
    } else {
      selectjoin.changeAnimation("idle");
    }
    if ( selectjoin.mouse.pressed() ) { // ----------- Exit to Scene 6
      kiddog.visible = false;
      friends.visible = false;
      friendquestion.visible = false;

      selectjoin.visible = false;
      selectlater.visible = false;
      picnic.visible = false;

      dogbark = false;
      tip = false;
      sound3.stop();
      this.sceneManager.showScene( kxArcade );
    }
    
    // ------------ Picnic
    if ( picnic.mouse.hovering() ) {
      picnic.changeAnimation("hover");
      console.log("Go uphill?");

    } else {
      picnic.changeAnimation("idle");
    }
    if ( picnic.mouse.pressed() ) { // ----------- Exit to Scene 4
      kiddog.visible = false;
      friends.visible = false;
      friendquestion.visible = false;

      selectjoin.visible = false;
      selectlater.visible = false;
      picnic.visible = false;

      dogbark = false;
      tip = false;
      sound3.stop();
      this.sceneManager.showScene( kxField );

    }

  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 4: Field of Butterflies ======================== //
function kxField ()  {

  this.setup = function() {
    console.log("Setup for Scene 4.");
    sound4.setVolume(.35);
    
  }

  this.enter = function() {
    console.log("Entering Scene 4!");
    background(bckgrnd4);
  

    butterfly1.visible = true;
    butterfly2.visible = true;
    butterfly3.visible = true;
    butterfly4.visible = true;

    jar.visible = true;
    jar.changeAnimation("empty");
    home.visible = true;

    sound4.loop();
    
  }

  this.images = function() {
    // --- Toggles tip
    if ( tip == true ) {
      image(tip4, 10, 10);
    }
  }


  this.draw = function() {
    background(bckgrnd4);
    this.images();

    // ------------ Butterflies
    if ( butterfly1.visible == true && butterfly1.mouse.hovering() ) {
      image(select, 180, 180, 120, 120);

    } 
    if ( butterfly1.mouse.pressed() ) {
      butterfly1.visible = false;
      console.log("Butterfly caught!");
      bugcatch.play();
    }

    if ( butterfly2.visible == true && butterfly2.mouse.hovering() ) {
      image(select, 290, 390, 120, 120);

    } 
    if ( butterfly2.mouse.pressed() ) {
      butterfly2.visible = false;
      console.log("Butterfly caught!");
      bugcatch.play();
    }

    if ( butterfly3.visible == true && butterfly3.mouse.hovering() ) {
      image(select, 490, 260, 120, 120);

    } 
    if ( butterfly3.mouse.pressed() ) {
      butterfly3.visible = false;
      console.log("Butterfly caught!");
      bugcatch.play();
    }

    if ( butterfly4.visible == true && butterfly4.mouse.hovering() ) {
      image(select, 585, 80, 120, 120);

    } 
    if ( butterfly4.mouse.pressed() ) {
      butterfly4.visible = false;
      jar.changeAnimation("full");
      console.log("Butterfly caught!");
      bugcatch.play();
    }

    // ------------ Home Icon
    if ( home.mouse.hovering() ) {
      home.changeAnimation("hover");
      console.log("Go home?")

    } else {
      home.changeAnimation("idle");
    }
    if ( home.mouse.pressed() ) { // ----------- Exit to Scene 5
      butterfly1.visible = false;
      butterfly2.visible = false;
      butterfly3.visible = false;
      butterfly4.visible = false;
      jar.visible = false;
      home.visible = false;

      tip = false;
    
      sound4.stop();
      this.sceneManager.showScene( kxBedroom );

    }


  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 5: Bedroom Teleportation ======================== //
function kxBedroom ()  {

  this.setup = function() {
    console.log("Setup for Scene 5.");
    sound5.setVolume(.3);
    
  }

  this.enter = function() {
    console.log("Entering Scene 5!");
    background(bckgrnd5);
  

    yousleep.visible = true;
    smileglobe.visible = true;
    starsexit.visible = true;

    sound5.loop();
    
  }

  this.images = function() {
    // --- Makes text appear and toggles tip
    if ( sleeping == true ) {
      image(sleeptext, 280, 240);
    }

    if ( tip == true ) {
      image(tip6, 540, 510);
    }

  }


  this.draw = function() {
    background(bckgrnd5);
    this.images();

    // ------------ Protagonist Sleeping
    if ( yousleep.mouse.hovering() ) {
      yousleep.changeAnimation("hover");

    } else {
      yousleep.changeAnimation("idle");
    }
    if ( yousleep.mouse.pressed() ) {
      sleeping = true;

    }

    // ------------ Smiley Face Globe
    if ( smileglobe.mouse.hovering() ) {
      smileglobe.changeAnimation("hover");

    } else {
      smileglobe.changeAnimation("idle");
    }
    if ( smileglobe.mouse.pressed() ) { // ----------- Exit to Scene 1
      yousleep.visible = false;
      smileglobe.visible = false;
      starsexit.visible = false;

      sleeping = false;
      tip = false;

      sound5.stop();
      this.sceneManager.showScene( kxLivingroom );

    }

    // ------------ Starry Window
    if ( starsexit.mouse.hovering() ) {
      starsexit.changeAnimation("hover");

    } else {
      starsexit.changeAnimation("idle");
    }
    if ( starsexit.mouse.pressed() ) { // ----------- Exit to Intro Scene
      yousleep.visible = false;
      smileglobe.visible = false;
      starsexit.visible = false;

      sleeping = false;
      tip = false;

      sound5.stop();
      this.sceneManager.showScene( kxIntrohelp );

    }

  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}



// ======================== Scene 6: Neo Arcadia ======================== //
function kxArcade ()  {

  this.setup = function() {
    console.log("Setup for Scene 6.");
    sound6.setVolume(.35);
    
  }

  this.enter = function() {
    console.log("Entering Scene 6!");
    background(bckgrnd6);
  

    gamehands.visible = true;
    house.visible = true;
    light1.visible = true;
    light2.visible = true;
    light3.visible = true;
    light4.visible = true;

    sound6.loop();
    
  }

  this.images = function() {
    // Toggles tip
    if ( tip == true ) {
      image(tip5, 540, 10);
    }

  }


  this.draw = function() {
    background(bckgrnd6);
    this.images();

    // ------------ Arcade Machine Lights
    if ( light1.mouse.hovering() ) {
      image(select, 660, 280, 140, 140);
    }
    if ( light2.mouse.hovering() ) {
      image(select, 540, 280, 110, 110);
    }
    if ( light3.mouse.hovering() ) {
      image(select, 420, 270, 95, 95);
    }
    if ( light4.mouse.hovering() ) {
      image(select, 297, 295, 95, 95);
    }

    if ( light1.mouse.pressed() ) {
      light1.changeAnimation("on");
      spark1.play();
    }
    if ( light2.mouse.pressed() ) {
      light2.changeAnimation("on");
      spark2.play();
    }
    if ( light3.mouse.pressed() ) {
      light3.changeAnimation("on");
      spark3.play();
    }
    if ( light4.mouse.pressed() ) {
      light4.changeAnimation("on");
      spark4.play();

    }

    // ------------ Home Icon
    if ( house.mouse.hovering() ) {
      house.changeAnimation("hover");
      console.log("Go home?");

    } else {
      house.changeAnimation("idle");
    }

    if ( house.mouse.pressed() ) {
    gamehands.visible = false;
    house.visible = false;
    light1.visible = false;
    light2.visible = false;
    light3.visible = false;
    light4.visible = false;

    tip = false;
    spark1.stop();
    spark2.stop();
    spark3.stop();
    spark4.stop();
    sound6.stop();
    this.sceneManager.showScene( kxBedroom );

    }

  }

  // ------------ Toggles Tip Popup
  this.keyPressed = function() {
    if (( key == 'h' || key == 'H' ) && ( tip == false )) {
      tip = true;
      soundhov.play();
  
    } else if ( key == 'h' || key == 'H' ) {
      tip = false;
    }
  }
  this.mousePressed = function() {
    
  }
}