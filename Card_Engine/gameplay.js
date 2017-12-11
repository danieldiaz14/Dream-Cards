class Player {
    constructor(name, health, mana, hand, deck, board) {
        this.name = name;
        this.health = health;
        this.mana = mana;
        this.hand = hand;
        this.deck = deck;
        this.board = board;
    }
}
let player1 = new Player('Daniel',30, 0, [], [], []);
let player2 = new Player('Izzy', 30, 0, [], [], []);

//alert(sessionStorage.test);
document.getElementById('player1_name').innerText = player1.name;
document.getElementById('player2_name').innerText = player2.name;

//Create a player class and add these things to that.