let deck = [];

function updateValue(player, value) {
    document.getElementById(player).innerText = value;
}

/*
window.onload = function() {
    while(deck.length <= 5) {
        var id, type, name, cost, attack, hp, effect;
        id = prompt("Select an id for your card");
        type = prompt("Select at type. Pick minion or spell");
        name = prompt("Select a name for your card");
        cost = prompt("Select a mana cost for your card");
        attack = prompt("Select an attack value");
        hp = prompt("select an hp value");
        effect = prompt("Select an effect. Currently only 'null' is supported");
        deck.push(1);
        updateValue("deck_size", deck.length);
    }
}
*/
let i = 0;
while( i <=30) {
    deck.push(i);
    i++
}

window.sessionStorage.setItem('items', JSON.stringify(deck));

var storedArray = JSON.parse(sessionStorage.getItem('items'));