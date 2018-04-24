import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormBuilder, FormGroup} from '@angular/forms';
import { TiendasProvider } from '../../providers/tiendas/tiendas';
import { HomePage } from '../home/home';
import { CasaPage } from '../casa/casa';
import { Http, Headers } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the CarinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-carinfo',
  templateUrl: 'carinfo.html',
})
export class CarinfoPage {


  autoForm: FormGroup;
  public rut;
  public name;
  public giro;
  public fono;
  public email;
  c1: any;
  c2: any;
  cigarros: boolean;
  constructor(public navCtrl: NavController,
              public alertCtrl : AlertController,
              public navParams: NavParams,
              public http: Http,
              private geolocation: Geolocation,
              public service : TiendasProvider,
              public fb: FormBuilder) {


                this.rut = navParams.get("rut"),
                this.name = navParams.get("name"),
                this.giro = navParams.get("giro"),
                this.fono = navParams.get("fono"),

                this.autoForm = this.fb.group({
                  Direccion: [''],
                  Comuna: [''],
                  Ciudad: [''],
                  Pais: [''],
                  Oferta: [''],

                  lat : '1',
                  lng : '1',
                  cig : false,


                  rut: navParams.get("rut"),
                  email: navParams.get("infocar").email,
                  name: navParams.get("infocar").name,
                  giro: navParams.get("giro"),
                  fono: navParams.get("infocar").fono
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Socio2Page');
    console.log('Probando el setroot' + this.navParams.get('infocar').name, this.navParams.get('infocar').password);
  }

  miUbicacion()  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.autoForm.patchValue({lat:resp.coords.latitude, lng:resp.coords.longitude});
      console.log(resp.coords.latitude,resp.coords.longitude);
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);

});
  }


  saveData(){
    alert(JSON.stringify(this.autoForm.value));
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Dirección no encontrada',
    buttons: ['Ok']
  });
  alert.present();
}



  GuardaTienda() {
    this.service.GrabaConductor(this.autoForm.value)
          .subscribe(
                data=>{

                  this.navCtrl.setRoot(HomePage);

                      //console.log(data.arguments);
                      //this.getDatos();
                },
                err=>console.log(err)
          );
}



}
