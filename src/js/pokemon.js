Pokemon = function() {

    var pokemon;

    var speed = 100;

    var scale = 1.5;

    var fps = 10;

    var proxAff = 50; //AKA Proximity Affinity

    // Should this be called "create" instead? Because of how its used in character.js
    function init() {
        this.pokemon = Character.create(200, 200, 'cyndaquil', scale);

        this.pokemon.animations.add('walk-down', [0, 1, 2, 1]);
        this.pokemon.animations.add('walk-up', [3, 4, 5, 4]);
        this.pokemon.animations.add('walk-side', [6, 7, 8, 7]);
    }

    // Should it be some "world" object rather than just a trainer that gets passed in?
    function update(trainer) {
        Behavior.follow(this.pokemon, trainer, proxAff);

        Character.update(this.pokemon, speed);
    }

    function render() {
        Character.render(this.pokemon, scale, fps)
    }

    return {
        pokemon: pokemon,
        init: init,
        update: update,
        render: render
    }
}();
