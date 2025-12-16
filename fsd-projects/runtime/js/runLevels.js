var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(
        hitZoneSize,
        damageFromObstacle
      );
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
    }
    createSawBlade(500, 290);
    createSawBlade(1000, 310);
    createSawBlade(1500, 225);

    function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    enemy.velocityX = -1
    enemy.onPlayerCollision = function () {};
    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
    };
  }
    createEnemy(400, groundY - 35);
    createEnemy(900, groundY - 50);
    createEnemy(1750, groundY - 25);

    function createReward(x, y) {
    var reward = game.createGameItem("reward", 25);
    var yellowSquare = draw.rect(50, 50, "yellow");
    yellowSquare.x = -25;
    yellowSquare.y = -25
    reward.addChild(yellowSquare);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -1
    reward.onPlayerCollision = function () {
      game.increaseScore(300);
      reward.fadeOut();
    };
    reward.onProjectileCollision = function () {
      reward.fadeOut();
    };
  }
    createReward(750, groundY - 100)
    createReward(1500, groundY - 100)
    createReward(2000, groundY - 100)

    function createMarker(x, y) {
    var marker = game.createGameItem("Marker", 25);
    var greySquare = draw.rect(50, 50, "grey");
    greySquare.x = -25;
    greySquare.y = -25
    marker.addChild(greySquare);
    marker.x = x;
    marker.y = y;
    game.addGameItem(marker);
    marker.velocityX = -1
    marker.onPlayerCollision = function () {
      startLevel();
    };
    marker.onProjectileCollision = function () {
      startLevel();
    };
  }
    createMarker(2500, groundY - 50)
    function startLevel() {
      // TODO 13 goes below here

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
