const Asteroid = require("./asteroid");

function Game (){
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
    console.log(this.asteroids);
}

Game.DIM_X = 500
Game.DIM_Y = 500

Game.prototype.addAsteroids = function(){
    let array = [];
    for (let i = 0 ; i < this.NUM_ASTEROIDS ; i++){
        let object = {
            pos: [this.randomPosition(0, Game.DIM_X), this.randomPosition(0, Game.DIM_Y)],
            game: this
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
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

Game.prototype.wrap = function(pos) {
    let x = pos[0];
    let y = pos[1];
    if(x > Game.DIM_X) {
        x = 0;
    } else if (x < 0) {
        x = Game.DIM_X;
    }

    if(y > Game.DIM_Y) {
        y = 0;
    } else if(y < 0) {
        y = Game.DIM_Y;
    }

    return [x, y];
}

Game.prototype.checkCollisions = function(){
    for (let i = 0 ; i < this.asteroids.length - 1 ; i++){
        for (let j = i + 1 ; j < this.asteroids.length ; j++){
            if (this.asteroids[i].isCollidedWith(this.asteroids[j]) === true){
                // alert("COLLISION");
                this.asteroids[i].collideWith(this.asteroids[j]);
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    let i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i, 1);
}

module.exports = Game;