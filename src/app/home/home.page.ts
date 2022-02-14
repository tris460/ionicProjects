import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Attributes or properties are declared before constructor
  greet: string;
  constructor() {
    this.greet = 'Hello world!';
  }

}
