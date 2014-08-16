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
