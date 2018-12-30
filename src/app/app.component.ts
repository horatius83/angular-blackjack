import { Component } from '@angular/core';
import { Deck } from './deck';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  deck = new Deck(false);
  cards = new Array<Card>();

  dealCard() {
    this.cards = this.cards.concat(this.deck.deal(1));
  }

  constructor() {
    this.deck.shuffle();
  }
}
