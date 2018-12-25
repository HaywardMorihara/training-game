Pokemon = function() {

  var pokemon;

  var speed = 100;

  var scale = 1.5;

  var fps = 10;

  function init() {
    this.pokemon = Character.create(200, 200, 'cyndaquil', scale);

    this.pokemon.animations.add('walk-down', [0, 1, 2, 1]);
    this.pokemon.animations.add('walk-up', [3, 4, 5, 4]);
    this.pokemon.animations.add('walk-side', [6, 7, 8, 7]);
  }

  function update() {
    this.pokemon.direction = Direction.NONE;

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
