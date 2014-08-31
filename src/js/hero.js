$.Hero = function () {
	this.x = 75;
	this.y = $.base_y;
    this.vy = 0.0;
    this.hp = 100;

    this.width = 30;
    this.height = 30;

	this.background = [240,47,47];
    this.opacity = 1;
    this.onGround = true;

    this.invincible = 0;
    this.invincibleCount = 0;

    this.listen();
};

$.Hero.prototype.listen = function () {
    var self = this;

    window.addEventListener('click', function(e) {
        e.preventDefault();
        self.startJump(e);
    }, false);

    window.addEventListener('touchstart', function(e) {
        e.preventDefault();
        self.startJump(e);
    }, false);

    window.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);

    window.addEventListener('touchend', function(e) {
        e.preventDefault();
    }, false);
};

$.Hero.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.width, this.height, $.util.arrayToRGBAString(this.background, this.opacity));
};

$.Hero.prototype.update = function () {
    this.width = this.hp / 3;
    this.height = this.hp / 3;
 
    this.vy += $.gravity;
    this.y += this.vy;
    
    if (this.y > $.base_y) {
        this.vy = 0;
        this.y = $.base_y;
        this.onGround = true;
    }
    
    // Animate hero when invincible    
    if (this.invincible > 0) {
        if (this.count < 5) {
	        this.background = [255,165,0];
            this.count++; 
        } else {
            this.invincible -= this.count;
            this.count = 0;
	        this.background = [240,47,47];
        }
    } else {
	    this.background = [240,47,47];
    }
};

$.Hero.prototype.startJump = function () {
    if (this.onGround && this.y > 70) {
        this.vy = -8;
    }
};

$.Hero.prototype.decreaseLife = function () {
   this.hp -= 15; 
};

$.Hero.prototype.takeHit = function () {
    // Make hero invincible for the next 100 frames
    this.invincible = 80;
    this.count = 0;
}
