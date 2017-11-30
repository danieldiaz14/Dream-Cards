const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d


function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function update(time = 0) {
  draw();
  context.fillStyle = "#FFF";
  context.fillRect(20, 480, 80, 100);
  context.fillStyle = '#F00';
  context.fillRect(100, 25, 25, 25);
  requestAnimationFrame(update);
}
update();