function drawAbout() {
  currentScene = 7;
  activeScreen = "About";

  fill(0);
  background(255, 20, 100);
  textSize(30);
  text('About the game', 150, 60);
  textSize(23.5);
  text('This game was created by Connor Shultz and', 5, 125);
  textSize(22);
  text('Tamjeed Zunayed in association with Mr Osudar ', 4, 160);
  text('         and the LearnWithUs Project ©', 50, 195);
  textSize(14);
  text('Copyright © Team Name 2020', 160, 380)
  textSize(18);
  text('ICS2O 2020', 200, 300);
  image(img_Learn, 5, 215, 150, 150);
  image(img_MrO, 345, 215, 150, 150);
  BackButton();
}