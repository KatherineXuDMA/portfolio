// ============= Sketch for Childhood.exe by Katherine Xu (Art 101, Sec 2, Spring 2025)

var mgr;
var enter;
var remote;
var radio;


function preload() {
  // ------------------- Images
  bckgrnd0 = loadImage("assets/introhelp.png");
  bckgrnd1 = loadImage("assets/livingroom.png");
  bckgrnd2 = loadImage("assets/classroom.png");
  bckgrnd3 = loadImage("assets/playground.png");
  bckgrnd4 = loadImage("assets/field.png");
  bckgrnd5 = loadImage("assets/bedroom.png");
  bckgrnd6 = loadImage("assets/arcade.png");

  tvscreen = loadImage("assets/livingroom_scene/tvscreen.png");
  happee = loadImage("assets/livingroom_scene/happyface.png");

  chart = loadImage("assets/classroom_scene/chart.png");
  bluescream = loadImage("assets/classroom_scene/bluescream.png");
  commenthome = loadImage("assets/classroom_scene/wannahome.png");
  pointer = loadImage("assets/classroom_scene/arrows.png");

  bark = loadImage("assets/playground_scene/bark.png");
  select = loadImage("assets/field_scene/selectbox.png");

  sleeptext = loadImage("assets/bedroom_scene/asleep.png");
  gametext = loadImage("assets/arcade_scene/gamequestion.png");

  tip1 = loadImage("assets/livingroom_scene/livroom_tip.png");
  tip2 = loadImage("assets/classroom_scene/class_tip.png");
  tip3 = loadImage("assets/playground_scene/park_tip.png");
  tip4 = loadImage("assets/field_scene/field_tip.png");
  tip5 = loadImage("assets/arcade_scene/arcade_tip.png");
  tip6 = loadImage("assets/bedroom_scene/bed_tip.png");

  // ------------------- Sounds, ambience, and music
  soundclick = loadSound("audio/mouseclick.mp3");
  soundhov = loadSound("audio/hover.mp3");
  candysong = loadSound("audio/nomnomnami_candy_shop.mp3");
  petscop = loadSound("audio/petscoptitletheme.mp3");
  bluescrn = loadSound("audio/bluescreenofdeath.mp3");
  barklaugh = loadSound("audio/mansbestfriend.mp3");
  friendlaugh = loadSound("audio/friendslaugh.mp3");
  bugcatch = loadSound("audio/bugcatch.mp3");

  spark1 = loadSound("audio/light1.mp3");
  spark2 = loadSound("audio/light2.mp3");
  spark3 = loadSound("audio/light3.mp3");
  spark4 = loadSound("audio/light4.mp3");

  sound0 = loadSound("audio/screenhum.mp3");
  sound1 = loadSound("audio/morninghome.mp3");
  sound2 = loadSound("audio/busyclass.mp3");
  sound3 = loadSound("audio/outdoorpark.mp3");
  sound4 = loadSound("audio/windyfield.mp3");
  sound5 = loadSound("audio/indoornight.mp3");
  sound6 = loadSound("audio/arcadia.mp3");
  

  // ------------------- Animation for Objects
  smiling = loadAni("assets/intro_scene/smile1.png", "assets/intro_scene/smile2.png", "assets/intro_scene/smile3.png");
  cloudy = loadAni("assets/intro_scene/cloud1.png", "assets/intro_scene/cloud2.png", "assets/intro_scene/cloud3.png");
  ent = loadAni("assets/intro_scene/enter1.png", "assets/intro_scene/enter2.png", "assets/intro_scene/enter3.png")

  kidsit = loadAni("assets/livingroom_scene/you1.png", "assets/livingroom_scene/you2.png");
  remoteOff = loadAni("assets/livingroom_scene/remote1.png", "assets/livingroom_scene/remote2.png", "assets/livingroom_scene/remote3.png")
  remoteOn = loadAni("assets/livingroom_scene/remote4.png", "assets/livingroom_scene/remote5.png", "assets/livingroom_scene/remote6.png");
  radOff = loadAni("assets/livingroom_scene/radio1.png", "assets/livingroom_scene/radio2.png", "assets/livingroom_scene/radio3.png");
  radOn = loadAni("assets/livingroom_scene/radio4.png", "assets/livingroom_scene/radio5.png", "assets/livingroom_scene/radio6.png");
  outYes = loadAni("assets/livingroom_scene/outside1.png", "assets/livingroom_scene/outside2.png", "assets/livingroom_scene/outside3.png");
  outNo = loadAni("assets/livingroom_scene/outside4.png", "assets/livingroom_scene/outside5.png", "assets/livingroom_scene/outside6.png");

  smileyteacher = loadAni("assets/classroom_scene/smileface1.png", "assets/classroom_scene/smileface2.png", "assets/classroom_scene/smileface3.png");
  students = loadAni("assets/classroom_scene/shadows1.png", "assets/classroom_scene/shadows2.png", "assets/classroom_scene/shadows3.png");
  handstill = loadAni("assets/classroom_scene/hand1.png", "assets/classroom_scene/hand2.png", "assets/classroom_scene/hand3.png");
  handremark = loadAni("assets/classroom_scene/hand4.png", "assets/classroom_scene/hand5.png", "assets/classroom_scene/hand6.png");
  exitNo = loadAni("assets/classroom_scene/freedom1.png", "assets/classroom_scene/freedom2.png");
  exitYes = loadAni("assets/classroom_scene/freedom3.png", "assets/classroom_scene/freedom4.png");

  kiddogrun = loadAni("assets/playground_scene/kiddog1.png", "assets/playground_scene/kiddog2.png");
  friendHov = loadAni("assets/playground_scene/friends1.png", "assets/playground_scene/friends2.png", "assets/playground_scene/friends3.png");
  friendUnhov = loadAni("assets/playground_scene/friends4.png", "assets/playground_scene/friends5.png", "assets/playground_scene/friends6.png");
  friendzoomin = loadAni("assets/playground_scene/friendszoom1.png", "assets/playground_scene/friendszoom2.png", "assets/playground_scene/friendszoom3.png");
  picnicNo = loadAni("assets/playground_scene/picnic1.png", "assets/playground_scene/picnic2.png");
  picnicGo = loadAni("assets/playground_scene/picnic3.png", "assets/playground_scene/picnic4.png");
  join = loadAni("assets/playground_scene/selectjoin1.png", "assets/playground_scene/selectjoin2.png");
  later = loadAni("assets/playground_scene/selectlater1.png", "assets/playground_scene/selectlater2.png");

  butterfly1idle = loadAni("assets/field_scene/butterfly1.png", "assets/field_scene/butterfly2.png", "assets/field_scene/butterfly3.png");
  butterfly2idle = loadAni("assets/field_scene/butterfly4.png", "assets/field_scene/butterfly5.png", "assets/field_scene/butterfly6.png");
  butterfly3idle = loadAni("assets/field_scene/butterfly7.png", "assets/field_scene/butterfly8.png", "assets/field_scene/butterfly9.png");
  butterfly4idle = loadAni("assets/field_scene/butterfly10.png", "assets/field_scene/butterfly11.png", "assets/field_scene/butterfly12.png");
  jarempt = loadAni("assets/field_scene/jar1.png", "assets/field_scene/jar2.png");
  jarfull = loadAni("assets/field_scene/jar3.png", "assets/field_scene/jar4.png");
  homeNo = loadAni("assets/field_scene/homeicon1.png", "assets/field_scene/homeicon2.png");
  homeGo = loadAni("assets/field_scene/homeicon3.png", "assets/field_scene/homeicon4.png"); 

  sleepingNo = loadAni("assets/bedroom_scene/yousleep1.png", "assets/bedroom_scene/yousleep2.png", "assets/bedroom_scene/yousleep3.png");
  sleepingYes = loadAni("assets/bedroom_scene/yousleep4.png", "assets/bedroom_scene/yousleep5.png", "assets/bedroom_scene/yousleep6.png");
  starsNo = loadAni("assets/bedroom_scene/stars1.png", "assets/bedroom_scene/stars2.png");
  starsGo = loadAni("assets/bedroom_scene/stars3.png", "assets/bedroom_scene/stars4.png");
  globeNo = loadAni("assets/bedroom_scene/smiley1.png", "assets/bedroom_scene/smiley2.png", "assets/bedroom_scene/smiley3.png");
  globeGo = loadAni("assets/bedroom_scene/smiley4.png", "assets/bedroom_scene/smiley5.png", "assets/bedroom_scene/smiley6.png");

  ticketcoins = loadAni("assets/arcade_scene/gamehands1.png", "assets/arcade_scene/gamehands2.png", "assets/arcade_scene/gamehands3.png");
  light1On = loadAni("assets/arcade_scene/light1.png", "assets/arcade_scene/light2.png", "assets/arcade_scene/light3.png");
  light2On = loadAni("assets/arcade_scene/light4.png", "assets/arcade_scene/light5.png", "assets/arcade_scene/light6.png");
  light3On = loadAni("assets/arcade_scene/light7.png", "assets/arcade_scene/light8.png", "assets/arcade_scene/light9.png");
  light4On = loadAni("assets/arcade_scene/light10.png", "assets/arcade_scene/light11.png", "assets/arcade_scene/light12.png");

}



