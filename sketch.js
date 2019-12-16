var currentScene;
var x = 0;
var y = 0;
var speedY = 2;
var speedX = 2;
let img;


function setup() {
  createCanvas(500, 400);
  img = loadImage('assets/ICS20Logo2.jpg');
}

function draw() {
  
}

  var drawScene1 = function() {
    currentScene = 1;

    background(0);
    image(img, x, y, 200, 200);
    y = y + speedY;

    if (y > 200) {
      speedY = -2;
    }

    if (y < 0) {
      speedY = 2;
    }

    x = x + speedX;

    if (x > 300) {
      speedX = -2;
    }

    if (x < 0) {
      speedX = 2;
    }
    drawButton();
  }

  var drawScene2 = function() {
    currentScene = 2;
  };

  var drawScene3 = function() {
    currentScene = 3;
  };

  var drawScene4 = function() {
    currentScene = 4;
  };

  var drawScene5 = function() {
    currentScene = 5;
  };

  var drawScene6 = function() {
    currentScene = 6;
  };

  var drawScene7 = function() {
    currentScene = 7;
  };

  var drawScene8 = function() {
    currentScene = 8;
  };

  var drawScene9 = function() {
    currentScene = 9;
  };

  var drawScene10 = function() {
    currentScene = 10;
  };

  var drawScene11 = function() {
    currentScene = 11;
  };



  mouseClicked = function() {
    if (mouseX >= 340 && mouseY <= 45) {
      if (currentScene === 1) {
        drawScene2();
      } else if (currentScene === 2) {
        drawScene3();
      } else if (currentScene === 3) {
        drawScene4();
      } else if (currentScene === 4) {
        drawScene5();
      } else if (currentScene === 5) {
        drawScene1();
      }
    }
  }
