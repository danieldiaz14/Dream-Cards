class Card {
    constructor(id, name, cost, attack, hp, effect) {
        this.id = id;
        this.cost = cost;
        this.attack = attack;
        this.hp = hp;
        this.effect = effect;
    }
}

let elf = new Card(1, 'elf', 1, 1, 2, null);

let cards = [elf];

console.log(cards[0]);