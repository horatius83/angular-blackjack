import { Component, OnInit, Input } from '@angular/core';
import { Card, Suit } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  isRed(): boolean {
    return this.card.suit === Suit.Diamonds || this.card.suit === Suit.Hearts;
  }

  constructor() { }

  ngOnInit() {
  }

}
