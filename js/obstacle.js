$.Obstacle = function () {
	this.x = $.canvas.width + 10;
	this.y = $.base_y - Math.floor(Math.random() * 550) + 1;
    this.vx = 2;
    this.height = Math.floor(Math.random() * 10);
	this.background = '#754c24';
};

$.Obstacle.prototype.render = function () {
    $.Draw.rect(this.x, this.y, 40, 40, this.background);
};

$.Obstacle.prototype.update = function () {
    this.x -= this.vx;

    //if (
};
