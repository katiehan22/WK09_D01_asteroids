const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(object) {
  let obj = {
    pos: object.pos,
    vel: Util.randomVec(50),
    radius: 30,
    color: 'red'
  }

  MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;