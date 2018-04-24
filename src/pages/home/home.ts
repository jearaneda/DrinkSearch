import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ContactoPage } from '../contacto/contacto';
import { LoginPage } from '../login/login';
import { Http, Headers } from '@angular/http';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tiendaForm: FormGroup;
    public email;
  public rut;
  public name;
  public giro;
  public fono;
  c1: any;
  c2: any;
  cigarros: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public fb: FormBuilder ) {


    this.tiendaForm = this.fb.group({
      email: navParams.get('email'),
    });

  }

 ionViewDidEnter(){

 }

 activarManejo(){
this.onConductor(this.tiendaForm.value)
         .subscribe(
               data=>{
                console.log(data);

                     //console.log(data.arguments);
                     //this.getDatos();
               },
               err=>console.log(err)
         );



 }




 desactivarManejo(){
this.offConductor(this.tiendaForm.value)
         .subscribe(
               data=>{
                console.log(data);

                     //console.log(data.arguments);
                     //this.getDatos();
               },
               err=>console.log(err)
         );



 }



  goHome(){
    this.navCtrl.push(TabsPage);
  }

  onConductor(params){
    console.log(params);

    let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

    return this.http.post( "http://www.bicicletapp.com/activoConductor.php",params,{
      headers:headers,
      method:"POST"
    }).map(
      res => {return res.json}

    );


  }




  offConductor(params){
    console.log(params);

    let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

    return this.http.post( "http://www.bicicletapp.com/desactivoConductor.php",params,{
      headers:headers,
      method:"POST"
    }).map(
      res => {return res.json}

    );


  }

  goContacto():void{
    this.navCtrl.push(ContactoPage);
}
goLogin():void{
  this.navCtrl.push(LoginPage);
}


}
