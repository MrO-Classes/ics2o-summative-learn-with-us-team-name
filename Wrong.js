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
        
        //stop horn && dead
        mySound3.stop();
        mySound1.stop();
        
        //main theme
        mySound.setVolume(5);
        mySound.play();
      
        //pipe noise
        mySound2.setVolume(10);
        mySound2.play();
      }
    }

    background(255, 0, 0)
    textSize(50)
    text("Wrong! You Missed!", 25, 100)
    text("Enemies scored!", 50, 200)
    drawButton(256, 300, "back")
  }
}