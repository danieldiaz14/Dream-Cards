class Card {
    constructor(id, type, name, cost, attack, hp, effect) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.cost = cost;
        this.attack = attack;
        this.hp = hp;
        this.effect = effect;
    }
}

let imp = new Card(0, 'minion', 'Imp', 1, 1, 1, null);
let imp_lord = new Card(1, 'minion', 'Imp Lord', 2, 3, 2, null);
let imp_archer = new Card(2, 'minion', 'Imp Archer', 4, 4, 5, null);
let imp_mage = new Card(3, 'minion', 'Imp Mage', 5, 6, 6, null);
let raigon = new Card(4, 'minion', 'Raigon Imp Goliath', 7, 7, 7, null);
let boukoua = new Card(5, 'minion', 'Soul Eater Boukoua', 10, 12, 12, null);
let Okami = new Card(5, 'minion', 'Okami The Protector', 5, 5, 5, null);

/*
    Since you have a standard board layout. You can make some object that say at this x and y there is this element that can be clicked and it has this height and width;
    You can have that for the card zones. example card zone 1 is at this location and it has this card and width if card in the hand have consistent location you can do that as well.
    
*/