import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Dont cry because its over smile because it happened'),
    new Quote(2, 'Be yourself everyone else is already taken'),
    new Quote(2, 'Be yourself everyone else is already taken')
  ];


  constructor() { }

  ngOnInit() {
  }
}
