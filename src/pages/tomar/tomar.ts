import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the TomarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tomar',
  templateUrl: 'tomar.html',
})
export class TomarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TomarPage');
  }

  verBoti(){
this.navCtrl.push(TabsPage);
  }


  verFono(){
this.navCtrl.push(TabsPage);
  }
}
