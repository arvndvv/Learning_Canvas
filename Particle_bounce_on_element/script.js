const canvas = document.querySelector("#canvas3"),
    ctx = canvas.getContext('2d');
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;
let particlesArray = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.floor(Math.random() * 5) + 2;
        this.weight = 2; // weight increase== speed of fall increase
        this.directionX = -2; //direction of particle in x axis
        // this.directionY=1;
    }
    update() {
        //each frame
        if (this.y > canvas.height) {
            // when particle reach bottom
            this.size = Math.floor(Math.random() * 15) + 2;
            this.y = 0 - this.size;
            this.weight = 2;
            this.x = Math.floor(Math.random() * canvas.width);
        }


        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

const particle1 = new Particle(100, 0);
const particle2 = new Particle(50, 0);

function animate() {
    let fade = 0;
    ctx.fillStyle = 'rgba(234, 70, 47, 0.01)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particle1.update(); //update for particle1
    particle1.draw(); //draw particle1
    particle2.update();
    particle2.draw();
    requestAnimationFrame(animate)
}
animate();