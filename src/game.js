const Asteroid = require("./asteroid");

function Game (){
    const DIM_X = 500;
    const DIM_Y = 500;
    const NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
    let array = []
    for (let i = 0 ; i < NUM_ASTEROIDS ; i++){
        let object = {
            pos: [this.randomPosition(0, DIM_X), this.randomPosition(0, DIM_Y)]
        }
        let asteroid = new Asteroid(object);
        array.push(asteroid);
    };
    return array
}

Game.prototype.randomPosition = function(min, max){
    let min = Math.ceil(min);
    let max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}