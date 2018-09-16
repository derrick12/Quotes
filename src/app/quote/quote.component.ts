import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Dr. Seuss', 'Dont cry because its over smile because it happened'),
    new Quote(2, 'Oscar Wilde', 'Be yourself everyone else is already taken'),
    new Quote(2, 'Frank Zappa', 'So many books, so little time')
  ];

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
