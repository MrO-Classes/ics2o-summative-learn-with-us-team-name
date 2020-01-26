function drawGetReadyScreen() {
  currentScene = 3;
  activeScreen = "GetReady";
  
  fill(0);
  background(255, 128, 0);
  textSize(50);
  text('Get Ready Racer!!!', 40, 150);
  image(img_Capitals, 25, 270, 140, 110);
  image(img_Auston, 340, 270, 140, 110);
  BackButton();
  drawVerifyButton();
}
