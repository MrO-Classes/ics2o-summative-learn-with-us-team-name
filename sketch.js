var currentScene;
var activeScreen;

let r;

let n;

var questions;
var question;

var sceneNum = 0;


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

  if (currentScene === 11) {
    drawMiniGame();
  }
} // draw function

mouseClicked = function() {
  if (activeScreen === "Splash" || currentScene === 1) {
    if(mouseX >= 440 && mouseX <= 490 && mouseY >= 10 && mouseY <= 35) { 
    drawMenuScreen();
  }
} else if (activeScreen === "Menu" || currentScene === 2) { 
    if (mouseX >= 225 && mouseX <= 300 && mouseY >= 225 && mouseY <= 275) {
        drawGetReadyScreen();
      }
    if (mouseX >= 195 && mouseX <= 325 && mouseY >= 280 && mouseY <= 330) {
      //settings button
        drawSettings();
      }
    
    if (mouseX >= 160 && mouseX <= 360 && mouseY >= 335 && mouseY <= 385) {
      //instructions button
        drawInstructions();
      }
  
    if (mouseX >= 0 && mouseX <= 75 && mouseY >= 350 && mouseY <= 400) {
      //about button
        drawAbout();
      }
  
    if (mouseX >= 386 && mouseX <= 496 && mouseY >= 345 && mouseY <= 395) {
      //mini game button
        drawminiGame();
      }
  
  } else if (activeScreen === "GetReady" || currentScene === 3) {
    if (mouseX >= 0 && mouseX <= 70 && mouseY >= 0 && mouseY <= 40) {
      //back button
      drawMenuScreen();
      
    } else if (mouseX > 175 && mouseX < 325 && mouseY > 210 && mouseY < 260) {
      //verify button
      drawGameScene();
    }
    
  } else if (activeScreen === "Game" || currentScene === 4) {
    //mouse is not used in the game screen
    
  } else if (activeScreen === "Settings" || currentScene === 5) {
    if (mouseX > 0 && mouseX < 70 && mouseY > 0 && mouseY < 40) {
      //back button  
      drawMenuScreen();

    } else if (Difficulty === 1 && mouseX >= 298 && mouseX <= 348 && mouseY >= 280 && mouseY <= 305) {
      //Current Difficulty is easy (1), clicked on hard, so change to hard
      // clicked on hard, so change to hard
      Difficulty = 2;
      //console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen + ", change to 'Hard' was click");
      //refresh screen
      drawSettings();
    } else if (Difficulty === 2 && mouseX >= 173 && mouseX <= 223 && mouseY >= 280 && mouseY <= 305) {
      //Current Difficulty is hard (2)
      //clicked on easy, so change to easy
      Difficulty = 1;
      //console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen + ", change to 'Easy' was click");
      //refresh screen
      drawSettings();
    }
    
  } else if (activeScreen === "Instructions" || currentScene === 6) {
    if (mouseX >= 0 && mouseX <= 70 && mouseY >= 0 && mouseY <= 40) {
      //back button
      drawMenuScreen();
      
  } else if (activeScreen === "About" || currentScene === 7) {   
    if (mouseX > 0 && mouseX < 70 && mouseY > 0 && mouseY < 40) {
    //back button 
      drawMenuScreen();
    }
    
  } else if (activeScreen === "Question" || currentScene === 8) {
    var whichAnswerClicked = 0;
    var anAnswerWasClicked = false;

    //New Question button rect(300, 300, 165, 40, 5);
    var buttonX = 300;
    var buttonY = 300;
    var buttonWidth = 165;
    var buttonHeight = 40;
    if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
      
      // console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
      //   ", mouse coords=(" + mouseX + "," + mouseY + ")" +
      //   ", New Quesion clicked, changedQuestions=" + changedQuestions +
      //   ", maxNewQuestions=" + maxNewQuestions
      // );
      if (changedQuestions < maxNewQuestions) {
        changedQuestions++;
        // a new question
        question = new Question(); 
        drawQuestions();
        if (changedQuestions === maxNewQuestions) {
          //can't have any more new questions
          HideNewQuestionButton();
        }
      }
    } 

    //All Answer buttons = same y & same size
    buttonY = 200;
    buttonWidth = 70;
    buttonHeight = 40;

    //answer 1
    buttonX = 100;
    if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
      
      // console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
      //   ", mouse coords=(" + mouseX + "," + mouseY + ")" +
      //   ", Answer1 clicked"
      // );
      
      whichAnswerClicked = 1;
      anAnswerWasClicked = true;
    }

    //answer 2
    buttonX = 200;
    if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
     
      // console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
      //   ", mouse coords=(" + mouseX + "," + mouseY + ")" +
      //   ", Answer2 clicked"
      // );
      
      whichAnswerClicked = 2;
      anAnswerWasClicked = true;
    }

    //answer 3
    buttonX = 300;
    if (mouseX >= buttonX & mouseX <= (buttonX + buttonWidth) && mouseY >= buttonY && mouseY <= (buttonY + buttonHeight)) {
      
      // console.log("sketch.js: mouseClicked = function(), activeScreen=" + activeScreen +
      //   ", mouse coords=(" + mouseX + "," + mouseY + ")" +
      //   ", Answer3 clicked"
      // );
      
      whichAnswerClicked = 3;
      anAnswerWasClicked = true;
    }

    if (anAnswerWasClicked === true) {
      if (question.correctPosition === whichAnswerClicked) {
        Correct();
      } else {
        Wrong();
      }
      //get a new question ready for next time
      question = new Question();
      //give player new question ability again
      changedQuestions = 0;
    }

  } else
  if (currentScene === 9 || activeScreen === "Correct") {

    // if (mouseX > 256 && mouseX < 326) {
    //   if (mouseY > 300 && mouseY < 340) {
    //     drawQuestions();
    //   }
    // }
  } else
  if (currentScene === 10) {
    // if (mouseX > 256 && mouseX < 326) {
    //   if (mouseY > 300 && mouseY < 340) {
    //     drawQuestions();
    //   }
    // }
  } else {
    console.log("sketch.js: mouseClicked = function(), UNKNOWN: currentScene=" + currentScene + ", activeScreen=" + activeScreen);


  }
}
}
