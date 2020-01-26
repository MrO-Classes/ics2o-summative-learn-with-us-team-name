function drawMenuScreen() {
  currentScene = 2;
  activeScreen = "Menu";

  background(255, 255, 255);
  fill(0);
  textSize(35);
  text('Hockey Racer!', 145, 150);

  image(img_McDavid, 0, 0, 150, 100);
  image(img_Sydney, 350, 0, 150, 100);
  image(img_StickLeft, 25, 125, 100, 200);
  image(img_StickRight, 375, 125, 100, 200);

  PlayButton();
  SettingsButton();
  IntructionsButton();
  AboutButton();
  drawMiniGameButton();
}
