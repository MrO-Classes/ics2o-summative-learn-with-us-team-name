var Goals = 0;
var EnemyGoals = 0;

function Wrong() {
  currentScene = 10;
  activeScreen = "Wrong";
  EnemyGoals++;

  draw = function() {

    if (mouseX > 256 && mouseX < 326 && mouseIsPressed) {
      if (mouseY > 300 && mouseY < 340) {
        drawGameScene();
      }
    }

    background(255, 0, 0)
    textSize(50)
    text("Wrong!", 175, 100)
    textSize(30);
    text("Enemy scored a goal", 115, 200)
    drawButton(256, 300, "back")
  }
}
