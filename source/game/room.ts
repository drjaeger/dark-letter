import Card from './card';
import Player from './player';
import {makeid} from './util';

class GameRoom {
    id: string;
    lobby: Array<Player>;
    deck: Array<Card>;
    constructor(player: Player) {
        this.id = makeid(7);
        this.lobby = [player];
        this.deck = [];
        console.log('New room created!');
    }

    start() {
        if (this.lobby.length <= 1) {
            console.log('Saaad.....');
            return;
        }
        this.createDeck();
    }

    createDeck() {
        const cardArray = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8];
        cardArray.forEach(card => {
            this.deck.push(new Card(card));
        });
        this.shuffle(this.deck);
        this.dealCards();
        this.dealCards();
    }

    shuffle(array: Array<any>) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }

        return array;
    }

    dealCards() {
        this.lobby.forEach(player => {
            player.cardsInHand.push(this.deck.pop() as Card);
        });
    }

    playCard(playerID: string, card: string | number) {
        const cardNr = Number(card);
        // TODO check if correct active player
        const thePlayer = this.lobby.find(player => player.id === playerID);
        const theCard = thePlayer?.cardsInHand.find(card => (card.nr = cardNr));
        let index = thePlayer?.cardsInHand.indexOf(theCard!);
        thePlayer?.cardsInHand.splice(index!, 1);
        thePlayer?.cardsOnTable.push(theCard!);
    }
}

export default GameRoom;
