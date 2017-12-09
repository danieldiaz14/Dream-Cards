const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d


var canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop;
canvas.addEventListener('click', function(event) {
  var x = event.pageX - canvasLeft,
      y = event.pageY - canvasTop;

  board.forEach(function(element) {
    if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
      alert('clicked an element');
    }
  });
      
}, false);

let board = [];
function tile(x,y, color, number) {
  for(var i = 0; i < number; i++) {
      context.fillStyle = color;
      context.fillRect(x, y, 181, 165);
      x += 182;
  }
} // Tile function will create the tiles for the boards

function drawHand(x, y, user) {
  for(var i = 0; i < user.hand.length; i++) {
    context.fillStyle = "white";
    context.fillRect(x, y, 45, 60);
    x += 100
  }
} // Draw hand function will draw the state of the hand.

function draw_Element(x, y, color, width, height) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}
function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height); // Black Rectangle background
  drawHand(360, 530, player1); // player 1 hand state.
  draw_Element(1090, 245, "green", 181, 165); // Background behind End Turn.
  tile(180, 160, "red", 5); // bot board
  tile(180, 325, "yellow", 5); // player1 board
  draw_Element(1090, 490, "#42a7f4", 180, 160); // Player 1 info ui
  draw_Element(0, 490, 'blue', 180, 160); // Player 1 hero
  draw_Element(0, 0, "orange", 180, 160); // Player 2 info ui
  draw_Element(1090, 0, 'pink', 180, 160); // Player 2 Hero
}//drawing the state of the board/

function updateValue(player, value) {
  document.getElementById(player).innerText = value;
} // update value function. Allows us to change values on canvas to manipulate state of the game.

let turnTracker = 0;
const seconds = 1000;
let lastTime = 0;

function update(time = 0) {
  const gameTime = time - lastTime;
  lastTime = time;

  turnTracker += gameTime;
  if (turnTracker > 90000) {
    //alert('turn ended');
    turnTracker = 0;
  }
  lastTime = time;
  console.log(turnTracker);
  draw();
  updateValue('hand_count_p1', player1.hand.length); // Player 1 hand count
  updateValue('deck_count_p1', player1.deck.length); // player 1 deck count
  updateValue('hand_count_p2', player2.hand.length); // Player 2 hand count
  updateValue('deck_count_p2', player2.deck.length); // player 2 deck count
  requestAnimationFrame(update);
}

player1.hand.push(imp);



/*
1. Made the card interactions.

2. Added the controls.

3. Draw a card each turn.

4. Loop logic
*/
update();