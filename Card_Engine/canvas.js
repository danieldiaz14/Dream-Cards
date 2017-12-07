const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d
/* updateDeck("deck_count_p1", player1_deck);
  updateMana("mana_count_p1", player1_mana);
 player1_deck = 30;
player1_hand = [];
player1_hand_counter = 0;
player1_mana = 0; */
function tile(x,y, color, number) {
  for(var i = 0; i < number; i++) {
      context.fillStyle = color;
      context.fillRect(x, y, 181, 165);
      x += 182;
  }
} // Tile function will create the tiles for the boards

function drawHand(x, y) {
  for(var i = 0; i < player1_hand.length; i++) {
    context.fillStyle = "white";
    context.fillRect(x, y, 45, 60);
    x += 100
  }
} // Draw hand function will draw the state of the hand.

function info(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, 180, 160);
}//this is the color indicator on your deck.

function hero_ui(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, 180, 160);
}//this is the color indicator on your hero.


function draw_Element(x, y, color, width, height) {
  
}
function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height); // Black Rectangle background
  drawHand(360, 530);
  tile(1090, 245, "green", 1);
  tile(180, 160, "red", 5);
  tile(180, 325, "yellow", 5);
  info(1090, 490, "#42a7f4"); // Player 1 info ui
  hero_ui(0, 490, 'blue'); // Player 1 Hero
  info(0, 0, "orange"); // Player 2 info ui
  hero_ui(1090, 0, 'pink'); // Player 2 Hero
}//drawing the state of the board/

function updateDeck(player, value) {
  document.getElementById(player).innerText = value;
} // update deck function. Allows us to change the deck as it will be decreasing in size.

function updateMana(player, value) {
  document.getElementById(player).innerText = value;
}

function updateHand_count(player, value) {
  document.getElementById(player).innerText = value;
}
// Don't repeat these functions

function update(time = 0) {
  draw();
  requestAnimationFrame(update);
}

for(var i = 0; i<5; i+=1) {
  player1_hand.push(imp);
}

/*
1. Made the card interactions.

2. Added the controls.

3. Draw a card each turn.

4. Loop logic
*/
console.log(player1_hand);
update();