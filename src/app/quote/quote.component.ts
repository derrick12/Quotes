import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Dr. Seuss', 'Dont cry because its over smile because it happened', 'derrick'),
    new Quote(2, 'Oscar Wilde', 'Be yourself everyone else is already taken', 'Kariuki'),
    new Quote(2, 'Frank Zappa', 'So many books, so little time', 'Waweru')
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }
}
