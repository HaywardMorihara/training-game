var Game;

Main = {
  debugMode: false,
  screenWidth: 800,
  screenHeight: 800
};

function preload() {
  //Sprites from https://www.spriters-resource.com/ds_dsi/pokemonmysterydungeonexplorersoftimedarkness/
  Game.load.spritesheet('trainer', 'assets/sprites/trainer.png', 16, 20);
  Game.load.spritesheet('cyndaquil', 'assets/sprites/cyndaquil.png', 21, 21);
}

function create() {

  Game.stage.backgroundColor = '#124184';

  Game.physics.startSystem(Phaser.Physics.ARCADE);

  Controller.init();

  Character.init();

  Trainer.init();

  Pokemon.init();
}

function update() {
  Trainer.update();

  Pokemon.update();

  Game.physics.arcade.collide(Character.characterGroup);
}

function render() {
  Trainer.render();

  Pokemon.render();

  if (Main.debugMode) {
    Trainer.debug();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  Game = new Phaser.Game(Main.screenWidth, Main.screenHeight, Phaser.AUTO, 'training-game',
      { preload: preload,
        create: create,
        update: update,
        render: render });
}, false);
