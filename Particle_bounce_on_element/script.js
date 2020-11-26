const canvas = document.querySelector("#canvas3"),
    ctx = canvas.getContext('2d');
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;
let particlesArray = [];
const numberOfParticles = 1500;

let fade = 0.01;

//measure title element
let titleElement = document.querySelector("#title");
let titleMeasure = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasure.left,
    y: titleMeasure.top,
    width: titleMeasure.width,
    height: 5
}


class Particle {
    constructor(x, y, h) {
        this.huefill = 200;
        this.x = x;
        this.y = y;
        this.angle = Math.floor(Math.random() * 90) + 20;
        this.lightness = (Math.floor(Math.random() * 16) + 85) + "%";
        this.size = Math.random() * 15 + 5;
        this.weight = Math.random() * 5 + 2; // weight increase== speed of fall increase
        this.directionX = Math.sin(this.angle); //direction of particle in x axis
        // this.directionY=1;
    }
    update() {

        // fade = 0.01;
        //each frame
        if (this.y > canvas.height) {
            // when particle reach bottom
            // fade += 0.0001;
            this.size = Math.random() * 15 + 5;
            this.lightness = (Math.floor(Math.random() * 16) + 85) + "%";
            // this.angle = Math.floor(Math.random() * 90) + 20;

            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 2;
            this.x = Math.random() * canvas.width * 1.6;
            //color change
            this.huefill = 200;
        }


        this.weight += 0.05;
        this.y += this.weight;
        this.x += this.directionX

        //collision detection between particle and title
        if (this.x - this.size < title.x + title.width && //checks if particle is within right side of title
            this.x + this.size > title.x && // checks if particle is within left side of title
            this.y < title.y + title.height &&
            this.y + this.size > title.y) {

            this.y -= 4;
            this.weight *= -0.4;
        }

    }
    draw() {
        // ctx.fillStyle = "white";
        ctx.fillStyle = "hsl(" + this.huefill + ",100%," + this.lightness + ")";
        // ctx.shadowColor = '#eeeeff';
        // ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        // ctx.shasdowBlur = 0;
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
    ctx.fillStyle = 'rgba(234, 70, 47,' +
        fade + ')';
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