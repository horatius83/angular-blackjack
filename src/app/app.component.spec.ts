import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Deck } from './deck';
import { Rank, Suit, Card } from './card';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

describe('Deck', () => {
  it('should deal cards', async(() => {
    let deck = new Deck(false);
    const numberOfCards = deck.cards.length;
    const numberOfCardsToDeal = 4;
    let cards = deck.deal(numberOfCardsToDeal);
    expect(deck.cards.length).toBe(numberOfCards - numberOfCardsToDeal);
    expect(cards.length).toBe(numberOfCardsToDeal);
  }));
  it('should shuffle cards', async(() => {
    let deck = new Deck(false);
    let deck2 = new Deck(false); // should not be shuffled by default
    deck2.shuffle();
    expect(deck).not.toEqual(deck2);
  }));
  it('should have the right cards', async(() => {
    let deck = new Deck(false);

    for(var rank in Rank) {
      for(var suit in Suit) {
        var targetCard: Card = null;
        for(var card of deck.cards) {
          if(card.rank === (<Rank>rank) && card.suit === (<Suit>suit)) {
            targetCard = card;
            break;
          }
        }
        expect(targetCard).not.toBeNull(`Could not find card matching rank ${rank} and suit ${suit}.`);
        let cardCount = deck.cards.length;
        let removedCard = deck.remove(targetCard);
        expect(removedCard).not.toBeNull('No card returned when removing card.');
        expect(deck.cards.length).toBe(cardCount - 1, `Expected number of cards to decrease by one when removing cards.`);
      }
    }
  }));
  it('Should return empty list if dealing from an empty list', async(() => {
    let deck = new Deck(true);
    expect(deck.deal(1)).toEqual([]);
  });
  it('Should return cards remaining when asked to deal more cards than are equal in the deck', async(() => {
    let deck = new Deck(false);
    const cardsInDeck = deck.cards.length;
    let cardsDealt = deck.deal(cardsInDeck + 1);
    expect(cardsDealt.length).toBe(cardsInDeck);
  }));
  it('Should add cards correctly', async(() => {
    let deck = new Deck(false);
    let cardsDealt = deck.deal(1);
    let cardDealt = cardsDealt[0];
    expect(deck.cards.reduce((pv,cv) => pv || (cv.suit === cardDealt.suit && cv.rank === cardDealt.rank), false)).toBe(false);
    deck.add(cardsDealt);
    expect(deck.cards.reduce((pv,cv) => pv || (cv.suit === cardDealt.suit && cv.rank === cardDealt.rank), false)).toBe(true);
  }));
});
