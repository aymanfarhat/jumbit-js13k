$.Hero = function () {
	this.x = 10;
	this.y = $.canvas.height - 41;
    this.vy = 0.0;

	this.background = 'red';
    this.onGround = true;
    this.gravity = 0.5;
    this.listen();
};

$.Hero.prototype.listen = function () {
    var self = this;
    window.addEventListener("mousedown", function (e) {
        self.startJump(e);
    }, false);
};

$.Hero.prototype.render = function () {
    $.Draw.clear();
    $.Draw.rect(this.x, this.y, 40, 40, 'red');
};

$.Hero.prototype.update = function () {
    this.vy += this.gravity;
    this.y += this.vy;

    if (this.y > $.canvas.height - 41) {
        this.vy = 0;
        this.y = $.canvas.height - 41;
        this.onGround = true;
    }
    
};

$.Hero.prototype.startJump = function () {
    this.vy = -5;

    if (this.onGround) {
        this.vy = -12;
    }
};
