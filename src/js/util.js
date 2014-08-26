// Collection of generic utility functions and boilerplate

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


$.checkRectCollision = function(a, b){
    var x = Math.max(a.x, b.x);
    var n1 = Math.min(a.x + a.width, b.x + b.width);
    var y = Math.max(a.y, b.y);
    var n2 = Math.min(a.y + a.height, b.y + b.height);

    return (n1 >= x && n2 >= y && a != b);
};
