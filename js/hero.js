$.Hero = function () {
	this.x = 75;
	this.y = $.canvas.height - 41;
    this.vy = 0.0;

	this.background = '#f02f2f';
    this.onGround = true;
    this.gravity = 0.41875;
    this.listen();
};

$.Hero.prototype.listen = function () {
    var self = this;
    window.addEventListener("mousedown", function (e) {
        self.startJump(e);
    }, false);
};

$.Hero.prototype.render = function () {
    $.Draw.rect(this.x, this.y, 40, 40, this.background);
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
    
    if (this.onGround && this.y > 60) {
        this.vy = -12;
    }
};
