import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { Diagnostic } from '@ionic-native/diagnostic';
import { TabsPage } from '../tabs/tabs';
import { TomarPage } from '../tomar/tomar';
/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {

  constructor(public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams, public mapache: GoogleMapsProvider, private diagnostic: Diagnostic) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
    this.getPermission();
  }
  goDe(){
    let isBo:boolean = false;
    this.navCtrl.push(ContactoPage, {isBo});
    console.log(isBo);
}

  goBo(){
    let isBo:boolean = true;
    this.navCtrl.push(ContactoPage, {isBo});

}

goHome(){
  this.navCtrl.push(TomarPage);
}


getPermission() {
   this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_COARSE_LOCATION).then((status) => {
     console.log('AuthorizationStatus');
     console.log(status);
     if (status != this.diagnostic.permissionStatus.GRANTED) {
       this.diagnostic.requestRuntimePermission(this.diagnostic.permission.ACCESS_COARSE_LOCATION).then((data) => {
         console.log('getCameraAuthorizationStatus');
         console.log(data);
       })
     } else {
       console.log("We have the permission");
     }
   }, (statusError) => {
     console.log(`statusError`);
     console.log(statusError);
   });
 }


}
