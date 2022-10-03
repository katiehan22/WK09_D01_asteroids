console.log("Webpack is working!");
const canvas = document.getElementById("game-canvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
window.MovingObject = MovingObject;

// const mo = new MovingObject({
//   pos: [250, 250],
//   vel: [10, 10],
//   radius: 100,
//   color: "#00FF00"
// });

// mo.draw(ctx);
// mo.move();
// mo.draw(ctx);

// asteroid1 = new Asteroid({
//   pos: [100, 100]
// })

// asteroid1.draw(ctx);
// asteroid1.move();
// asteroid1.draw(ctx);
// console.log(asteroid1.vel);

// asteroid2 = new Asteroid({
//   pos: [200, 200]
// })

// asteroid2.draw(ctx);
// asteroid2.move();
// asteroid2.draw(ctx);
// console.log(asteroid2.vel);

// let game = new Game();
let gameView = new GameView(ctx);
gameView.start();