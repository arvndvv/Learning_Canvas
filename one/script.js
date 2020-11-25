const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;
let posX = 0;
let posY = 0;
let angle = 0;

function drawFlower() {
    ctx.fillStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(posX, posY, size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function animate() {
    //we need to clear canvas each time
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    size += 0.05;
    posX += 0.5;
    posY += 0.5;
    angle += 0.1;
    drawFlower();
    requestAnimationFrame(animate);
}
animate();