import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GoogleMapsProvider } from '../google-maps/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the ListadoBotisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var google;

@Injectable()
export class TiendasProvider {

  data: any;

      constructor(public http: Http, public googleMaps: GoogleMapsProvider, public geolocation: Geolocation) {
      }
      load() {

          if (this.data) {
              return Promise.resolve(this.data);
          }

          return new Promise(resolve => {

              this.http.get('http://www.bicicletapp.com/listado.php').map(res => res.json()).subscribe(data => {
                  this.data = this.applyHaversine(data);
                  this.data.sort((locationA, locationB) => {
                      return locationA.distance - locationB.distance;
                  });
                  resolve(this.data);
              });

          });

      }

      miUbicacion(){
      this.geolocation.getCurrentPosition().then(pos => {
            let usersLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
          }).catch((error) => {
              console.log('Error getting location', error);
          });
          return usersLocation;

      }

      applyHaversine(locations) {
          this.geolocation.getCurrentPosition().then(pos => {
              let usersLocation = {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude
              };

              locations.map((location) => {
                  let placeLocation = {
                      lat: location.latitud,
                      lng: location.longitud
                  };
                  var directionsService = new google.maps.DirectionsService();
                  var request = {
                      origin: usersLocation.lat + ' ' + usersLocation.lng,
                      destination: placeLocation.lat + ' ' + placeLocation.lng,
                      waypoints: [],
                      travelMode: google.maps.TravelMode.WALKING
                  };
                  directionsService.route(request, function (response, status) {
                      if (status == google.maps.DirectionsStatus.OK) {
                          var myroute = response.routes[0];
                          var total = 0;

                          for (var i = 0; i < myroute.legs.length; i++) {
                              total += myroute.legs[i].distance.value;
                          }
                          location.distance = total / 1000.0;
                      }
                  });

              });
          }).catch((error) => {
              console.log('Error getting location', error);
          });
          return locations;
      }

      getDistanceBetweenPoints(start, end, units) {

          let R = 6378137;
          let lat1 = start.lat;
          let lon1 = start.lng;
          let lat2 = end.lat;
          let lon2 = end.lng;
          let dLat = this.toRad((lat2 - lat1));
          let dLon = this.toRad((lon2 - lon1));
          let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          let d = R * c;

          return d;

      }

      toRad(x) {
          return x * Math.PI / 180;
      }

      GrabaTienda(params)
      {
      let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

      return this.http.post( "http://www.bicicletapp.com/GuardaTienda.php",params,{
        headers:headers,
        method:"POST"
      }).map(
        res => {return res.json}

      );

      }





            ModificaTienda(params)
            {

            let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

            return this.http.post( "http://www.bicicletapp.com/ModificaTienda.php",params,{
              headers:headers,
              method:"POST"
            }).map(
              res => {return res.json}

            );

            }



      GrabaConductor(params)
      {
      let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

      return this.http.post( "http://www.bicicletapp.com/GuardaConductor.php",params,{
        headers:headers,
        method:"POST"
      }).map(
        res => {return res.json}

      );

      }

  }
