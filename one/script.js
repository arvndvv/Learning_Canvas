const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let posX = canvas.width / 2;
let posY = canvas.height / 2;
let angle = 0;

function drawFlower() {
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.beginPath();

    ctx.arc(posX, posY, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function animate() {
    //we need to clear canvas each time
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    posX += 2 * Math.sin(angle);
    posY += 2 * Math.cos(angle);
    angle += 0.05;
    drawFlower();
    requestAnimationFrame(animate);
}
animate();