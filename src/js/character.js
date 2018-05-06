Character = function() {

	var characterGroup;

	function init() {
		this.characterGroup = Game.add.group();

        Game.physics.enable(this.characterGroup, Phaser.Physics.ARCADE);

        this.characterGroup.enableBody = true;
        this.characterGroup.collideWorldBounds = true;
	}

	function create(x, y, spritesheet, scale) {
		var character = this.characterGroup.create(x, y, spritesheet);

	    character.anchor.setTo(.5,.5);
	    character.scale.setTo(scale,scale);

	    return character;
    }

    function update(character, speed) {
    	 if (character.direction == Direction.UP) {
    	 	character.body.velocity.x = 0;
    	 	character.body.velocity.y = -speed;
	     } else if (character.direction == Direction.DOWN) {
	     	character.body.velocity.x = 0;
	     	character.body.velocity.y = speed;
	     } else if (character.direction == Direction.RIGHT) {
	     	character.body.velocity.x = speed;
	     	character.body.velocity.y = 0;
	     } else if (character.direction == Direction.LEFT) {
	     	character.body.velocity.x = -speed ;
	     	character.body.velocity.y = 0;
	     } else {
	     	character.body.velocity.x = 0;
	     	character.body.velocity.y = 0;
	     }
    }

    function render(character, scale, fps) {
    	if (character.direction == Direction.UP) {
	        character.animations.play('walk-up', fps);
	     } else if (character.direction == Direction.DOWN) {
	        character.animations.play('walk-down', fps);
	     } else if (character.direction == Direction.RIGHT) {
	     	character.scale.x = -scale;
	        character.animations.play('walk-side', fps);
	     } else if (character.direction == Direction.LEFT) {
	     	character.scale.x = scale;
	     	character.animations.play('walk-side', fps);
	     }
    }

    function debug(character) {
	    Game.debug.body(character);
    	Game.debug.bodyInfo(character, 32, 32);
    }

	return {
		characterGroup: characterGroup,
		init: init,
		create: create,
		update: update,
		render: render,
		debug: debug
	}
}();