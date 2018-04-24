import { Http, Headers, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactoProvider {

  constructor(public http: Http) {
    console.log('Hello ContactoProvider Provider');
  }

  getLogin(user) {
    let urlDest = "http://www.bicicletapp.com/login.php?username=" + user.username + "&password=" + user.password;
    return this.http.get(urlDest)
              .map( (res:Response) => res.json());
              //.map(res => {return res.json}

  }

  getModificar(params) {
  let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

  return this.http.post( "http://www.bicicletapp.com/updateDrink.php",params,{
    headers:headers,
    method:"POST"
  }).map(
    res => {return res.json}

  );

  }


GrabaContacto(params)
{
let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});

return this.http.post( "http://www.bicicletapp.com/GuardaContacto.php",params,{
  headers:headers,
  method:"POST"
}).map(
  res => {return res.json}

);

}

}
