console.log("Webpack is working!");
const canvas = document.getElementById("game-canvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

const mo = new MovingObject({
  pos: [250, 250],
  vel: [10, 10],
  radius: 100,
  color: "#00FF00"
});

mo.draw(ctx);
mo.move();
mo.draw(ctx);