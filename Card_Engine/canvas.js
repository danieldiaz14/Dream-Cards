const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d
let dropCounter = 0;
const dropInterval = 1000;
let lastTime = 0;

context.scale(20,20);

const matrix = [
  [1,1,1],
  [1,1,1],
  [1,1,1],
];

function drawMatrix(matrix) {
  matrix.forEach((row, y) => {
  row.forEach((value, x) => {
    if(value !== 0) {
      context.fillStyle = 'red';
      context.fillRect(x, y, 1, 1);
    }
  });
});
}
function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function update(time = 0) {
  const gameTime = time - lastTime;
  lastTime = time;

  dropCounter += gameTime;
  
  if(dropCounter > dropInterval) {

  }
  lastTime = time;
  draw();
  drawMatrix(matrix);
  requestAnimationFrame(update);
}
update();