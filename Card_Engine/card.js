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