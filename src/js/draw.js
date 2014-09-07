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
        var matrix = [
            [0,1,1,1,1,1,0],
            [1,3,3,3,2,2,1],
            [1,2,0,0,0,2,1],
            [1,2,0,0,0,2,1],
            [1,2,0,0,0,2,1],
            [1,2,2,2,2,3,1],
            [0,1,1,1,1,1,0]
        ];

        var basex = x;

        // Paint the obstacles as pixels
        var pixelSize = size / 7;
        var rock_colors = ["#644e39", "#bc977d", "#997962", "#876b55"];

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
                if (typeof rock_colors[matrix[i][j]] != 'undefined') {
                    this.rect(x, y, pixelSize, pixelSize, rock_colors[matrix[i][j]]);
                }
                x+= 5;
            }
            y += 5;
            x = basex;
        }
    },
};
