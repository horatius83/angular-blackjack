import { Card, Suit, Rank } from './card'
import { shuffle } from './util'

export class Deck {
    readonly cards = new Array<Card>();

    constructor(isEmpty: boolean) {
        if(!isEmpty) {
            for(var suit in Suit) {
                for(var rank in Rank) {
                    this.cards.push(new Card(<Rank>rank, <Suit>suit));
                }
            }
        }
    }

    deal(cards: number): Card[] {
        if(this.cards.length == 0) {
            return [];
        } else if(this.cards.length < cards) {
            cards = this.cards.length;
        }
        var acc = new Array<Card>();
        for(var i=0;i<cards;++i) {
            acc.push(this.cards.pop());
        }
        return acc;
    }

    add(cards: Card[]) {
        for(var card of cards) {
            this.cards.push(card);
        }
    }

    remove(card: Card): Card {
        let index = this.cards.indexOf(card);
        let result = this.cards.splice(index,1);
        if(result.length >= 1) {
            return result[0]
        } else {
            return null;
        }
    }

    shuffle() {
        shuffle(this.cards);
    }
}