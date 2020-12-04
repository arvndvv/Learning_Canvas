const canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;

const colors = [
        '#eee',
        'rgba(205,215,255,0.3',
        'rgba(173,216,230,0.8',
        'rgba(121,161,211,0.8'
    ],
    maxSize = 40,
    minSize = 0,
    mouseRadius = 60,
    particleCount = 2000;
let particleArray = [],
    mouse = { //mouse position
        x: null,
        y: null
    };
window.addEventListener('mousemove', event => {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse);
})

//create constructor function for particle
function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

//add draw method to particle prototype

Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}
Particle.prototype.update = function() {
    if (this.x + this.size * 2 > canvas.width ||
        this.x - this.size * 2 < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size * 2 > canvas.width ||
        this.y - this.size * 2 < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    // mouse interactivity
    if (mouse.x - this.x < mouseRadius &&
        mouse.x - this.x > -mouseRadius &&
        mouse.y - this.y < mouseRadius &&
        mouse.y - this.y > -mouseRadius) {
        if (this.size < maxSize) {
            this.size += 3;
        }

    } else if (this.size > minSize) {
        this.size -= 0.1;

    }
    if (this.size < 0) {
        this.size = 0;
    }
    this.draw();
}

//create particle array
function init() {
    for (let i = 0; i < particleCount; i++) {
        let size = 0;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.5) - .1;
        let directionY = (Math.random() * 0.5) - .1;
        let color = colors[Math.floor(Math.random() * colors.length)];
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}
//animation loop

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }

}

init();
animate();