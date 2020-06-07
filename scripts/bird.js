function Bird(x, y, radius) {
    // position
    this.x = x;
    this.y = y;
    this.color = 'red';
    this.radius = 20;
    this.image = document.getElementById('bird');
    this.scale = 10;

    // gravity
    this.velocity = 1;
    this.acceleration = 0.25;
    
    this.draw = () => {
        // debug
        
        // c.beginPath();
        // c.fillStyle = this.color;
        // c.strokeStyle = this.color;
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // c.fill();
        // c.stroke();
        // c.closePath();

        var angle = this.velocity * 3;

        // draw texture
        c.save(); // save current state
        c.translate(this.x, this.y);
        c.rotate(Math.PI * 2 / 360 * angle); // rotate
        // c.drawImage(this.image, this.x - this.radius - this.scale / 2, this.y - this.radius - this.scale / 2, this.radius * 2 + this.scale, this.radius * 2 + this.scale);
        c.drawImage(this.image, -this.radius * 2 + this.scale, -this.radius * 2 + this.scale, this.radius * 2 + this.scale, this.radius * 2 + this.scale);
        c.restore();
        
    }

    this.update = () => {
        this.checkLose();
        this.gravity();
        this.draw();
    }

    this.gravity = () => {     
        this.velocity += this.acceleration;
        this.y += this.velocity;
    }

    this.jump = () => {
        this.velocity = -7;
    }

    this.checkLose = () => {
        if (this.y + this.radius >= canvas.height) running = false;
        if (this.y - this.radius <= 0) running = false;
    }

}