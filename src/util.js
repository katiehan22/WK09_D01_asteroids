
const Util = {}

Util.inherits = function (childClass, parentClass) {
    function Surrogate (){}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}

Util.randomVec = function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}

// Scale the length of a vector by the given amount.
Util.scale = function(vec, m) {
    return [vec[0] * m, vec[1] * m];
}

module.exports = Util; // remember to require this when necessary