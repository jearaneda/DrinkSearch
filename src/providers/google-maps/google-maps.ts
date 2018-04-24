import { Injectable } from '@angular/core';
import { ConectividadProvider } from '../conectividad/conectividad'
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Headers } from '@angular/http';
/*
  Generated class for the GoogleMapsProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

declare var google;

@Injectable()
export class GoogleMapsProvider {
  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedObserver: any;
  markers: any = [];
  // add your apiKey for GoogleMaps
  // example: apiKey: string = 'ARfdaDE..';
  apiKey: string = 'AIzaSyC7FgHWjWc_FgheiKbuS5yp0R35-luEpMM';

  constructor(public connectivityService: ConectividadProvider,
    public geolocation: Geolocation, public http: Http) {

  }

  init(mapElement: any, pleaseConnect: any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    return this.loadGoogleMaps();

  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == "undefined" || typeof google.maps == "undefined") {

        console.log("Google maps JavaScript needs to be loaded.");
        this.disableMap();

        if (this.connectivityService.isOnline()) {

          window['mapInit'] = () => {

            this.initMap().then(() => {
              resolve(true);
            });

            this.enableMap();
          }

          let script = document.createElement("script");
          script.id = "googleMaps";

          if (this.apiKey) {
            script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
          } else {
            script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
          }

          document.body.appendChild(script);

        }
      }
      else {

        if (this.connectivityService.isOnline()) {
          this.initMap();
          this.enableMap();
        }
        else {
          this.disableMap();
        }

      }

      this.addConnectivityListeners();

    });

  }

  getMarkers() {
      this.http.get('http://www.bicicletapp.com/listado.php')
      .map((res) => res.json())
      .subscribe(data => {
        this.addMarkersToMap(data);
        console.log(data);
      });
    }

addMarkersToMap(marcadores) {

  for(let marcador of marcadores) {
    var position = new google.maps.LatLng(marcador.latitud, marcador.longitud);
    new google.maps.Marker({map: this.map, position: position, title: marcador.nombre, icon: 'http://www.bestbeerhq.com/wp-content/uploads/2015/08/cropped-Beer-icon-32x32.png'});
  }
}



  initMap(): Promise<any> {

    this.mapInitialised = true;

    return new Promise((resolve) => {

      this.geolocation.getCurrentPosition().then((position) => {
        // UNCOMMENT FOR NORMAL USE
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //let latLng = new google.maps.LatLng(40.713744, -74.009056);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement, mapOptions);
        this.getMarkers();
        new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon: 'https://www.robotwoods.com/dev/misc/bluecircle.png'
        });

        resolve(true);

      });

    });

  }



  disableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "block";
    }

  }

  enableMap(): void {

    if (this.pleaseConnect) {
      this.pleaseConnect.style.display = "none";
    }

  }

  addConnectivityListeners(): void {

    document.addEventListener('online', () => {

      console.log("online");

      setTimeout(() => {

        if (typeof google == "undefined" || typeof google.maps == "undefined") {
          this.loadGoogleMaps();
        }
        else {
          if (!this.mapInitialised) {
            this.initMap();
          }

          this.enableMap();
        }

      }, 2000);

    }, false);

    document.addEventListener('offline', () => {

      console.log("offline");

      this.disableMap();

    }, false);

  }

  addMarker(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.markers.push(marker);

  }

}
