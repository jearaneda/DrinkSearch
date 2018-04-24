import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
import { TiendaPage } from '../tienda/tienda';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactoProvider} from '../../providers/contacto/contacto';
import { Facebook } from '@ionic-native/facebook';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { CasaPage } from '../casa/casa';
import { CarinfoPage } from '../carinfo/carinfo';
/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  contactoForm: FormGroup;
  isLoggedIn:boolean = false;
  users: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service : ContactoProvider,
              private face: Facebook,
              public fb: FormBuilder) {
               this.contactoForm = this.fb.group({
                 name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45)]],
                 fono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
                 email: ['', [Validators.required, Validators.email]],
                 password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
                 passwordconf: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],

               }, {validator: this.matchingPasswords('password', 'passwordconf')} );

               face.getLoginStatus()
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
    console.log('ionViewDidLoad ContactoPage');
    console.log('is socio es' + this.navParams.get('isBo'));
  }

  goTienda():void{
    let esboti = this.navParams.get('isBo');
    let forma = this.contactoForm.value['email'];
    let infocar = this.contactoForm.value;
    console.log(forma);
    if(this.navParams.get('isBo') === true){
      this.navCtrl.push(TiendaPage, {esboti,forma, infocar });
    }
    else {
      let infocar = this.contactoForm.value;
      let forma = this.contactoForm.value['email'];
      this.navCtrl.push(TabsPage, {esboti,forma, infocar});
    }
}

goLogin():void{
  let esboti = this.navParams.get('isBo');
  this.navCtrl.push(LoginPage, {esboti});
}

matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

login() {
  this.face.login(['public_profile', 'user_friends', 'email'])
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
  this.face.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}

getUserDetail(userid) {
  this.face.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
      this.contactoForm.value["name"]= res.name;
      this.contactoForm.value["email"] = res.email;
      console.log(this.contactoForm.value["name"] + this.contactoForm.value["email"]);
      this.GuardaContacto();
    })
    .catch(e => {
      console.log(e);
    });
}

GuardaContacto() {

  this.service.GrabaContacto(this.contactoForm.value)
        .subscribe(
              data=>{

                if(this.navParams.get('isBo') ==true){
                  let infocar = this.contactoForm.value;
                  let forma = this.contactoForm.value["email"];
                    this.navCtrl.setRoot(TiendaPage, {forma, infocar});
                    //console.log(data.arguments);
                    //this.getDatos();
                    }
                 else{
                   let infocar = this.contactoForm.value;
                   let forma = this.contactoForm.value['email'];
                    this.navCtrl.setRoot(CarinfoPage, {forma, infocar});
                 }
              },
              err=>console.log(err)
        );
}

}
