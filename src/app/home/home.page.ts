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
  constructor(public alert: AlertController) {
    this.greet = 'Hello world!';
    this.addition = this.sum(11, 12);
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
}