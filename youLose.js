function Lose() {
  currentScene = 13;
  activeScreen = "Lose";
  draw = function() {
    textSize(50);
    background(26, 226, 0);
    text("YOU LOOSE!", 125, 100);
    text("Enemy scored 5 goals", 0, 200);
    textSize(20);
    text("Press play (top left of screen) to play again", 60, 370);
  }
}
