const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d
function tile(x,y, color) {
  let board = [0,1,0,1,0];
  for(var i = 0; i < board.length; i++) {
    if(board[i] == 0) {
      context.fillStyle = color;
      context.fillRect(x, y, 181, 165);
    }
    if (board[i] == 1){
      context.fillStyle = color;
      context.fillRect(x, y, 181, 165);
    }
    x += 182;
  }
} // Tile function will create the tiles for the boards.

function info(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, 180, 160);
}//this is the color indicator on your deck.

function hero_ui(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, 180, 160);
}//this is the color indicator on your hero.

function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height); // Black Rectangle background
  tile(180, 160, "red");
  tile(180, 325, "yellow");
  info(1090, 490, "#42a7f4"); // Player 1 info ui
  hero_ui(0, 490, 'blue'); // Player 1 Hero
  info(0, 0, "#ff7f35"); // Player 2 info ui
  hero_ui(1090, 0, 'pink'); // Player 2 Hero
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