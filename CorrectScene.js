function Correct() {
  currentScene = 9;
  activeScreen = "Correct";
  Goals++;
  draw = function() {

    if (mouseX > 256 && mouseX < 326 && mouseIsPressed) {
      if (mouseY > 300 && mouseY < 340) {
        drawGameScene();
        
        //stopping horn && dead
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
    textSize(50)
    background(26, 226, 0)
    text("Correct! You scored!", 20, 100)
    text("Enemies missed!", 75, 200)
    drawButton(256, 300, "next")
  }
}