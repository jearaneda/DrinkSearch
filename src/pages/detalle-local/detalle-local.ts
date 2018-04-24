import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
/**
 * Generated class for the DetalleLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-local',
  templateUrl: 'detalle-local.html',
})
export class DetalleLocalPage {
  public locacion: any;
  cigs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locacion  = navParams.get("locacion");
  }

  ionViewDidEnter() {
    this.checkCig();
  }

  checkCig(){
    if(this.locacion.cigarros == '1'){
      this.cigs = 'Sí';
      console.log(this.locacion.cigarros);
    }
    else {
      this.cigs = 'No';
    }
  }

  goDelivery(){
      let lugar = this.locacion;
      console.log(lugar);
      this.navCtrl.push(DeliveryPage, {lugar});
  }

}
