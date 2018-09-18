import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;

  @Input() voteCount = 0;
  @Input() myVote = 0;

  @Output() isComplete = new EventEmitter<boolean>();

  // tslint:disable-next-line:no-output-rename
  @Output('vote') change = new EventEmitter();



  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  upVote() {
    if (this.myVote === 1) {
        return;
    }

    this.myVote++;
    this.emitEvent();
}

downVote() {
    if (this.myVote === -1) {
        return;
    }

    this.myVote--;
    this.emitEvent();
}

  emitEvent() {
      this.change.emit({myVote: this.myVote});
  }


  constructor() { }

  ngOnInit() {
  }

}
