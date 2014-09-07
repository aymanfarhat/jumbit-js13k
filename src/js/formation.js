$.Formation = function (x, y) {
    this.type='formation';
	this.x = x;
	this.y = y;
    this.vx = $.speed;

    this.remove = false;
    this.opacity = 1;
    this.fade = 0.01;
    this.pixelSize = 5;

    this.shapes = {
        large: {
            palette: ["#80644e", "#876b55", "#644e39"],
            matrix: [
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,0,1],
                [0,0,0,1,1],
                [2,0,1,1,2],
                [2,1,1,1,2],
                [2,2,1,2,2],
                [2,2,1,2,2]
            ]
        },
        small: {},
    }; 
};

$.Formation.prototype.render = function () {
        var basex = this.x,
            x = this.x,
            y = this.y,
            matrix = this.shapes.large.matrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
                var color = this.shapes.large.palette[matrix[i][j]];
                if (typeof color != 'undefined') {
                    console.log('test');
                    $.Draw.rect(x, y, this.pixelSize, this.pixelSize, color);
                }
                x+= 5;
            }
            y += 5;
            x = basex;
        }
};

$.Formation.prototype.update = function () {
    this.x -= this.vx;

    this.opacity -= this.fade;

    if(this.opacity <= 0){
        this.remove = true;
    }
};
