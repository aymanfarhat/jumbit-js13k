$.Hero = function () {
	this.x = 5;
	this.y = $.canvas.height -41;
	this.background = 'red';
};

$.Hero.prototype.render = function () {
    $.Draw.clear();
    $.Draw.rect(this.x, this.y, 40, 40, 'red');
};
