function Correct() {
  currentScene = 9;
  activeScreen = "Correct";
  Goals++;
  draw = function() {

    if (mouseX > 256 && mouseX < 326 && mouseIsPressed) {
      if (mouseY > 300 && mouseY < 340) {
        drawGameScene();
      }
    }
    textSize(50)
    background(26, 226, 0)
    text("Correct!", 200, 100)
    text("You Scored A Goal!!", 0, 200)
    drawButton(256, 300, "next")
  }
}
