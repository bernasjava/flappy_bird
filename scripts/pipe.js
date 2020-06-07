function Pipe(x, y, height, top) {
    // position
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = height;
    this.color = 'green';
    this.topPipe = document.getElementById('top-pipe');
    this.downPipe = document.getElementById('down-pipe');
    this.top = top;
    this.scored = false;

    // moving
    this.movingSpeed = 3;

    this.draw = () => {

        // texture

        if (this.top == false) {
            c.drawImage(this.topPipe, this.x, this.y);
        } else {
            c.drawImage(this.downPipe, this.x, this.y - 500, this.width, this.height + 500);
        }

        //debug

        // c.beginPath();
        // c.fillStyle = this.color;
        // c.strokeStyle = this.color;
        // c.fillRect(this.x, this.y, this.width - 50, this.height)
        // c.fill();
        // c.stroke();
        // c.closePath();
    }

    this.update = () => {
        this.move();
        this.draw();
        if (!this.scored) this.checkPoint();
    }

    this.move = () => {
        this.x -= this.movingSpeed;
    }

    this.checkPoint = () => {
        if (this.x < bird.x) {
            document.getElementById('points').innerHTML = parseFloat(document.getElementById('points').innerHTML) + 0.5;
            this.scored = true;
        }
    }

}