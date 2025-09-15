$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(175, 250, 60, 10, "red");
createPlatform(175, 500, 60, 10, "red");
createPlatform(350, 125, 60, 10, "red");
createPlatform(350, 375, 60, 10, "red");
createPlatform(350, 625, 60, 10, "red");
createPlatform(525, 250, 60, 10, "red");
createPlatform(525, 500, 60, 10, "red");
createPlatform(700, 125, 60, 10, "red");
createPlatform(700, 375, 60, 10, "red");
createPlatform(700, 625, 60, 10, "red");
createPlatform(875, 250, 60, 10, "red");
createPlatform(875, 500, 60 ,10, "red")
createPlatform(1050, 125, 60 ,10, "red");
createPlatform(1050, 375, 60, 10, "red");
createPlatform(1050, 625, 60, 10, "red");
createPlatform(1225, 250, 60, 10, "red");
createPlatform(1225, 500, 60, 10, "red");
    // TODO 3 - Create Collectables
createCollectable("red", 175, 225);
createCollectable("blue", 525, 225);
createCollectable("yellow", 525, 525);
createCollectable("green", 1050, 400);
//     // TODO 4 - Create Cannons
createCannon("top", 275, 2000);
createCannon("bottom", 625, 1750);
createCannon("top", 975, 1500);
createCannon("bottom", 1125, 1250);
createCannon("left", 200, 1500);
createCannon("right", 500, 1500)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