function setup() {
  createCanvas(870, 600);
  mgr = new SceneManager();


  // --------------------------------- Scene 0 Sprites and Animations
  enterbutton = createSprite(420, 470, 150, 70, "static"); 
  smile = createSprite(180, 170, "static");
  clouds = createSprite(670, 190, "static");

  enterbutton.visible = false;
  ent.frameDelay = 20;
  enterbutton.addAnimation("idle", "assets/intro_scene/enter.png");
  enterbutton.addAnimation("play", ent);

  smile.visible = false;
  smiling.frameDelay = 30;
  smile.addAnimation(smiling);

  clouds.visible = false;
  cloudy.frameDelay = 25;
  clouds.addAnimation(cloudy);


  // -------------------------------- Scene 1 Sprites and Animations
  you = createSprite(520, 358, "static");
  remote = createSprite(700, 500, 190, 50, "static");
  radio = createSprite(340, 410, 120, 120, "static");
  outside = createSprite(50, 70, 50, 50, "static");

  you.visible = false;
  kidsit.frameDelay = 35;
  you.addAnimation(kidsit);

  remote.visible = false;
  remoteOn.frameDelay = 30
  remoteOff.frameDelay = 30
  remote.addAnimation("idle", remoteOff);
  remote.addAnimation("hover", remoteOn);

  radio.visible = false;
  radOn.frameDelay = 20;
  radOff.frameDelay = 20;
  radio.scale = .4;
  radio.addAnimation("hover", radOn);
  radio.addAnimation("idle", radOff);

  outside.visible = false;
  outside.scale = .6;
  outYes.frameDelay = 30;
  outNo.frameDelay = 30;
  outside.addAnimation("go", outNo);
  outside.addAnimation("nogo", outYes);


  // -------------------------------- Scene 2 Sprites and Animations
  shadows = createSprite(width/2 + 14, height/2 + 105, "static");
  hand = createSprite(500, 580, 120, 80, "static");
  smileyface = createSprite(765, 250, 60, 60, "static");
  freedom = createSprite(330, 280, 100, 70, "static");

  smileyface.visible = false;
  smileyteacher.frameDelay = 22;
  smileyface.addAnimation("happy", smileyteacher);
  smileyface.addAnimation("sad", "assets/classroom_scene/frownface.png");

  hand.visible = false;
  handremark.frameDelay = 20;
  handstill.frameDelay = 20;
  hand.addAnimation("hover", handremark);
  hand.addAnimation("idle", handstill);

  shadows.visible = false;
  students.frameDelay = 20;
  shadows.addAnimation(students);

  freedom.visible = false;
  exitYes.frameDelay = 20
  exitNo.frameDelay = 20
  freedom.addAnimation("idle", exitNo);
  freedom.addAnimation("hover", exitYes);


  // -------------------------------- Scene 3 Sprites and Animations
  picnic = createSprite(220, 86, 50, 50, "static");
  kiddog = createSprite(750, 490, 140, 180, "static");
  friends = createSprite(500, 293, 50, 50, "static");
  friendquestion = createSprite(300, 460, "static");
  selectjoin = createSprite(374, 458, 100, 20, "static");
  selectlater = createSprite(456, 492, 248, 20, "static");

  kiddog.visible = false;
  kiddogrun.frameDelay = 27;
  kiddog.addAnimation(kiddogrun);

  friends.visible = false;
  friendHov.frameDelay = 24
  friendUnhov.frameDelay = 24
  friends.addAnimation("idle", friendHov);
  friends.addAnimation("hover", friendUnhov);

  friendquestion.visible = false;
  friendzoomin.frameDelay = 30;
  friendquestion.addAnimation(friendzoomin);

  selectjoin.visible = false;
  join.frameDelay = 25
  selectjoin.addAnimation("hover", join);
  selectjoin.addAnimation("idle", "assets/playground_scene/empty.png");

  selectlater.visible = false;
  later.frameDelay = 25
  selectlater.addAnimation("hover", later);
  selectlater.addAnimation("idle", "assets/playground_scene/empty.png");

  picnic.visible = false;
  picnicGo.frameDelay = 25
  picnicNo.frameDelay = 25
  picnic.addAnimation("idle", picnicNo);
  picnic.addAnimation("hover", picnicGo);


  // -------------------------------- Scene 4 Sprites and Animations
  butterfly1 = createSprite(240, 240, 60, 60, "static");
  butterfly2 = createSprite(350, 450, 60, 60, "static");
  butterfly3 = createSprite(550, 320, 60, 60, "static");
  butterfly4 = createSprite(640, 140, 60, 60, "static");
  jar = createSprite(790, 530, "static");
  home = createSprite(37, 460, 100, 60, "static");

  butterfly1.visible = false;
  butterfly1idle.frameDelay = 23;
  butterfly1.addAnimation(butterfly1idle);

  butterfly2.visible = false;
  butterfly2idle.frameDelay = 25;
  butterfly2.addAnimation(butterfly2idle);

  butterfly3.visible = false;
  butterfly3idle.frameDelay = 21;
  butterfly3.addAnimation(butterfly3idle);

  butterfly4.visible = false;
  butterfly4idle.frameDelay = 22;
  butterfly4.addAnimation(butterfly4idle);

  jar.visible = false;
  jarempt.frameDelay = 30;
  jarfull.frameDelay = 30;
  jar.addAnimation("empty", jarempt);
  jar.addAnimation("full", jarfull);

  home.visible = false;
  home.scale = .4;
  homeNo.frameDelay = 25;
  homeGo.frameDelay = 25;
  home.addAnimation("idle", homeNo);
  home.addAnimation("hover", homeGo);


  // -------------------------------- Scene 5 Sprites and Animations
  yousleep = createSprite(560, 360, 300, 100, "static");
  starsexit = createSprite(776, 185, 90, 150, "static");
  smileglobe = createSprite(104, 160, 190, "static");

  yousleep.visible = false;
  sleepingNo.frameDelay = 30;
  sleepingYes.frameDelay = 30;
  yousleep.addAnimation("idle", sleepingNo);
  yousleep.addAnimation("hover", sleepingYes);

  smileglobe.visible = false;
  globeNo.frameDelay = 25;
  globeGo.frameDelay = 25;
  smileglobe.addAnimation("idle", globeNo);
  smileglobe.addAnimation("hover", globeGo);

  starsexit.visible = false;
  starsNo.frameDelay = 25;
  starsGo.frameDelay = 25;
  starsexit.addAnimation("idle", starsNo);
  starsexit.addAnimation("hover", starsGo);


  // -------------------------------- Scene 5 Sprites and Animations
  gamehands = createSprite(width/2, 575, "static");
  light1 = createSprite(730, 240, 120, 180, "static");
  light2 = createSprite(595, 250, 110, 140, "static");
  light3 = createSprite(470, 250, 90, 150, "static");
  light4 = createSprite(345, 350, 80, 230, "static");
  house = createSprite(35, 300, 80, 80, "static");

  gamehands.visible = false;
  ticketcoins.frameDelay = 20;
  gamehands.addAnimation(ticketcoins);

  house.visible = false;
  house.scale = .4;
  homeNo.frameDelay = 30;
  homeGo.frameDelay = 30;
  house.addAnimation("idle", homeNo);
  house.addAnimation("hover", homeGo);

  light1.visible = false;
  light1On.frameDelay = 25;
  light1.addAnimation("on", light1On);
  light1.addAnimation("off", "assets/playground_scene/empty.png");
  
  light2.visible = false;
  light2On.frameDelay = 25;
  light2.addAnimation("on", light2On);
  light2.addAnimation("off", "assets/playground_scene/empty.png");

  light3.visible = false;
  light3On.frameDelay = 25;
  light3.addAnimation("on", light3On);
  light3.addAnimation("off", "assets/playground_scene/empty.png");

  light4.visible = false;
  light4On.frameDelay = 25;
  light4.addAnimation("on", light4On);
  light4.addAnimation("off", "assets/playground_scene/empty.png");


  // --------------- Scenes
  mgr.addScene (kxIntrohelp);
  mgr.addScene (kxLivingroom);
  mgr.addScene (kxClassroom);
  mgr.addScene (kxPlayground);
  mgr.addScene (kxField);
  mgr.addScene (kxBedroom);
  mgr.addScene (kxArcade);
  mgr.showNextScene();

}



function draw() { // Passes the current draw function into the SceneManager.
  mgr.draw();
}

function images() { // Used to place images without the draw function drawing over them! Make sure to add 'this.images' in the draw!
  mgr.images();
}

function mousePressed() { // Passes the MousePressed message into the SceneManager.
  mgr.mousePressed();

  soundclick.setVolume(.15);
  soundclick.play();
}

function keyPressed() { // Key presses at global level. Used to bugfix only!
  // switch(key)
  // {
  //     case '0':
  //         mgr.showScene( kxIntrohelp );
  //         break;
  //     case '1':
  //         mgr.showScene( kxLivingroom );
  //         break;
  //     case '2':
  //         mgr.showScene( kxClassroom );
  //         break;
  //     case '3':
  //         mgr.showScene( kxPlayground );
  //         break;
  //     case '4':
  //         mgr.showScene( kxField );
  //         break;
  //     case '5':
  //         mgr.showScene( kxBedroom );
  //         break;
  //     case '6':
  //         mgr.showScene( kxArcade );
  //         break;
  // }

  // Key presses dispatched via the SceneManager.
  mgr.keyPressed();
}
