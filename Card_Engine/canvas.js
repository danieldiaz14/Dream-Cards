const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d
var current_deck = 30; // keeps track of current deck.
var current_mana = 0; // keeps track of current mana.
function tile(x,y) {
  let board = [0,1,0,1,0,1];
  for(var i = 0; i < board.length; i++) {
    if(board[i] == 0) {
      context.fillStyle = "#ceaf50";
      context.fillRect(x, y, 150, 200);
    }
    if (board[i] == 1){
      context.fillStyle = "#f7db88";
      context.fillRect(x, y, 150, 200);
    }
    x += 150;
  }
  return board;
} // Tile function will create the tiles for the boards.

function deck(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, 150, 200);
}//this is the color indicator on your deck.
function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height); // Black Rectangle background
  tile(0, 7);
  tile(0,430);
  deck(900, 430, "#42a7f4");
  deck(900, 7, "#ff7f35");
}//drawing the state of the board/
function updateDeck(player) {
  document.getElementById(player).innerText = current_deck;
} // update deck function. Allows us to change the deck as it will be decreasing in size.

function updateMana(player) {
  document.getElementById("mana_count_p1").innerText = current_mana;
}

function update(time = 0) {
  draw();
  updateDeck("deck_count_p1");
  updateMana("mana_count_p1");
  requestAnimationFrame(update);
}
update();