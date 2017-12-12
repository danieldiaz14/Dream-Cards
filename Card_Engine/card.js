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
let Okami = new Card(6, 'minion', 'Okami The Protector', 5, 5, 5, null);
let Ogre = new Card(7, 'minion', 'Ogre', 6, 7, 7, null);
let Wolf = new Card(8, 'minion', 'Wolf', 2, 3, 2, null);
let Croak = new Card(9, 'minion', 'Croak The Thief', 3, 3, 3, null);
let Champa = new Card(10, 'minion', 'Champa the Imposter', 10, 10, 10, null);
let Mema = new Card(11, 'minion', 'Mema The Clone', 5, 6, 4, null);
let Jakyoln = new Card(12, 'minion', 'Jakolyn', 1, 2, 1, null);
let Death = new Card(13, 'minion', 'Grim Reaper', 6, 6, 6, null);
let Brute = new Card(14, 'minion', 'Brute', 4, 4, 5, null);
let Smite = new Card(15, 'minion', 'Smite', 1, 2, 2, null);
let Rakko = new Card(16, 'minion', 'Rakko', 4, 4, 5, null);
let Lemnos = new Card(17, 'minion', 'Lemnos', 6, 5, 7, null);
let Youalz = new Card(18, 'minion', 'Youalz', 7, 7, 8, null);
let Hexlex = new Card(19, 'minion', 'Hexlex', 3, 3, 4, null);
let Morgana = new Card(20, 'minion', 'Morgana', 2, 2, 3, null);
let Expodan = new Card(21, 'minion', 'Expodan', 5, 5, 5, null);
let Fahros = new Card(22, 'minion', 'Fahros', 5, 6, 7, null);
let Alesham = new Card(23, 'minion', 'Alesham', 3, 3, 3, null);
let Aszya = new Card(24, 'minion', 'Aszya', 3, 3, 4, null);
let Notu = new Card(25, 'minion', 'Notu', 9, 10, 10, null);
let Zenit = new Card(26, 'minion', 'Zenit', 3, 3, 3, null);
let Rashak = new Card(27, 'minion', 'Rashak', 3, 4, 5, null);
let Lenaopz = new Card(28, 'minion', 'Lenaopz', 7, 7, 7, null);
let Punkos = new Card(29, 'minion', 'Punkos', 4, 4, 5, null);

/*
    Since you have a standard board layout. You can make some object that say at this x and y there is this element that can be clicked and it has this height and width;
    You can have that for the card zones. example card zone 1 is at this location and it has this card and width if card in the hand have consistent location you can do that as well.
    
*/