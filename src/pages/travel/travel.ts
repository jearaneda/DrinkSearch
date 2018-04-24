import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {
  eta: any;
  nombre: any;
  fono: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelPage');
    this.nombre = this.navParams.get('uber').Nombre_Socio;
    this.fono = this.navParams.get('uber').Fono_Socio;
  }

}
