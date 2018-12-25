Behavior = function() {

    function follow(subject, target, threshold) {
        var xDiff = Math.abs(subject.x - target.x);
        var yDiff = Math.abs(subject.y - target.y);

        if (xDiff >= yDiff && xDiff > threshold) {
            if (subject.x > target.x) {
                subject.direction = Direction.LEFT;
            } else {
                subject.direction = Direction.RIGHT;
            }
        } else if (yDiff > xDiff && yDiff > threshold) {
            if (subject.y > target.y) {
                subject.direction = Direction.UP;
            } else {
                subject.direction = Direction.DOWN;
            }
        }  else {
            subject.direction = Direction.NONE;
        }
    }

    return {
        follow: follow
    }
}();
