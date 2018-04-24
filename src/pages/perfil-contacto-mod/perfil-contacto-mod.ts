//import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component } from '@angular/core';
import { PerfilContactoPage } from '../perfil-contacto/perfil-contacto';
import {ContactoProvider} from '../../providers/contacto/contacto';
import {UbicacionTiendaPage} from  '../ubicacion-tienda/ubicacion-tienda';
/**
 * Generated class for the PerfilContactoModPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class User {
  username: string;
  password: string;
}
@Component({
  selector: 'page-perfil-contacto-mod',
  templateUrl: 'perfil-contacto-mod.html',
})
export class PerfilContactoModPage {
  orderForm: FormGroup;
  inputDisabled: boolean;
  nombre: any;
  fono: any;
  email: any;
  oferta: any;
  modi: any;
  password: any;
  user: User = {
    username: '',
    password: ''}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public service : ContactoProvider,
              public fb: FormBuilder) {

                this.orderForm = this.fb.group({
                name:  ['', [Validators.required]],
                fono:  ['', [Validators.required]],
                email:  ['', [Validators.required]],
              });
                this.nombre = navParams.get("nombre"),
                this.fono = navParams.get("fono"),
                this.email = navParams.get("email"),
                this.password = navParams.get("password")

                }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilContactoPage');

  }

  goModificar(){

    let alert = this.alertCtrl.create({
      title: 'Modificacion',
      subTitle: 'Datos modificados satisfactoriamente',
      buttons: ['Ok']
    });

  alert.present();

  this.navCtrl.push(UbicacionTiendaPage, {

      nombre: this.nombre,
      fono: this.fono,
      email: this.email,
      password: this.password,
      modi: true
  })
/////////////
  this.service.getModificar(this.orderForm.value)
  .subscribe(
      datas => {

            if(datas){

                this.navCtrl.push(UbicacionTiendaPage, {

                    email: this.navParams.get('email'),
                    modi: true

                })

            }else{


            //alert("usuario ou senha inválido")


            }
});

  }
}
