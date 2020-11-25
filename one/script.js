const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 20; //tweak this number to get different center shape
let scale = 1; // can be used to increase gap


function drawFlower() {
    let angle = number * 20; //play with 10 here to get different patterns
    let radius = scale * Math.sqrt(number);
    let posX = radius * Math.sin(angle) + canvas.width / 2;
    let posY = radius * Math.cos(angle) + canvas.height / 2;
    ctx.fillStyle = "#eb3f4a";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#febcda";
    ctx.beginPath();

    ctx.arc(posX, posY, 20, 0, Math.PI * 2);
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