const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0; //tweak this number to get different center shape
let scale = 5; // can be used to increase gap

let huefill = 100;
let huestroke = 100;

function drawFlower() {
    let angle = number * 0.4; //play with 10 here to get different patterns
    let radius = scale * Math.sqrt(number);
    let posX = radius * Math.sin(angle) + canvas.width / 2;
    let posY = radius * Math.cos(angle) + canvas.height / 2;
    ctx.fillStyle = "hsl(" + huefill + ",100%,50%)";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "hsl(" + huestroke + ",100%,50%)";
    ctx.beginPath();

    ctx.arc(posX, posY, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    huefill += 2;
    huestroke += 3;
}

function animate() {

    //we need to clear canvas each time
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (number > 500) {
        return;
    }
    drawFlower();
    requestAnimationFrame(animate);
}
animate();