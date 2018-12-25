Trainer = function() {

    var trainer;

    var speed = 100;

    var scale = 2;

    var fps = 10;

    function init() {
        this.trainer = Character.create(300, 200, 'trainer', scale);

        this.trainer.animations.add('walk-down', [0, 1, 2, 1]);
        this.trainer.animations.add('walk-up', [3, 4, 5, 4]);
        this.trainer.animations.add('walk-side', [6, 7, 8, 7]);
    }

    function update() {
        if (Controller.upKey.isDown) {
            this.trainer.direction = Direction.UP;
        } else if (Controller.downKey.isDown) {
            this.trainer.direction = Direction.DOWN;
        } else if (Controller.rightKey.isDown) {
            this.trainer.direction = Direction.RIGHT;
        } else if (Controller.leftKey.isDown) {
            this.trainer.direction = Direction.LEFT;
        } else {
            this.trainer.direction = Direction.NONE;
        }

        Character.update(this.trainer, speed);
    }

    function render() {
        Character.render(this.trainer, scale, fps)
    }

    function debug() {
        Character.debug(this.trainer);
    }

    return {
        trainer: trainer,
        init: init,
        update: update,
        render: render,
        debug: debug
    }
}();
