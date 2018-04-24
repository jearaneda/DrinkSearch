import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TiendasProvider } from '../../providers/tiendas/tiendas';
import { ModalController } from 'ionic-angular';
import { DetalleLocalPage } from '../detalle-local/detalle-local';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  constructor(public navCtrl: NavController,
    public locaciones: TiendasProvider,
    public modalCtrl: ModalController) {

  }

  detalleLocal(locacion) {
    let modal = this.modalCtrl.create(DetalleLocalPage, { locacion: locacion });
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }
}
