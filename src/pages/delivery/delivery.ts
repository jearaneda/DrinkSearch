import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { TravelPage } from '../travel/travel';
/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {
  place : any;
  ubers: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    console.log(this.navParams.get('lugar'));
    this.place = this.navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
    console.log(this.navParams.get('lugar'));
    this.getConductores();
    this.place = this.navParams.get('lugar');
    }

  chooseDriver(uber){
    this.navCtrl.push(TravelPage, {uber});

  }


    getConductores() {
        this.http.get('http://www.bicicletapp.com/listadoConductores.php')
        .map((res) => res.json())
        .subscribe(data => {
          this.ubers = data;
          console.log(this.ubers);
        });
      }

}
