function Lose() {
  currentScene = 13

  draw = function() {
    textSize(50);
    background(26, 226, 0)
    text("you lose!", 150, 100)
    text("enemy scored 5 goals", 0, 200)
  }
}
