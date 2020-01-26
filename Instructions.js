function drawInstructions() {
  console.log("Instructions.js: var drawInstructions =function()");
  currentScene = 6;
  activeScreen = "Instructions";
  fill(0);
  background(50, 200, 30);
  textSize(40);
  text('How to play', 160, 60);
  textSize(25);
  text('Hey Hockey Racer! The Ottawa Senators need your help! Skate the puck down the ice while avoiding the evil Toronto Maple Leafs! Press the space bar to navigate arround the maple leafs players and use your profound math knowledge to get math questions right and score. If you get the question wrong, Toronto scores! First team to 5 goals wins!', 5, 90, 500);
  textSize(35);
  fill(255, 0, 0);
  text('GOOD LUCK RACER!', 75, 375);

  BackButton();
}
