const Asteroid = require("./asteroid");

function Game (){
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
    let array = [];
    for (let i = 0 ; i < this.NUM_ASTEROIDS ; i++){
        let object = {
            pos: [this.randomPosition(0, this.DIM_X), this.randomPosition(0, this.DIM_Y)]
        }
        let asteroid = new Asteroid(object);
        array.push(asteroid);
    };
    return array;
}

Game.prototype.randomPosition = function(min, max){
    let min1 = Math.ceil(min);
    let max1 = Math.floor(max);
    return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

module.exports = Game;