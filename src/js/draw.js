$.Draw = {
    clear: function() {
        $.ctx.clearRect(0, 0, $.width, $.height);
    },

    rect: function(x, y, w, h, col) {
        $.ctx.beginPath();
        $.ctx.rect(x, y, w, h);
        $.ctx.fillStyle = col;
        $.ctx.fill();
    },

    text: function(string, x, y, size, col) {
        $.ctx.font = 'bold '+size+'px Monospace';
        $.ctx.fillStyle = col;
        $.ctx.fillText(string, x, y);
    },

    obstacle: function (x, y, size) {
        var obstacle_img = document.getElementById('obstacle');
        var pat = $.ctx.drawImage(obstacle_img, x, y);
    },

    formation: function (x, y, type) {
        var formation_img = document.getElementById(type);
        $.ctx.drawImage(formation_img, x, y);
    },

    heart: function (x, y) {
        var heart_img = document.getElementById('heart');
        $.ctx.drawImage(heart_img, x, y);
    }
};
