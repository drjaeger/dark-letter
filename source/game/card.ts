const CARDS = {
    1: {name: 'Guard', text: 'Guess shit', img: 'TODO'},
    2: {name: 'Priest', text: 'see shit', img: 'TODO'},
    3: {name: 'Baron', text: 'fight!', img: 'TODO'},
    4: {name: 'Cleaning lady', text: 'shield <>', img: 'TODO'},
    5: {name: 'Prince', text: 'Drop it like its hot', img: 'TODO'},
    6: {name: 'King', text: 'swicheroo', img: 'TODO'},
    7: {name: 'Baroness', text: 'aww shit!', img: 'TODO'},
    8: {name: 'Princess!', text: 'aww damn!', img: 'TODO'},
};

class Card {
    nr: number;
    name: string;
    text: string;
    img: string;
    constructor(nr: number) {
        const number = nr as keyof typeof CARDS;
        this.nr = number;
        this.name = CARDS[number].name;
        this.text = CARDS[number].text;
        this.img = CARDS[number].img;
    }
}

export default Card;
