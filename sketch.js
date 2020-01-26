var currentScene;
var activeScreen;
let r;
let n;
var questions;
var question;
var sceneNum = 0;

function preload() {
  mySound1 = loadSound('assets/Death.mp3');
  mySound2 = loadSound('assets/Pipe.mp3');
  mySound3 = loadSound('assets/GoalHorn.mp3');
  mySound = loadSound('assets/MainTheme.mp3');
  mySound4 = loadSound('assets/Champions.mp3');
  mySound5 = loadSound('assets/MenuScreenMusic.mp3');
}

function setup() {
  console.log("sketch.js: function setup()");
  createCanvas(500, 400);
  //preloading images
  img_teamLogo = loadImage('assets/ICS20Logo.jpg');
  img_player = loadImage("assets/GoodPlayer.jpg");
  img_mainBackground = loadImage("assets/MainGameBackground.jpg");
  img_ememy = loadImage("assets/Enemy.jpg");
  img_puck = loadImage("assets/Puck.jpg");
  img_miniBackground = loadImage("assets/MiniGameBackground.png");
  img_Auston = loadImage("assets/AustonMatthews1.jpg");
  img_Sydney = loadImage("assets/SydneyCrosby.jpg");
  img_Chara = loadImage("assets/ZdenoChara.jpg");
  img_Quick = loadImage("assets/JohnathanQuick.jpg");
  img_McDavid = loadImage("assets/ConnorMcDavid.jpg");
  img_Capitals = loadImage("assets/WashingtonCapitals.jpg");
  img_StickLeft = loadImage("assets/HockeyStickLeft.jpg");
  img_StickRight = loadImage("assets/HockeyStickRight.jpg");
  img_Chicken = loadImage("assets/chicken.jpeg");
  img_Learn = loadImage("assets/LearnWithUs.jpg");
  img_MrO = loadImage("assets/MrO.jpg");
  drawSplashScreen();
  mySound5.setVolume(5);
  mySound5.play();
  // so the vars setup in SplashScreen.js are global

  var r = random(400);
  var n = random(20, 260);

  //create the initial question
  question = new Question();
  console.log("sketch.js: in setup, returned question.correctAnswer=" + question.correctAnswer);
  console.log("sketch.js: in setup, returned question.type=" + question.type);
  console.log("sketch.js: function setup() - DONE!");
}


draw = function() {
  // this is continuously called, 
  //currentScene or activeScreen determine which particular drawFunction to call
  //console.log("sketch.js: draw = function(); currentScene=" + currentScene);


  if (activeScreen === "Splash" || currentScene === 1) {
    // needs to be continuously called because it is dynamic
    drawSplashScreen();
  }

  if (activeScreen === "Game" || currentScene === 4) {
    // needs to be continuously called because it is dynamic
    drawGameScene();
  }
  if (activeScreen === "Settings" || currentScene === 5) {
    //static screen so we really don't want to keep calling drawSettings
    //except when difficulty is changed we need to draw again
    // but that is handled in mouseClick 
  }


  if (activeScreen === "Question" || currentScene === 8) {
    //static sceen, mouse clicks handle events
  }

  if (activeScreen === "Correct" || currentScene === 9) {
    //static sceen, mouse clicks handle events
    //    Correct();
  }

  if (activeScreen === "Wrong" || currentScene === 10) {
    //static sceen, mouse clicks handle events
    //Wrong();
  }
} // draw function

