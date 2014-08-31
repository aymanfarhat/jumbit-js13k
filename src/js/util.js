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

$.util = {};

$.checkRectCollision = function(a, b){
    var x = Math.max(a.x, b.x);
    var n1 = Math.min(a.x + a.width, b.x + b.width);
    var y = Math.max(a.y, b.y);
    var n2 = Math.min(a.y + a.height, b.y + b.height);
    
    return { 
        collide: (n1 >= x && n2 >= y && a != b),
        ydir: ((a.y < b.y) ? -1: 1)
    };
};

$.checkRectAbove = function (a, b) {
    var x = Math.max(a.x, b.x);
    var n1 = Math.min(a.x + a.width, b.x + b.width);

    return (n1 >= x && a.y < b.y && a != b);
}

$.generateRockBlast = function (x, y, xdir, ydir, max, parentRockSize) {
    $.entities.push(new $.Particle(x, y, xdir, ydir, (parentRockSize/3), (parentRockSize/3)));
    for(var j = 0; j < 12; j++) {
        var size = Math.floor(Math.random() * (max+1)) + 1;
        $.entities.push(new $.Particle(x, y, xdir, ydir, size, size));
    }
}

$.util.arrayToRGBAString = function (arr, opacity) {
    return 'rgba('+arr[0]+', '+arr[1]+', '+arr[2]+', '+opacity+')';
}
