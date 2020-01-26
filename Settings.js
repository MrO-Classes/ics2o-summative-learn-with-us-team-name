var Difficulty = 1;
const buttonEasy = 173;
const buttonHard = 298;
var currentButton = buttonEasy; //to move the "selection" from easy to hard, set default=easy



var drawSettings = function() {
  //console.log("Settings.js: var drawSettings = function(), Difficulty=" + Difficulty +", buttonX=" + buttonX);

  currentScene = 5;
  activeScreen = "Settings";
  
  
  fill(255, 0, 0);
  background(0, 204, 204);
  textSize(35);
  text('Settings', 195, 60);
  image(img_Quick, 50, 70, 200, 160);
  image(img_Chara, 300, 70, 150, 160);
  
  textSize(20);

  text('Difficulty', 220, 265);
  
  
  if (Difficulty === 1) {
    //Easy
    currentButton = buttonEasy;
    
  } else {
    //med
    currentButton = buttonHard;
  }
  
  fill(0);
  rect(currentButton, 280, 50, 25);
  fill(255, 0, 0);
  text('Easy', 175, 300);
  text('Hard', 300, 300);

  BackButton();
}
