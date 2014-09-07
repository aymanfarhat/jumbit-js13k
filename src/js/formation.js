$.Formation = function (x, y, formationTypeNum) {
    this.type='formation';
	this.x = x;
	this.y = y;
    this.vx = $.speed;
    this.formationType = (formationTypeNum <= 0.5) ? "small" : "large";

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
        small: {
            palette: ["#aa856a", "#bc977d", "#644e39"],
            matrix: [
                [0,0,0,1,1],
                [2,0,1,1,2],
                [2,2,0,2,2],
                [2,2,0,2,2]
            ]
        }
    }; 
};

$.Formation.prototype.render = function () {
        var basex = this.x,
            x = this.x,
            y = this.y,
            matrix = this.shapes[this.formationType].matrix;

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[0].length; j++) {
                var color = this.shapes[this.formationType].palette[matrix[i][j]];
                if (typeof color != 'undefined') {
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
    
    if (this.x <= 100) {
        this.opacity -= this.fade;
    }

    if(this.opacity <= 0){
        this.remove = true;
    }
};
