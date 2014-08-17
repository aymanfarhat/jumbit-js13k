$.Draw = {
    clear: function() {
        $.ctx.clearRect(0, 0, $.width, $.height);
    },

    rect: function(x, y, w, h, col) {
        $.ctx.beginPath();
        $.ctx.rect(x, y, w, h);
        $.ctx.fillStyle = col;
        $.ctx.fill();
        $.ctx.lineWidth = 1;
        $.ctx.strokeStyle = 'black';
        $.ctx.stroke();

/**
ctx.setTransform(1, 0, 0, 1, 0, 0);
// Will always clear the right space
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Still have my old transforms
**/
    },

    text: function(string, x, y, size, col) {
        $.ctx.font = 'bold '+size+'px Monospace';
        $.ctx.fillStyle = col;
        $.ctx.fillText(string, x, y);
    }
};
