window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

$ = {};

$.width = 800;
$.height = 600;

$.entities = [];

$.init = function () {
    $.RATIO = $.width / $.height;
    $.currentWidth = $.width;
    $.currentHeight = $.height;
    $.canvas = document.getElementsByTagName('canvas')[0];
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    $.ctx = $.canvas.getContext('2d');

    $.resize();

    $.hero = new $.Hero();

    $.entities.push($.hero);
    $.entities.push(new $.Obstacle());

    $.loop();
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
};

$.reset = function () {};

$.update = function () {
    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].update();
    }
};

$.render = function () {
    $.Draw.clear();
    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].render();
    }
};

$.loop = function () {
    window.requestAnimFrame($.loop);
    $.update();
    $.render();
};

window.addEventListener('load', $.init, false);
window.addEventListener('resize', $.resize, false);
window.addEventListener( 'keyup', $.keyup);

window.addEventListener('click', function(e) {
    e.preventDefault();
    $.hero.startJump(e);
}, false);

window.addEventListener('touchstart', function(e) {
    e.preventDefault();
    $.hero.startJump(e);
}, false);

window.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);

window.addEventListener('touchend', function(e) {
    e.preventDefault();
}, false);
