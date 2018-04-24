import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UbicacionTiendaPage } from '../ubicacion-tienda/ubicacion-tienda';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the SocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {
  socio : any = {};
  rut : any = {};
  cigarros: boolean;

  tiendaForm: FormGroup;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             public fb: FormBuilder) {
              this.tiendaForm = this.fb.group({
                rut: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
                name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
                giro: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
                fono: ['', [Validators.required]],

              });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocioPage');
    console.log(this.navParams.get('forma'));
  }


  goUbiTienda():void{

    this.navCtrl.push(UbicacionTiendaPage,{//this.fb.('rut')

                                  rut: this.tiendaForm.value['rut'],
                                  name: this.tiendaForm.value['name'],
                                  giro: this.tiendaForm.value['giro'],
                                  fono: this.tiendaForm.value['fono'],
                                  forma: this.navParams.get('forma'),
                                }  )
                                }


saveData(){
  alert(JSON.stringify(this.tiendaForm.value));
}


}
