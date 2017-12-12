function updateValue(player, value) {
    document.getElementById(player).innerText = value;
}

function createDeck() {
    return [ imp,
      imp_lord,
      imp_archer,
      imp_mage,
      raigon,
      boukoua,
      Okami,
      Ogre,
      Wolf,
      Croak,
      Champa,
      Mema,
      Jakyoln,
      Death,
      Brute,
      Smite,
      Rakko,
      Lemnos,
      Youalz,
      Hexlex,
      Morgana,
      Expodan,
      Fahros,
      Alesham,
      Aszya,
      Notu,
      Zenit,
      Rashak,
      Lenaopz,
      Punkos];
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


//window.sessionStorage.setItem('items', JSON.stringify(deck));

//var storedArray = JSON.parse(sessionStorage.getItem('items'));