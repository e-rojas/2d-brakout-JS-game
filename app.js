//Game
const canvas = document.getElementById('myCanvas');
//creating the ctx variable to store the 2D rendering context
const ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 30;
const dx = 2;
const dy = -2;

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.closePath();
};

function draw() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
setInterval(draw, 10);
