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
 * Generated class for the UbicacionTiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ubicacion-tienda',
  templateUrl: 'ubicacion-tienda.html',
})
export class UbicacionTiendaPage {
  tiendaForm: FormGroup;
  public rut;
  public name;
  public giro;
  public fono;
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

                this.tiendaForm = this.fb.group({
                  Direccion: [''],
                  Comuna: [''],
                  Ciudad: [''],
                  Pais: [''],
                  Oferta: [''],

                  lat : '1',
                  lng : '1',
                  cig : false,


                  rut: navParams.get("rut"),
                  name:  navParams.get("name"),
                  giro: navParams.get("giro"),
                  fono: navParams.get("fono"),
                  email: navParams.get("forma")
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Socio2Page');
    console.log(this.tiendaForm);
  }

  miUbicacion()  {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.tiendaForm.patchValue({lat:resp.coords.latitude, lng:resp.coords.longitude});
      console.log(resp.coords.latitude,resp.coords.longitude);
      this.usarLoc();
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);

});
  }

  usarLoc(){



    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.tiendaForm.value['lat'] + ',' + this.tiendaForm.value['lng'])
    .map((res) => res.json())
    .subscribe(guess => {
      if(guess.status == "OK") {
      console.log(guess.results[0]);
      this.tiendaForm.patchValue({Direccion: guess.results[0].address_components[1].long_name + ' ' + guess.results[0].address_components[0].long_name ,Comuna: guess.results[0].address_components[2].long_name,Ciudad: guess.results[0].address_components[4].long_name,Pais: guess.results[0].address_components[6].long_name});
      if(this.cigarros == true){
      this.tiendaForm.patchValue({cig: true});
      }
    }

    else{
    this.presentAlert();

    }
      },
    );


  }
  saveData(){
    alert(JSON.stringify(this.tiendaForm.value));
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Dirección no encontrada',
    buttons: ['Ok']
  });
  alert.present();
}


  accion()
  {
if(this.navParams.get('modi') == true){
 this.ModificaTienda();


}
else{
  this.GuardaTienda();
}

  }


  GuardaTienda() {
  this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.tiendaForm.value['Direccion'] + ' ' + this.tiendaForm.value['Comuna'] + ' Chile' )
  .map((res) => res.json())
  .subscribe(guess => {
    if(guess.status == "OK") {
    console.log(guess.results[0]);
    this.tiendaForm.patchValue({lat: guess.results[0].geometry.location.lat.toString(),lng: guess.results[0].geometry.location.lng.toString()});
    this.c1 = guess.results[0].geometry.location.lat.toString();
    this.c2 = guess.results[0].geometry.location.lng.toString();
    this.tiendaForm.patchValue({lat: this.c1,lng: this.c2});
    if(this.cigarros == true){
    this.tiendaForm.patchValue({cig: true});
    }
    this.service.GrabaTienda(this.tiendaForm.value)
          .subscribe(
                data=>{

                  this.navCtrl.setRoot(CasaPage);

                      //console.log(data.arguments);
                      //this.getDatos();
                },
                err=>console.log(err)
          );
}

else{
this.presentAlert();

}
    },
  );
  }




  ModificaTienda() {
  this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.tiendaForm.value['Direccion'] + ' ' + this.tiendaForm.value['Comuna'] + ' Chile' )
  .map((res) => res.json())
  .subscribe(guess => {
    if(guess.status == "OK") {
    console.log(guess.results[0]);
    this.tiendaForm.patchValue({lat: guess.results[0].geometry.location.lat.toString(),lng: guess.results[0].geometry.location.lng.toString()});
    this.c1 = guess.results[0].geometry.location.lat.toString();
    this.c2 = guess.results[0].geometry.location.lng.toString();
    this.tiendaForm.patchValue({lat: this.c1,lng: this.c2});
    if(this.cigarros == true){
    this.tiendaForm.patchValue({cig: true});
    }
    this.service.ModificaTienda(this.tiendaForm.value)
          .subscribe(
                data=>{

                  this.navCtrl.setRoot(CasaPage);

                      //console.log(data.arguments);
                      //this.getDatos();
                },
                err=>console.log(err)
          );
}

else{
this.presentAlert();

}
    },
  );
  }
}
