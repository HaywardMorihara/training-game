Controller = function() {
	
	var upKey;
	var downKey;
	var leftKey;
	var rightKey;
	var spaceKey;
	var enterKey;
	var bKey;

	// var gamePads;

	function init() {
        this.upKey = Game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.downKey = Game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.leftKey = Game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = Game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.spaceKey = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.enterKey = Game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        this.bKey = Game.input.keyboard.addKey(Phaser.Keyboard.B);

     //    Game.input.gamepad.start();
	    // this.gamePads = Game.input.gamepad.pad1;
    }

	return {
		upKey: upKey,
		downKey: downKey,
		leftKey: leftKey,
		rightKey: rightKey,
		spaceKey: spaceKey,
		enterKey: enterKey,
		bKey: bKey,
		// gamePads: gamePads,
		init: init
	}
}();