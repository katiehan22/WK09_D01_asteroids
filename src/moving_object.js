
function MovingObject(object){
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
    this.game = object.game;
}

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject){
		let a = this.pos[0] - otherObject.pos[0]
		let b = this.pos[1] - otherObject.pos[1]
		let distance = Math.sqrt( (a * a) + (b * b))
		if (distance < this.radius + otherObject.radius){
			return true
		} else {
			return false
		}
}

MovingObject.prototype.collideWith = function(otherObject) {
    // if(this.isCollidedWith(otherObject) === true) {
    //     this.game.remove(this);
    //     this.game.remove(otherObject);
    // }
    this.game.remove(this);
    this.game.remove(otherObject);
}





module.exports = MovingObject;
