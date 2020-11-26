const canvas = document.querySelector("#canvas2");
const ctx = canvas.getContext('2d');
const { innerWidth, innerHeight } = window;
canvas.width = innerWidth;
canvas.height = innerHeight;

let x = 20,
    y = 20,
    toRight = true,
    toDown = true,
    delX = 5,
    delY = 5;
drawCircles()

function drawCircles() {
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    if (toRight) {
        x += delX;
        if (x + 30 > innerWidth) {
            delX = Math.floor(Math.random() * 15) + 5;
            toRight = false;
        }
    }
    if (!toRight) {
        x -= delX;
        if (x - 30 < 0) {
            delX = Math.floor(Math.random() * 15) + 5;
            toRight = true;
        }
    }
    if (toDown) {
        y += delY;
        if (y + 30 > innerHeight) {
            toDown = false;
            delY = Math.floor(Math.random() * 15) + 5;
        }
    }
    if (!toDown) {
        y -= delY;
        if (y - 30 < 0) {
            toDown = true;
            delY = Math.floor(Math.random() * 15) + 5;
        }
    }

    requestAnimationFrame(drawCircles);
}