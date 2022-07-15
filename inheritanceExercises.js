Function.prototype.inherits = function(parentClass) {
    // surrogate method
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
    return this;
}

Function.prototype.inherits = function(parentClass) {
    // object.create method
    this.prototype = Object.create(parentClass.prototype);
    return this;
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);