import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { Validators, FormBuilder } from '@angular/forms';
import {ContactoProvider} from '../../providers/contacto/contacto';
import { PerfilContactoPage } from '../perfil-contacto/perfil-contacto';
import { TabsPage } from '../tabs/tabs';
import { Facebook } from '@ionic-native/facebook';
import { Http, Headers } from '@angular/http';
import {HomePage} from '../home/home';
//import { ModalController } from 'ionic-angular';



export class User {
  username: string;
  password: string;
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  nombre: any;
  fono: any;
  email: any;
  password: any;
  user: User = {
    username: '',
    password: ''}

    isLoggedIn:boolean = false;
    users: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: Facebook,
              public service : ContactoProvider,
              public alertCtrl: AlertController,
              public http: Http

            ) {

              fb.getLoginStatus()
   .then(res => {
     console.log(res.status);
     if(res.status === "connect") {
       this.isLoggedIn = true;
     } else {
       this.isLoggedIn = false;
     }
   })
   .catch(e => console.log(e));

                }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginfb() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
  this.fb.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}

getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
}
  driverOn(params){
    let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

    return this.http.post( "http://www.bicicletapp.com/activoConductor.php",params,{
      headers:headers,
      method:"POST"
    }).map(
      res => {return res.json}

    );

  }
  mapa(){
    this.service.getLogin(this.user)
                .subscribe(
                    datas => {

                          if(datas.result){
                            if(this.navParams.get('esboti') === true){

                              this.navCtrl.push(TabsPage, {

                                  nombre: datas.dados.Nombre_Contacto,
                                  fono: datas.dados.Fono_Socio,
                                  email: datas.dados.Mail,
                                  password: datas.dados.password

                              }

                            )
}






else{

  this.navCtrl.push(HomePage, {

      nombre: datas.dados.Nombre_Contacto,
      fono: datas.dados.Fono_Socio,
      email: datas.dados.Mail,
      password: datas.dados.password

  }

)
}





                          }else{
                            let alert = this.alertCtrl.create({
                              title: 'Error ingreso',
                              subTitle: 'Usuario o contraseña incorrectos',
                              buttons: ['Ok']
                            });

                          alert.present();
                          //alert("usuario ou senha inválido")


                          }
    });

  }

  login() {
    this.service.getLogin(this.user)
                .subscribe(
                    datas => {

                          if(datas.result){



                              this.navCtrl.push(PerfilContactoPage, {

                                  nombre: datas.dados.Nombre_Contacto,
                                  fono: datas.dados.Fono_Socio,
                                  email: datas.dados.Mail,
                                  oferta: datas.dados.oferta,
                                  password: datas.dados.password
                              })

                          }else{
                            let alert = this.alertCtrl.create({
                              title: 'Error ingreso',
                              subTitle: 'Usuario o contraseña incorrectos',
                              buttons: ['Ok']
                            });

                          alert.present();
                          //alert("usuario ou senha inválido")


                          }
    });

}








}
