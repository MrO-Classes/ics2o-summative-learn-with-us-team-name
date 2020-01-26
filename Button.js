//called from SplashScreen
var NextButton = function() {
  fill(30, 40, 60);
  rect(440, 10, 50, 25, 10);
  fill(255, 0, 0);
  textSize(16);
  text("NEXT", 444, 29);
};

//called from MenuScreen
var PlayButton = function() {
  fill(0);
  rect(225, 225, 75, 50, 10);
  fill(255, 255, 255);
  textSize(26);
  text("PLAY", 230, 260);
};

//called from MenuScreen
var SettingsButton = function() {
  fill(0);
  rect(195, 280, 130, 50, 10);
  fill(255, 255, 255);
  textSize(26);
  text("SETTINGS", 195, 315);
};

//called from MenuScreen
var AboutButton = function() {
  fill(0);
  rect(4, 350, 75, 45, 10);
  fill(255, 255, 255);
  textSize(20);
  text("ABOUT", 7, 380);
};

//called from MenuScreen
var IntructionsButton = function() {
  //console.log("Button.js: var IntructionsButton = function()");
  fill(0);
  rect(160, 335, 200, 50, 10);
  fill(255, 255, 255);
  textSize(26);
  text("INSTRUCTIONS", 160, 370);
};

//called from AboutScreen
var BackButton = function() {
  //console.log("Button.js: var BackButton = function() ");
  fill(0);
  rect(4, 4, 70, 40, 10);
  fill(255, 255, 255);
  textSize(20);
  text("BACK", 11, 32);
};

//called from GetReadyScreen
var drawVerifyButton = function() {
  //console.log("Button.js: var drawVerifyButton = function()");
  fill(0);
  rect(175, 210, 150, 50, 10);
  fill(255, 255, 255);
  textSize(20);
  text("Click to Verify", 190, 240);
};

//called from QuestionScreen
var NewQuestionButton = function() {
  //console.log("Button.js: var NewQuestionButton = function() ");
  //fill(0);
  rect(300, 300, 165, 40, 5);
  fill(255, 255, 255);
  textSize(20);
  text("1 New Question", 315, 312);
};


var HideNewQuestionButton = function() {
  //console.log("Button.js: var NewQuestionButton = function() ");
  fill(0);
  rect(300, 300, 165, 40, 5);
  fill(34, 229, 229);
  textSize(20);
  text("Out of order", 320, 312);
};


//called from QuestionScreen
var AnswerButton = function(x, y, words) {
  //console.log("Button.js: var AnswerButton = function(x, y, words)");
  fill(255, 255, 255)
  rect(x, y, 70, 40, 5);
  fill(0, 0, 0)
  textAlign(LEFT, TOP)
  textSize(15)
  text(words, x + 20, y + 12);
}

//called from Wrong
var drawButton = function(x, y, words) {
  //console.log("Button.js: var drawButton = function(x, y, words)");
  AnswerButton(x, y, words);
  // fill(255, 255, 255)
  // rect(x, y, 70, 40, 5);
  // fill(0, 0, 0)
  // textAlign(LEFT, TOP)
  // textSize(15)
  // text(words, x + 20, y + 12);
}
