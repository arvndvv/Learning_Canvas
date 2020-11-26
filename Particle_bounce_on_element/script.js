const canvas = document.querySelector("#canvas3"),
    ctx = canvas.getContext('2d');
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;
let particlesArray = [];
const numberOfParticles = 300;

//measure title element
let titleElement = document.querySelector("#title");
let titleMeasure = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasure.left,
    y: titleMeasure.top,
    width: titleMeasure.width,
    height: 10
}


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
            this.size = Math.random() * 5 + 2;
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 2;
            this.x = Math.random() * canvas.width * 1.6;
        }


        this.weight += 0.05;
        this.y += this.weight;
        this.x += this.directionX

        //collision detection between particle and title
        if (this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y) {

            this.y -= 3;
            this.weight *= -0.3;
        }

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
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * -1;
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

// to adjust canvas if window is resized

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasure = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasure.left,
        y: titleMeasure.top,
        width: titleMeasure.width,
        height: 10
    }
    init();
})