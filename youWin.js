function Win() {
  currentScene = 12;
  activeScreen = "Win";
  draw = function() {
    textSize(50);
    background(26, 226, 0);
    text("YOU WIN!", 125, 100);
    text("You Scored 5 Goals!!!", 10, 200);
    textSize(20);
    text("Press play (top left of screen) to play again", 60, 370);
  }
}