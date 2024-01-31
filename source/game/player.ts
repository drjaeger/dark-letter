import Card from './card';
import {makeid} from './util';

class Player {
    id: string;
    name: string;
    avatar: string;
    cardsInHand: Array<Card>;
    cardsOnTable: Array<Card>;
    constructor(name: string) {
        this.id = makeid(7);
        this.name = name;
        this.avatar = '';
        this.cardsInHand = [];
        this.cardsOnTable = [];
    }
}

export default Player;
