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
        var opacity = ((x + 22) / 100);

        $.ctx.save();
        $.ctx.globalAlpha = opacity;
        $.ctx.drawImage(formation_img, x, y);
        $.ctx.restore();
    },

    heart: function (x, y) {
        var heart_img = document.getElementById('heart');
        $.ctx.save();
        $.ctx.globalAlpha = 1;
        $.ctx.drawImage(heart_img, x, y);
        $.ctx.restore();
    }
};
