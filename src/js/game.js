$ = {};

$.width = 320;
$.height = 480;

$.entities = [];

$.init = function () {
    $.RATIO = $.width / $.height;
    $.currentWidth = $.width;
    $.currentHeight = $.height;
    $.canvas = document.getElementsByTagName('canvas')[0];
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    $.ctx = $.canvas.getContext('2d');

    $.nextObstacle = 30;

    $.gravity = 0.31875;
    $.startTime = new Date().getTime();

    // The bottom most point allowed
    $.base_y = $.canvas.height - 41;

    $.resize();

    $.hero = new $.Hero();

    $.entities.push($.hero);

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
    var now = new Date().getTime();
    var next = Math.floor((now - $.startTime)/60);

    $.nextObstacle -= (1 + (next * 0.001));
 
    if($.nextObstacle < 0){
        $.entities.push(new $.Obstacle());
        $.nextObstacle = (Math.random() * 80) + 30 - (next * 0.01);
    }

    for (var i = 0; i < $.entities.length; i++) {
        var currentEntity = $.entities[i];

        currentEntity.update();

        var collisionResult = $.checkRectCollision(currentEntity, $.hero);

        if (currentEntity.type == 'obstacle' && collisionResult.collide) {
            if (currentEntity.hit === false) {
                currentEntity.hit = true;
                $.generateRockBlast(currentEntity.x, currentEntity.y, -1, collisionResult.ydir, 5, currentEntity.w);
            }

            // Or call destroy function later
            $.entities.splice(i, 1);
            $.hero.decreaseLife();
        }
 
        if ($.checkRectAbove(currentEntity, $.hero)) {
            currentEntity.falling = true;
        }

        if (currentEntity.remove) {
           $.entities.splice(i, 1);  
        }
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
