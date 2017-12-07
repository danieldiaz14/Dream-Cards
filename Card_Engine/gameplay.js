class Player {
    constructor(name, health, mana, hand, deck) {
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.hand = hand;
        this.deck = deck;
    }
}
let player1 = new Player('Daniel', 30, 0, [], []);
let palyer2 = new Player('Bot', 30, 0, [], []);
var player1_deck = []; // Keeps track of player 1 deck
var player1_hand = []; // Keeps track of player 1 hand
var player1_mana = 0; // Keeps track of player 1 mana
var player1_health = 30; // Keeps track of player 1 health
var player1_board = []; // Keeps track of player 1 board


var player2_deck = []; // Keeps track of player 2 deck
var player2_hand = []; // Keeps track of player 2 hand
var player2_mana = 0; // Keeps track of player 2 mana
var player2_health = 30; // Keeps track of player 2 health
var player2_board = []; // Keeps track of player 2 board;


//Create a player class and add these things to that.