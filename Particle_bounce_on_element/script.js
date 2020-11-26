const canvas = document.querySelector("#canvas3"),
    ctx = canvas.getContext('2d');
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;
let particlesArray = [];
const numberOfParticles = 300;




class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 2;
        this.weight = Math.random() * 1 + 2; // weight increase== speed of fall increase
        this.directionX = -2; //direction of particle in x axis
        // this.directionY=1;
    }
    update() {
        //each frame
        if (this.y > canvas.height) {
            // when particle reach bottom
            this.size = Math.random() * 15 + 2;
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 2;
            this.x = Math.random() * canvas.width * 1.6;
        }


        this.weight += 0.05;
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

function init() {

    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y))
    }

}

init();

function animate() {
    let fade = 0;
    ctx.fillStyle = 'rgba(234, 70, 47, 0.01)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate)
}
animate();