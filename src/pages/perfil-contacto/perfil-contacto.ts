import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilContactoModPage } from '../perfil-contacto-mod/perfil-contacto-mod';
import { HomePage } from '../home/home';
import { CasaPage } from '../casa/casa';

/**
 * Generated class for the PerfilContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil-contacto',
  templateUrl: 'perfil-contacto.html',
})
export class PerfilContactoPage {
  inputDisabled: boolean;
  nombre: any;
  fono: any;
  email: any;
  password: any;
  oferta: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
                this.nombre = navParams.get("nombre"),
                this.fono = navParams.get("fono"),
                this.email = navParams.get("email"),
                this.password = navParams.get("password"),
                this.oferta = navParams.get("oferta")

                }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilContactoPage');
  }

  goModificar(){

     //this.inputDisabled = true;

     this.navCtrl.push(PerfilContactoModPage, {

        nombre: this.nombre,
        fono: this.fono,
        email: this.email,
        password: this.password,
        oferta: this.oferta,
    })
  }

  goSalir(){

       //this.inputDisabled = true;

       this.navCtrl.push(CasaPage)
    }
}
