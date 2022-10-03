const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.game.moveObjects.bind(this), 20);
  setInterval(this.game.draw.bind(this, this.ctx), 20);
}

module.exports = GameView;