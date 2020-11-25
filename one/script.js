const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let scale = 10;


function drawFlower() {
    let angle = number * 1;

    let radius = scale * Math.sqrt(number);
    let posX = radius * Math.sin(angle);
    let posY = radius * Math.cos(angle);
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

    number++;
    //we need to clear canvas each time
    //ctx.clearRect(0, 0, canvas.width, canvas.height);


    drawFlower();
    requestAnimationFrame(animate);
}
animate();