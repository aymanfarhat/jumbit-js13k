$.Obstacle = function () {
    this.type = 'obstacle';
	this.x = $.canvas.width + 10;
	this.y = $.base_y - Math.floor(Math.random() * 550) + 1;
    this.vx = $.speed;
    this.vy = 0;
    this.height = 40;
    this.width = 40;
	this.background = '#754c24';
    this.remove = false;
    this.hit = false;
    this.falling = false;
};

$.Obstacle.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.width, this.height, this.background);
};

$.Obstacle.prototype.update = function () {
    if (this.falling) {
        this.vy += $.gravity;
        this.y += this.vy;
    }

    this.x -= this.vx;

    this.remove = (this.x < -100);
};
