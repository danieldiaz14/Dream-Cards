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
let player1 = new Player('Daniel',30, 0, [], createDeck(), []);
let player2 = new Player('Bot1.0', 30, 0, [], createDeck(), []);

function randomize(data) {
    let currentIndex = data.length, temporaryValue, randomIndex;
    
    // While some elements have not been shuffled
    while(0 !== currentIndex) {
        // Pick a random remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;
        // And swap it with the current element.
        temporaryValue = data[currentIndex];
        data[currentIndex] = data[randomIndex];
        data[randomIndex] = temporaryValue;
    }
    return data;
}

function createMana() {
    
}
//alert(sessionStorage.test);
document.getElementById('player1_name').innerText = player1.name;
document.getElementById('player2_name').innerText = player2.name;

//Create a player class and add these things to that.