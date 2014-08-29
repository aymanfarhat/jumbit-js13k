$.Particle = function (x, y) {
    this.type='particle';
	this.x = x;
	this.y = y;

    this.height = 6;
    this.width = 6;
	this.background = '#754c24';
    this.remove = false;

    this.opacity = 1;
    this.fade = 0.01;
    this.dir = (Math.random() * 2 > 1)? 1: -1;
    this.vx = (Math.random() * 4) * this.dir;
    this.vy = (Math.random() * 7);
                     
};

$.Particle.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.width, this.height, 'rgba(117, 76, 36,' + this.opacity + ')');
};

$.Particle.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.99;
    this.vy *= 0.99;

    this.opacity -= this.fade;

    if(this.opacity <= 0){
        this.remove = true;
    }
};
