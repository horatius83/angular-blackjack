export enum Suit {
    Clubs = 'Clubs',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades'
};

export enum Rank {
    Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
    Eight = 'Eight',
    Nine = 'Nine',
    Ten = 'Ten',
    Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
    Ace = 'Ace'
};

export class Card {
    getValues(): number[] {
        switch(this.rank) {
            case Rank.Two: return [2];
            case Rank.Three: return [3];
            case Rank.Four: return [4];
            case Rank.Five: return [5];
            case Rank.Six: return [6];
            case Rank.Seven: return [7];
            case Rank.Eight: return [8];
            case Rank.Nine: return [9];
            case Rank.Ten: return [10];
            case Rank.Jack: return [10];
            case Rank.Queen: return [10];
            case Rank.King: return [10];
            case Rank.Ace: return [1, 11];
        }
    }

    getSuitAsSymbol(): string {
        switch(this.suit) {
            case Suit.Clubs: return '♣';
            case Suit.Diamonds: return '♦';
            case Suit.Hearts: return '♥';
            case Suit.Spades: return '♠';
        }
    }

    getRankAsShortString(): string {
        switch(this.rank) {
            case Rank.Jack: return 'J';
            case Rank.Queen: return 'Q';
            case Rank.King: return 'K';
            case Rank.Ace: return 'A';
            default: return String(this.getValues()[0]);
        }
    }

    getShortString(): string {
        return `${this.getRankAsShortString()}${this.getSuitAsSymbol()}`;
    }

    getString(): string {
        return `${this.rank} of ${this.suit}`;
    }

    constructor(readonly rank: Rank, readonly suit: Suit) {};
}