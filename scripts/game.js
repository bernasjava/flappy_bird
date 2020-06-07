var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('keydown', this.check, false);

var background = document.getElementById('background');

var running = true;

var points = 0;

function check(e) {
    switch(e.keyCode) {
        case 32: bird.jump();
    }
}

function animate() {
    if (running) requestAnimationFrame(animate);

    c.drawImage(background, 0, -50);

    bird.update();
    for (i = 0; i < pipes.length; i++) {
        pipes[i].update();
    }

    if (increment == 150) {
        increment = 0;
        createPipes();
    }

    increment++;

    for (i = 0; i < pipes.length; i++) if (collide(bird, pipes[i])) running = false;
    
}

function collide(bird, pipe) {
    var distX = Math.abs(bird.x - pipe.x-pipe.width/2);
    var distY = Math.abs(bird.y - pipe.y-pipe.height/2);

    if (distX > (pipe.width/2 + bird.radius)) { return false; }
    if (distY > (pipe.height/2 + bird.radius)) { return false; }

    if (distX <= (pipe.width/2)) { return true; } 
    if (distY <= (pipe.height/2)) { return true; }

    var dx=distX-pipe.w/2;
    var dy=distY-pipe.h/2;
    return (dx*dx+dy*dy<=(bird.r*bird.r));
}

function createPipes() {
    var space = 200;
    var spacePos = Math.random() * (canvas.height - space);

    //up
    var height = spacePos;
    var x = canvas.width;
    var y = 0;

    pipes[pipes.length] = new Pipe(x, y, height, true);

    // down
    height =  canvas.height - (spacePos + space);
    x = canvas.width;
    y = spacePos + space;

    pipes[pipes.length] = new Pipe(x, y, height, false);
    
}

var bird = new Bird(canvas.width / 2, canvas.height / 2);
var pipes = [];
var increment = 0;

createPipes();
animate();