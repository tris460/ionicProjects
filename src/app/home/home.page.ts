import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Attributes or properties are declared before constructor
  greet: string;
  addition: number;
  fruit: string;
  fruitList: any[];
  price: number;

  constructor(public alert: AlertController) {
    this.greet = 'Hello world!';
    this.addition = this.sum(11, 12);
    this.fruit = '';
    this.fruitList = [];
    this.price = 0;
  }

  // Declare functions
  sum(val1: number, val2: number): number {
    const total = val1 + val2;
    return total;
  }
  async showAlert() {
    const addAlert = await this.alert.create({
      header: 'Operation',
      subHeader: 'The result is:',
      message: this.addition.toString(),
      buttons: ['OK']
    });
    await addAlert.present();
  }
  addFruit() {
    if (this.fruit !== '' && !this.fruitList.includes(this.fruit) && this.price > 0) {
      const newFruit = {
        name: this.fruit,
        price: this.price
      };
      this.fruitList.push(newFruit);
      this.fruit = '';
      this.price = 0;
    } else {
      console.error('Put a valid fruit');
    }
  }
  deleteFruit(index) {
    this.fruitList.splice(index, 1);
  }
  saveContact() {

  }
  deleteContact(){}
}
