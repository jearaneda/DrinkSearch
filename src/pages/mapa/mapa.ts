import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TiendasProvider } from "../../providers/tiendas/tiendas";
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';



@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  public map:any;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public locaciones: TiendasProvider,
    public maps: GoogleMapsProvider,
    public platform: Platform
  ) {

  }

  ionViewDidEnter() {


    this.platform.ready().then(() => {

      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement);
      let locacionesCargadas = this.locaciones.load();
      Promise.all([
        mapLoaded,
        locacionesCargadas
      ]).then((result) => {

        let locaciones = result;

        for (let locacion of locaciones) {
          this.maps.addMarker(locacion.latitud, locacion.longitud);
        }
      });

    });


  }


}
