import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Attributes or properties are declared before constructor
  name: string;
  telephone: number;
  email: string;
  note: string;
  contacts: any[];
  flag: boolean;

  constructor(public alert: AlertController) {
    this.name='';
    this.email='';
    this.note='';
    this.contacts=[];
    this.flag=true;
  }

  // Declare functions
  async showAlert(headerA, subheaderA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      subHeader: subheaderA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
  saveContact() {
    console.log(this.name);
    if(this.name !== '' && this.telephone > 0 && this.email !== ''){
      const newContact = {
        name: this.name,
        telephone: this.telephone,
        email: this.email,
        notes: this.note
      };
      this.contacts.push(newContact);
      console.log(this.contacts);
      this.showAlert('Exito', 'Contacto guardado', 'El contacto se ha guardado correctamente', ['OK']);
    } else {
      this.showAlert('Error', 'Ha ocurrido un problema', 'Debe llenar los campos requeridos', ['OK']);
    }
  }
  deleteContact() {}
  togglePressed() {
    if(this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }
}
