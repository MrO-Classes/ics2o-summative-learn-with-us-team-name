console.log("GameScene.js: line1 - loading");
var SPEED = 3;
console.log("GameScene.js: post init, SPEED=" + SPEED);
const goals2Win = 5;

function drawGameScene() {
  console.log("GameScene.js: function drawGameScene()");
  currentScene = 4;
  activeScreen = "Game"

  var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = loadImage("player.png");
    this.score = 0;
  };

  var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = loadImage('enemy.jpg');
  };

  var player = new Player(50, 300);

  var enemy = [];

  var puck = [];

  var Puck = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = loadImage('enemy.jpg');
  };

  for (var i = 0; i < 200; i++) {
    enemy.push(new Enemy(i * 125 + 300, random(20, 260)));
  }

  for (var p = 0; p < 200; p++) {
    puck.push(new Puck(p * 125 + 250, random(20, 260)));
  }

  var backgroundXs = [];

  for (var j = 0; j < 25; j++) {
    backgroundXs.push(j * 1000);
  }

  Player.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, 320);
    image(img_player, this.x, this.y, 40, 60);
  };

  Player.prototype.hop = function() {
    this.y -= 5;
  };

  Player.prototype.fall = function() {
    this.y += 5;
  };

  Player.prototype.checkForEnemyHit = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
      (stick.y >= this.y && stick.y <= (this.y + 40))) {
      stick.y = -400;
      this.score--;
    }
  };

  Player.prototype.checkForPuckGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
      (stick.y >= this.y && stick.y <= (this.y + 40))) {
      stick.y = -400;
      this.score++;
    }
  };

  Enemy.prototype.draw = function() {
    fill(89, 71, 0);
    image(img_ememy, this.x, this.y, 40, 60);
  };

  Puck.prototype.draw = function() {
    fill(89, 71, 0);
    image(img_puck, this.x, this.y, 20, 20);
  };

  draw = function() {
   if (activeScreen === "Question"  || activeScreen === "Win" ) {
//noLoop(); this stops everyting.
    
//    if (activeScreen != "Game") {
      //stop drawing for now
    } else {
      //ok, draw the game stuff 
      // static
      fill(153, 255, 235);
      rect(0, 360, 500, 40);


      for (var i = 0; i < backgroundXs.length; i++) {
        image(img_mainBackground, backgroundXs[i], 0, 1000, 360);
        backgroundXs[i] = 1;
        if (backgroundXs[i] <= -1000) {
          backgroundXs[i] = 1000;
        }
      }

      for (var k = 0; k < enemy.length; k++) {
        enemy[k].draw();
        player.checkForEnemyHit(enemy[k]);
        enemy[k].x -= SPEED;
      }

      for (var o = 0; o < puck.length; o++) {
        puck[o].draw();
        player.checkForPuckGrab(puck[o]);
        puck[o].x -= SPEED;
      }

      fill(255, 255, 255);
      textSize(18);
      text("Score: " + player.score, 20, 30);
      textSize(18);
      text("Our Goals: " + Goals, 20, 50);
      fill(255, 0, 0);
      text("Enemies' Goals: " + EnemyGoals, 300, 30);

      if (keyIsPressed && key === ' ') {
        player.hop();
      } else {
        player.fall();
      }

      player.draw();

      if (player.score >= 15 && Difficulty === 1) {
        textSize(40);
        text("Collect 15 pucks to shoot!", 20, 150);
        // NEED TO CHANGE currentScene to 8
        console.log("GameScene.js: function drawGameScene()....about to call drawQuestions();");
        drawQuestions();
      }
      
      if (player.score <= 2 && Difficulty === 2) {
      textSize(40);
      text("Collect 25 pucks to shoot!", 20, 150);
      }

      if (Difficulty === 2) {
        SPEED = 6;
        if (player.score >= 25) {
        // NEED TO CHANGE currentScene to 8
        drawQuestions();
      }
    }
      if (Goals === goals2Win) {
        Win();
        
        //champions music
        mySound4.setVolume(10);
        mySound4.play();
        
        //stopping theme song, air horn and/or die music
        mySound.stop();
        mySound3.stop();
        mySound1.stop();
      }
      if (EnemyGoals === 5) {
        Lose();
      }

      //console.log(SPEED);
    }


  }; //draw


}
