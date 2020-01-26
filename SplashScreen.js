var y = 200;
var x = 100;
var speedX = 2;
var speedY = 2;

function drawSplashScreen() {
  currentScene = 1;
  activeScreen = "Splash";

  background(0);
  image(img_teamLogo, x, y, 200, 200);


  y = y + speedY;
  if (y > 200) {
    //change directions
    speedY = -2;
  }
  if (y < 0) {
    //change directions
    speedY = 2;
  }


  x = x + speedX;
  if (x > 300) {
    //change directions
    speedX = -2;
  }
  if (x < 0) {
    //change directions
    speedX = 2;
  }
  NextButton();
}