mouseClicked = function() {

  console.log("mouseClicked, activeScreen=" + activeScreen + ",currentScene=" + currentScene);


  if (activeScreen === "Splash" || currentScene === 1) {
    //next button
    if (mouseX >= 440 && mouseX <= 490 && mouseY >= 10 && mouseY <= 35) {
      drawMenuScreen();
    }


  } else if (activeScreen === "Menu" || currentScene === 2) {
    //play button 
    if (mouseX >= 225 && mouseX <= 300 && mouseY >= 225 && mouseY <= 275) {
      drawGetReadyScreen();
    }

    //settings button  
    if (mouseX >= 195 && mouseX <= 325 && mouseY >= 280 && mouseY <= 330) {
      drawSettings();
    }

    //instructions button
    if (mouseX >= 160 && mouseX <= 360 && mouseY >= 335 && mouseY <= 385) {
      drawInstructions();
    }

    //about button      
    if (mouseX >= 0 && mouseX <= 75 && mouseY >= 350 && mouseY <= 400) {
      drawAbout();
    }
    
    
  } else if (activeScreen === "GetReady" || currentScene === 3) {
    //back button
    if (mouseX > 0 && mouseX < 70 && mouseY > 0 && mouseY < 40) {
      drawMenuScreen();


      //verify button
    } else if (mouseX >= 175 && mouseX <= 325 && mouseY >= 210 && mouseY <= 260) {
      drawGameScene();

      //main theme
      mySound.setVolume(5);
      mySound.play();

      //pipe noise
      mySound2.setVolume(10);
      mySound2.play();

      //stopping intro music
      mySound5.stop();
    }


  } else if (activeScreen === "Game" || currentScene === 4) {
    //mouse is not used in the game screen

    //stopping goal horn
    mySound3.stop();
    mySound1.stop();


  } else if (activeScreen === "Settings" || currentScene === 5) {


    //back button
    if (mouseX >= 0 && mouseX <= 70 && mouseY >= 0 && mouseY <= 40) {
      drawMenuScreen();


      //difficulty
    } else if (Difficulty === 1 && mouseX >= 298 && mouseX <= 348 && mouseY >= 280 && mouseY <= 305) {
      //Current Difficulty is easy (1)
      //clicked on hard, so make it hard
      Difficulty = 2;
      //refresh the screen
      drawSettings();


      //difficulty
    } else if (Difficulty === 2 && mouseX >= 173 && mouseX <= 223 && mouseY >= 280 && mouseY <= 305) {
      //Current Difficulty is hard (2)
      // clicked on easy, so make it easy
      Difficulty = 1;
      //refresh the screen
      drawSettings();


    }
    
  } else if (activeScreen === "Instructions" || currentScene === 6) {


      //back button
      if (mouseX >= 0 && mouseX <= 70 && mouseY >= 0 && mouseY <= 40) {
        drawMenuScreen();
      }


    } else if (activeScreen === "About" || currentScene === 7) {


      //back button
      if (mouseX >= 0 && mouseX <= 70 && mouseY >= 0 && mouseY <= 40) {
        drawMenuScreen();
      }



    } else if (activeScreen === "Question" || currentScene === 8) {


      console.log("sketch.js: mouseClicked = function(), currentScene ===" & currentScene + ", activeScreen=" +
        activeScreen + ",mouseX=" + mouseX + ", mouseY=" + mouseY);
      var whichAnswerClicked = 0;
      var anAnswerWasClicked = false;

      //New Question button rect(300, 300, 165, 40, 5);
      var buttonX = 300;
      var buttonY = 300;
      var buttonWidth = 165;
      var buttonHeight = 40;
      if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
        console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
          ", mouse coords=(" + mouseX + "," + mouseY + ")" +
          ", New Quesion clicked, changedQuestions=" + changedQuestions +
          ", maxNewQuestions=" + maxNewQuestions
        );
        if (changedQuestions < maxNewQuestions) {
          changedQuestions++;
          question = new Question(); // a new question
          drawQuestions();
          if (changedQuestions === maxNewQuestions) {
            //can't have any more new questions
            HideNewQuestionButton();
          }
        }
      } // NewQuestion button was clicked 

      //All Answer buttons are at the same y and are the same size
      buttonY = 200;
      buttonWidth = 70;
      buttonHeight = 40;

      //Answer1 rect(100, 200, 70, 40, 5);
      buttonX = 100;
      if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
        console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
          ", mouse coords=(" + mouseX + "," + mouseY + ")" +
          ", Answer1 clicked"
        );
        whichAnswerClicked = 1;
        anAnswerWasClicked = true;
      } // Answer1 button was clicked 

      //Answer2  rect(200, 200, 70, 40, 5);
      buttonX = 200;
      if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
        console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
          ", mouse coords=(" + mouseX + "," + mouseY + ")" +
          ", Answer2 clicked"
        );
        whichAnswerClicked = 2;
        anAnswerWasClicked = true;
      } // Answer2 button was clicked 

      //Answer3  rect(300, 200, 70, 40, 5);
      buttonX = 300;
      if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
        console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
          ", mouse coords=(" + mouseX + "," + mouseY + ")" +
          ", Answer3 clicked"
        );
        whichAnswerClicked = 3;
        anAnswerWasClicked = true;
      } // Answer3 button was clicked 

      if (anAnswerWasClicked === true) {
        if (question.correctPosition === whichAnswerClicked) {
          Correct();

          //air horn
          mySound3.setVolume(20);
          mySound3.play();
          mySound.stop();

        } else {
          Wrong();

          //mario dies sound
          mySound1.setVolume(20);
          mySound1.play();
          mySound.stop();
        }
        // get a new question ready for next time
        question = new Question(); // a new question
        // and give them new question ability again
        changedQuestions = 0;
      }

    } else if (currentScene === 9 || activeScreen === "Correct") {
      //no active buttons in correct scene


    } else if (currentScene === 10 || activeScreen === "Wrong") {
      //no active buttons in wrong scene


    } else if (currentScene === 11 || activeScreen === "Loose") {

      console.log("hihihihihihihihihihihihihihih");
      if (mouseX >= 0 && mouseX <= 400 && mouseY >= 0 && mouseY <= 500) {
        drawMenuScreen();
      }


    } else if (currentScene === 12 || activeScreen === "Win") {

      console.log("hihihihihihihihihihihihihihih");
      drawMenuScreen();
      console.log("after drawMenuScreen");

      if (mouseX >= 0 && mouseX <= 400 && mouseY >= 0 && mouseY <= 500) {
        drawMenuScreen();
      }

    }
  }