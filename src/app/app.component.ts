import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  quotes: string[];

  constructor () {
    // tslint:disable-next-line:max-line-length
    this.quotes = ["Dont cry because its over, smile because it happened", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."];
  }
}
