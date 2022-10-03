const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.game.draw.bind(this.game, this.ctx), 200);
  setInterval(this.game.moveObjects.bind(this.game), 200);
}

module.exports = GameView;