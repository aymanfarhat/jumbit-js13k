$ = {};

$.width = 800;
$.height = 600;

$.init = function () {
    $.RATIO = $.width / $.height;
    $.currentWidth = $.width;
    $.currentHeight = $.height;
    $.canvas = document.getElementsByTagName('canvas')[0];
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    $.ctx = $.canvas.getContext('2d');

    $.resize();

    var myHero = new $.Hero();
    myHero.render();
};


$.resize = function() {

    $.currentHeight = window.innerHeight;
    $.currentWidth = $.currentHeight * $.ratio;

    if ($.android || $.ios) {
        document.body.style.height = (window.innerHeight + 50) + 'px';
    }

    $.canvas.style.width = $.currentWidth + 'px';
    $.canvas.style.height = $.currentHeight + 'px';

    window.setTimeout(function() {
            window.scrollTo(0,1);
    }, 1);
}

$.Draw = {
    clear: function() {
        $.ctx.clearRect(0, 0, $.width, $.height);
    },

    rect: function(x, y, w, h, col) {
        $.ctx.fillStyle = col;
        $.ctx.fillRect(x, y, w, h);
    },

    text: function(string, x, y, size, col) {
        $.ctx.font = 'bold '+size+'px Monospace';
        $.ctx.fillStyle = col;
        $.ctx.fillText(string, x, y);
    }
};

$.Hero = function () {
	this.x = 5;
	this.y = $.canvas.height -41;
	this.background = 'red';
};

$.Hero.prototype.render = function () {
    $.Draw.clear();
    $.Draw.rect(this.x, this.y, 40, 40, 'red');
};

window.addEventListener('load', $.init, false);
window.addEventListener('resize', $.resize, false);
