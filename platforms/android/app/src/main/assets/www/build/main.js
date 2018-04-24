webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacto_contacto__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CasaPage = (function () {
    function CasaPage(geolocation, navCtrl, navParams, mapache, diagnostic) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mapache = mapache;
        this.diagnostic = diagnostic;
    }
    CasaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CasaPage');
        this.getPermission();
    };
    CasaPage.prototype.goCliente = function () {
        var isSocio = false;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contacto_contacto__["a" /* ContactoPage */], { isSocio: isSocio });
        console.log(isSocio);
    };
    CasaPage.prototype.goSocio = function () {
        var isSocio = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contacto_contacto__["a" /* ContactoPage */], { isSocio: isSocio });
    };
    CasaPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
    };
    CasaPage.prototype.getPermission = function () {
        var _this = this;
        this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_COARSE_LOCATION).then(function (status) {
            console.log('AuthorizationStatus');
            console.log(status);
            if (status != _this.diagnostic.permissionStatus.GRANTED) {
                _this.diagnostic.requestRuntimePermission(_this.diagnostic.permission.ACCESS_COARSE_LOCATION).then(function (data) {
                    console.log('getCameraAuthorizationStatus');
                    console.log(data);
                });
            }
            else {
                console.log("We have the permission");
            }
        }, function (statusError) {
            console.log("statusError");
            console.log(statusError);
        });
    };
    CasaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-casa',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/casa/casa.html"*/'<!--\n  Generated template for the CasaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n    <button ion-button round outline  color="primary" style="margin-top: 20px;" (click) = "getPermission()" (click)="goHome()">Quiero tomar</button>\n  <button ion-button round outline  color="primary" style="margin-top: 20px;" (click) = "getPermission()" (click)="goCliente()">Quiero ser Delivery</button>\n  <button ion-button round outline  color="primary" style="margin-top: 20px;" (click) = "getPermission()" (click)="goSocio()">Tengo una boti</button>\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/casa/casa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], CasaPage);
    return CasaPage;
}());

//# sourceMappingURL=casa.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tienda_tienda__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacto_contacto__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carinfo_carinfo__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoPage = (function () {
    function ContactoPage(navCtrl, navParams, service, face, fb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.face = face;
        this.fb = fb;
        this.isLoggedIn = false;
        this.contactoForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(45)]],
            fono: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(11)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
            passwordconf: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
        face.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
        console.log('is socio es' + this.navParams.get('isSocio'));
    };
    ContactoPage.prototype.goTienda = function () {
        if (this.navParams.get('isSocio') === true) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tienda_tienda__["a" /* TiendaPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    ContactoPage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    ContactoPage.prototype.login = function () {
        var _this = this;
        this.face.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    ContactoPage.prototype.logout = function () {
        var _this = this;
        this.face.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    ContactoPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.face.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.users = res;
            _this.contactoForm.value["name"] = res.name;
            _this.contactoForm.value["email"] = res.email;
            console.log(_this.contactoForm.value["name"] + _this.contactoForm.value["email"]);
            _this.GuardaContacto();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ContactoPage.prototype.GuardaContacto = function () {
        var _this = this;
        this.service.GrabaContacto(this.contactoForm.value)
            .subscribe(function (data) {
            if (_this.navParams.get('isSocio') == true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tienda_tienda__["a" /* TiendaPage */]);
                //console.log(data.arguments);
                //this.getDatos();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__carinfo_carinfo__["a" /* CarinfoPage */]);
            }
        }, function (err) { return console.log(err); });
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/contacto/contacto.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Contacto</ion-title>\n\n    </ion-navbar>\n\n   </ion-header>\n\n\n\n\n\n   <ion-content  scroll="false" class="background" padding>\n\n\n\n     <button ion-button icon-left color="facebook" style="margin-bottom: 50px;" (click)="login()">\n\n       <ion-icon name="logo-facebook"></ion-icon>\n\n       Login with Facebook\n\n\n\n     </button>\n\n\n\n\n\n     <form [formGroup]="contactoForm" (ngSubmit)="GuardaContacto()" >\n\n    <ion-list   >\n\n        <ion-item>\n\n      <ion-input formControlName="name" type="text" placeholder="Nombre" ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-input formControlName="fono" type="text"  placeholder="Fono"></ion-input>\n\n    </ion-item>\n\n<ion-item>\n\n        <ion-input formControlName="email" type="text" placeholder="Correo"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n        <ion-input formControlName="password" type="password" validateEqual="password"  placeholder="Password"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n          <ion-input formControlName="passwordconf" type="password" validateEqual="passwordConfirm" placeholder="Confirmar password"></ion-input>\n\n        </ion-item>\n\n\n\n              <button ion-button full color="primary" type="submit" [disabled]="contactoForm.invalid" (click)="goTienda()">Siguiente</button>\n\n\n\n        </ion-list>\n\n        </form>\n\n\n\n        <button ion-button full color="primary" (click)="goLogin()">Ya tengo cuenta</button>\n\n\n\n\n\n    </ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/contacto/contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacto_contacto__["a" /* ContactoProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacto_contacto__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    HomePage.prototype.goContacto = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contacto_contacto__["a" /* ContactoPage */]);
    };
    HomePage.prototype.goLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Drink Search</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="background" padding>\n\n\n\n <img src="../../assets/imgs/icon.png" alt="">\n\n\n\n  <ion-list  class="animated bounceInUp"  >\n\n      <button ion-button full color="primary" style="margin-top: 20px;" type="submit" (click)="goHome()">Busqueda</button>\n\n      <button ion-button full color="primary" style="margin-top: 20px;" type="submit" (click)="goContacto()">Registrarse como socio</button>\n\n      <button ion-button full color="primary" style="margin-top: 20px;" type="submit" (click)="goLogin()">Ya tengo registro</button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacto_contacto__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_contacto_perfil_contacto__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';
//import { Validators, FormBuilder } from '@angular/forms';




//import { ModalController } from 'ionic-angular';
var User = (function () {
    function User() {
    }
    return User;
}());

var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, service, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: '',
            password: ''
        };
        this.isLoggedIn = false;
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginfb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.users = res;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.mapa = function () {
        var _this = this;
        this.service.getLogin(this.user)
            .subscribe(function (datas) {
            if (datas.result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], {
                    nombre: datas.dados.Nombre_Contacto,
                    fono: datas.dados.Fono_Socio,
                    email: datas.dados.Mail,
                    password: datas.dados.password
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error ingreso',
                    subTitle: 'Usuario o contraseña incorrectos',
                    buttons: ['Ok']
                });
                alert_1.present();
                //alert("usuario ou senha inválido")
            }
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.service.getLogin(this.user)
            .subscribe(function (datas) {
            if (datas.result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_contacto_perfil_contacto__["a" /* PerfilContactoPage */], {
                    nombre: datas.dados.Nombre_Contacto,
                    fono: datas.dados.Fono_Socio,
                    email: datas.dados.Mail,
                    password: datas.dados.password
                });
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error ingreso',
                    subTitle: 'Usuario o contraseña incorrectos',
                    buttons: ['Ok']
                });
                alert_2.present();
                //alert("usuario ou senha inválido")
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoginPage.prototype, "mapElement", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/login/login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login socio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background"  scroll="false" padding>\n\n\n\n    <button ion-button icon-left color="facebook" style="margin-bottom: 50px;" (click)="loginfb()">\n\n      <ion-icon name="logo-facebook"></ion-icon>\n\n      Login with Facebook\n\n\n\n    </button>\n\n  <ion-list>\n\n\n\n      <ion-item>\n\n\n\n        <ion-input type="text" [(ngModel)]="user.username" placeholder="Usuario"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n\n\n        <ion-input type="password" [(ngModel)]="user.password" placeholder="Password" ></ion-input>\n\n      </ion-item>\n\n\n\n    <button ion-button full color="primary" type="submit" (click)="mapa()">Ingresar</button>\n\n    <button ion-button full color="primary" type="submit" (click)="login()">Modificar</button>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacto_contacto__["a" /* ContactoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_contacto_mod_perfil_contacto_mod__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__casa_casa__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilContactoPage = (function () {
    function PerfilContactoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nombre = navParams.get("nombre"),
            this.fono = navParams.get("fono"),
            this.email = navParams.get("email"),
            this.password = navParams.get("password");
    }
    PerfilContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilContactoPage');
    };
    PerfilContactoPage.prototype.goModificar = function () {
        //this.inputDisabled = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_contacto_mod_perfil_contacto_mod__["a" /* PerfilContactoModPage */], {
            nombre: this.nombre,
            fono: this.fono,
            email: this.email,
            password: this.password
        });
    };
    PerfilContactoPage.prototype.goSalir = function () {
        //this.inputDisabled = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__casa_casa__["a" /* CasaPage */]);
    };
    PerfilContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-contacto',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/perfil-contacto/perfil-contacto.html"*/'<!--\n  Generated template for the PerfilContactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PerfilContacto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background" padding>\n    <img src="../../assets/imgs/icon.png" alt="">\n\n<ion-list  >\n<ion-item>\n<ion-input  disabled="{{isDisabled}}" type="text" value="{{nombre}}" disabled></ion-input>\n</ion-item>\n<ion-item>\n  <ion-input  disabled="{{isDisabled}}" type="text" value="{{fono}}" disabled></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input disabled="{{isDisabled}}" value="{{email}}" type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button full color="primary" type="submit" (click)="goModificar()">Modificar</button>\n    <button ion-button full color="primary"  type="submit" (click)="goSalir()">Salir</button>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/perfil-contacto/perfil-contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PerfilContactoPage);
    return PerfilContactoPage;
}());

//# sourceMappingURL=perfil-contacto.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ubicacion_tienda_ubicacion_tienda__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TiendaPage = (function () {
    function TiendaPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.socio = {};
        this.rut = {};
        this.tiendaForm = this.fb.group({
            rut: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)]],
            giro: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)]],
            fono: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
        });
    }
    TiendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocioPage');
    };
    TiendaPage.prototype.goUbiTienda = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ubicacion_tienda_ubicacion_tienda__["a" /* UbicacionTiendaPage */], {
            rut: this.tiendaForm.value['rut'],
            name: this.tiendaForm.value['name'],
            giro: this.tiendaForm.value['giro'],
            fono: this.tiendaForm.value['fono']
        });
    };
    TiendaPage.prototype.saveData = function () {
        alert(JSON.stringify(this.tiendaForm.value));
    };
    TiendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tienda',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/tienda/tienda.html"*/'<!--\n\n  Generated template for the TiendaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tienda</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background" padding>\n\n    <img src="../../assets/imgs/icon.png" alt="">\n\n      <form [formGroup]="tiendaForm" (ngSubmit)="goUbiTienda()" >\n\n          <ion-list  >\n\n\n\n<ion-item>\n\n        <ion-input formControlName="rut" type="text" placeholder = "Rut" >Rut</ion-input>\n\n      </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n        <ion-input formControlName="name" type="text" placeholder = "Nombre Tienda"  >Nombre</ion-input>\n\n      </ion-item>\n\n\n\n\n\n    <ion-item>\n\n        <ion-input formControlName="giro" type="text" placeholder = "Giro comercial"  >Giro comercial</ion-input>\n\n      </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-input formControlName="fono" type="text" placeholder = "Fono" >Fono</ion-input>\n\n      </ion-item>\n\n\n\n      <button ion-button full color="primary"  type="submit" [disabled]="tiendaForm.invalid">Siguiente</button>\n\n          </ion-list>\n\n    </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/tienda/tienda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], TiendaPage);
    return TiendaPage;
}());

//# sourceMappingURL=tienda.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionTiendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators} from '@angular/forms';





/**
 * Generated class for the UbicacionTiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UbicacionTiendaPage = (function () {
    function UbicacionTiendaPage(navCtrl, alertCtrl, navParams, http, geolocation, service, fb) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.geolocation = geolocation;
        this.service = service;
        this.fb = fb;
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
                lat: '1',
                lng: '1',
                cig: false,
                rut: navParams.get("rut"),
                name: navParams.get("name"),
                giro: navParams.get("giro"),
                fono: navParams.get("fono")
            });
    }
    UbicacionTiendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Socio2Page');
    };
    UbicacionTiendaPage.prototype.miUbicacion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.tiendaForm.patchValue({ lat: resp.coords.latitude, lng: resp.coords.longitude });
            console.log(resp.coords.latitude, resp.coords.longitude);
            _this.usarLoc();
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    UbicacionTiendaPage.prototype.usarLoc = function () {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.tiendaForm.value['lat'] + ',' + this.tiendaForm.value['lng'])
            .map(function (res) { return res.json(); })
            .subscribe(function (guess) {
            if (guess.status == "OK") {
                console.log(guess.results[0]);
                _this.tiendaForm.patchValue({ Direccion: guess.results[0].address_components[1].long_name + ' ' + guess.results[0].address_components[0].long_name, Comuna: guess.results[0].address_components[2].long_name, Ciudad: guess.results[0].address_components[4].long_name, Pais: guess.results[0].address_components[6].long_name });
                if (_this.cigarros == true) {
                    _this.tiendaForm.patchValue({ cig: true });
                }
            }
            else {
                _this.presentAlert();
            }
        });
    };
    UbicacionTiendaPage.prototype.saveData = function () {
        alert(JSON.stringify(this.tiendaForm.value));
    };
    UbicacionTiendaPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Dirección no encontrada',
            buttons: ['Ok']
        });
        alert.present();
    };
    UbicacionTiendaPage.prototype.GuardaTienda = function () {
        var _this = this;
        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.tiendaForm.value['Direccion'] + ' ' + this.tiendaForm.value['Comuna'] + ' Chile')
            .map(function (res) { return res.json(); })
            .subscribe(function (guess) {
            if (guess.status == "OK") {
                console.log(guess.results[0]);
                _this.tiendaForm.patchValue({ lat: guess.results[0].geometry.location.lat.toString(), lng: guess.results[0].geometry.location.lng.toString() });
                _this.c1 = guess.results[0].geometry.location.lat.toString();
                _this.c2 = guess.results[0].geometry.location.lng.toString();
                _this.tiendaForm.patchValue({ lat: _this.c1, lng: _this.c2 });
                if (_this.cigarros == true) {
                    _this.tiendaForm.patchValue({ cig: true });
                }
                _this.service.GrabaTienda(_this.tiendaForm.value)
                    .subscribe(function (data) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    //console.log(data.arguments);
                    //this.getDatos();
                }, function (err) { return console.log(err); });
            }
            else {
                _this.presentAlert();
            }
        });
    };
    UbicacionTiendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ubicacion-tienda',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/ubicacion-tienda/ubicacion-tienda.html"*/'<!--\n\n  Generated template for the Socio2Page page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Informacion Tienda</ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n\n\n    <ion-item>\n\n       <ion-label>¿Cigarros?</ion-label>\n\n       <ion-checkbox [(ngModel)]="cigarros"></ion-checkbox>\n\n     </ion-item>\n\n\n\n\n\n      <form [formGroup]="tiendaForm" (ngSubmit)="GuardaTienda()" novalidate>\n\n\n\n\n\n              <ion-icon name = "locate" (click)="miUbicacion()">Usar mi ubicación</ion-icon>\n\n\n\n\n\n              <ion-input formControlName="Direccion" type="text" placeholder="Direccion"></ion-input>\n\n\n\n              <ion-input formControlName="Comuna" type="text" placeholder="Comuna"></ion-input>\n\n\n\n              <ion-input formControlName="Ciudad" type="text" placeholder="Ciudad"></ion-input>\n\n\n\n              <ion-input formControlName="Pais" type="text" placeholder="Pais"></ion-input>\n\n\n\n              <ion-input formControlName="Oferta" type="text" placeholder="Baltica de litro a 1000"></ion-input>\n\n\n\n            <button ion-button block outline color="light">Agregar tienda</button>\n\n          <!--  <p>OR</p>\n\n            <button ion-button block color="facebook">\n\n              <ion-icon name="logo-facebook"></ion-icon> Login con facebook\n\n            </button> -->\n\n      </form>\n\n\n\n\n\n     <!-- <button class="bottom" ion-button clear full color="light">Don\'t have an account? Sign up</button> -->\n\n    </ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/ubicacion-tienda/ubicacion-tienda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__["a" /* TiendasProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UbicacionTiendaPage);
    return UbicacionTiendaPage;
}());

//# sourceMappingURL=ubicacion-tienda.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectividadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConectividadProvider = (function () {
    function ConectividadProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConectividadProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConectividadProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConectividadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConectividadProvider);
    return ConectividadProvider;
}());

//# sourceMappingURL=conectividad.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tiendas_tiendas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_local_detalle_local__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaPage = (function () {
    function ListaPage(navCtrl, locaciones, modalCtrl) {
        this.navCtrl = navCtrl;
        this.locaciones = locaciones;
        this.modalCtrl = modalCtrl;
    }
    ListaPage.prototype.detalleLocal = function (locacion) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detalle_local_detalle_local__["a" /* DetalleLocalPage */], { locacion: locacion });
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/lista/lista.html"*/'\n\n\n\n\n\n  <ion-content>\n\n      <ion-card *ngFor="let locacion of locaciones.data" (click)="detalleLocal(locacion)">\n\n              <img src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location={{locacion.latitud}}, {{locacion.longitud}} &pitch=-0.76">\n\n          <ion-item>\n\n              <ion-avatar item-start>\n\n                  <img src="assets/imgs/wine-icon.jpg">\n\n              </ion-avatar>\n\n              <span>{{locacion.nombre}} a {{locacion.distance}} kms</span>\n\n          </ion-item>\n\n\n\n          <ion-row>\n\n              <ion-col>\n\n                  <button ion-button icon-left clear small>\n\n                      <ion-icon name="thumbs-up"></ion-icon>\n\n                      <div>12 Likes</div>\n\n                  </button>\n\n              </ion-col>\n\n              <ion-col text-right>\n\n                  <button ion-button icon-left clear small>\n\n                      <ion-icon name="thumbs-down"></ion-icon>\n\n                      <div>6 dislikes</div>\n\n                  </button>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-card>\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/lista/lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tiendas_tiendas__["a" /* TiendasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleLocalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetalleLocalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleLocalPage = (function () {
    function DetalleLocalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.locacion = navParams.get("locacion");
    }
    DetalleLocalPage.prototype.ionViewDidEnter = function () {
        this.checkCig();
    };
    DetalleLocalPage.prototype.checkCig = function () {
        if (this.locacion.cigarros == '1') {
            this.cigs = 'Sí';
            console.log(this.locacion.cigarros);
        }
        else {
            this.cigs = 'No';
        }
    };
    DetalleLocalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle-local',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/detalle-local/detalle-local.html"*/'<ion-header>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <ion-card-content>\n\n      <p>{{locacion.direccion}} está a {{locacion.distance}} kms.</p>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon name="thumbs-up"></ion-icon>\n\n            <div>12 Likes</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button ion-button icon-left clear small>\n\n            <ion-icon name="thumbs-down"></ion-icon>\n\n            <div>6 Likes</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n    <p style="font-weight:bold;"> Ofertas </p>\n\n    <p> {{locacion.oferta}}</p>\n\n\n\n  </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content>\n\n    <p> Cigarros: {{cigs}} </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/detalle-local/detalle-local.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetalleLocalPage);
    return DetalleLocalPage;
}());

//# sourceMappingURL=detalle-local.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaPage = (function () {
    function MapaPage(navCtrl, geolocation, locaciones, maps, platform) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.locaciones = locaciones;
        this.maps = maps;
        this.platform = platform;
    }
    MapaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement);
            var locacionesCargadas = _this.locaciones.load();
            Promise.all([
                mapLoaded,
                locacionesCargadas
            ]).then(function (result) {
                var locaciones = result;
                for (var _i = 0, locaciones_1 = locaciones; _i < locaciones_1.length; _i++) {
                    var locacion = locaciones_1[_i];
                    _this.maps.addMarker(locacion.latitud, locacion.longitud);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapaPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pleaseConnect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapaPage.prototype, "pleaseConnect", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/mapa/mapa.html"*/'\n\n\n\n<ion-content>\n\n    <div #pleaseConnect id="please-connect">\n\n        <p>Please connect to the Internet...</p>\n\n      </div>\n\n  <div #map id="map">Cargando...</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__["a" /* TiendasProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilContactoModPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perfil_contacto_perfil_contacto__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacto_contacto__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component } from '@angular/core';





/**
 * Generated class for the PerfilContactoModPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var User = (function () {
    function User() {
    }
    return User;
}());

var PerfilContactoModPage = (function () {
    function PerfilContactoModPage(navCtrl, navParams, alertCtrl, service, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.fb = fb;
        this.user = {
            username: '',
            password: ''
        };
        this.orderForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            fonocon: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            mail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
        });
        this.nombre = navParams.get("nombre"),
            this.fono = navParams.get("fono"),
            this.email = navParams.get("email"),
            this.password = navParams.get("password");
    }
    PerfilContactoModPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilContactoPage');
    };
    PerfilContactoModPage.prototype.goModificar = function () {
        var _this = this;
        this.orderForm.reset();
        var alert = this.alertCtrl.create({
            title: 'Modificacion',
            subTitle: 'Datos modificados satisfactoriamente',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_contacto_perfil_contacto__["a" /* PerfilContactoPage */], {
            nombre: this.nombre,
            fono: this.fono,
            email: this.email,
            password: this.password
        });
        /////////////
        this.service.getModificar(this.user)
            .subscribe(function (datas) {
            if (datas.result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__perfil_contacto_perfil_contacto__["a" /* PerfilContactoPage */], {
                    nombre: datas.dados.Nombre_Contacto,
                    fono: datas.dados.Fono_Socio,
                    email: datas.dados.Mail,
                    password: datas.dados.password
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error ingreso',
                    subTitle: 'Usuario o contraseña incorrectos',
                    buttons: ['Ok']
                });
                alert_1.present();
                //alert("usuario ou senha inválido")
            }
        });
    };
    PerfilContactoModPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-perfil-contacto-mod',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/perfil-contacto-mod/perfil-contacto-mod.html"*/'<!--\n  Generated template for the PerfilContactoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>PerfilContacto</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content  class="background" padding>\n      <img src="../../assets/imgs/icon.png" alt="">\n     <!-- <form [formGroup]="orderForm" (ngSubmit)="submit();"> -->\n        <form [formGroup]="orderForm">\n            <ion-list  class="animated bounceInUp"  style="margin-top: 70%;" >\n  <ion-item>\n  <ion-input formControlName="name" type="text" value="{{nombre}}" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input formControlName="fonocon" type="text" value="{{fono}}" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input  formControlName="mail" value="{{email}}" type="text"></ion-input>\n      </ion-item>\n\n\n\n      <button ion-button full color="primary" style="margin-top: 70px;" type="submit" (click)="goModificar()">Grabar cambios</button>\n      <button ion-button full color="primary" style="margin-top: 70px;" type="submit" (click)="goSalir()">Salir</button>\n    </ion-list>\n      </form>\n  </ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/perfil-contacto-mod/perfil-contacto-mod.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacto_contacto__["a" /* ContactoProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], PerfilContactoModPage);
    return PerfilContactoModPage;
}());

//# sourceMappingURL=perfil-contacto-mod.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormBuilder, FormGroup, Validators} from '@angular/forms';





/**
 * Generated class for the CarinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarinfoPage = (function () {
    function CarinfoPage(navCtrl, alertCtrl, navParams, http, geolocation, service, fb) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.geolocation = geolocation;
        this.service = service;
        this.fb = fb;
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
                lat: '1',
                lng: '1',
                cig: false,
                rut: navParams.get("rut"),
                name: navParams.get("name"),
                giro: navParams.get("giro"),
                fono: navParams.get("fono")
            });
    }
    CarinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Socio2Page');
    };
    CarinfoPage.prototype.miUbicacion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.autoForm.patchValue({ lat: resp.coords.latitude, lng: resp.coords.longitude });
            console.log(resp.coords.latitude, resp.coords.longitude);
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    CarinfoPage.prototype.saveData = function () {
        alert(JSON.stringify(this.autoForm.value));
    };
    CarinfoPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Dirección no encontrada',
            buttons: ['Ok']
        });
        alert.present();
    };
    CarinfoPage.prototype.GuardaTienda = function () {
        var _this = this;
        this.service.GrabaConductor(this.autoForm.value)
            .subscribe(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //console.log(data.arguments);
            //this.getDatos();
        }, function (err) { return console.log(err); });
    };
    CarinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carinfo',template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/carinfo/carinfo.html"*/'<!--\n  Generated template for the Socio2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Informacion Conductor</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n\n\n      <form [formGroup]="autoForm" (ngSubmit)="GuardaTienda()" novalidate>\n\n\n\n              <ion-input formControlName="Direccion" type="text" placeholder="Patente"></ion-input>\n\n              <ion-input formControlName="Comuna" type="text" placeholder="Modelo"></ion-input>\n\n              <ion-input formControlName="Ciudad" type="text" placeholder="Año"></ion-input>\n\n              <ion-input formControlName="Pais" type="text" placeholder="Color"></ion-input>\n\n              <ion-input formControlName="Oferta" type="text" placeholder="Comunas en las que trabajas"></ion-input>\n\n            <button ion-button block outline color="light">Agregar tienda</button>\n          <!--  <p>OR</p>\n            <button ion-button block color="facebook">\n              <ion-icon name="logo-facebook"></ion-icon> Login con facebook\n            </button> -->\n      </form>\n\n\n     <!-- <button class="bottom" ion-button clear full color="light">Don\'t have an account? Sign up</button> -->\n    </ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/carinfo/carinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tiendas_tiendas__["a" /* TiendasProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CarinfoPage);
    return CarinfoPage;
}());

//# sourceMappingURL=carinfo.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contacto_contacto__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_casa_casa__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tienda_tienda__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_lista_lista__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mapa__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_ubicacion_tienda_ubicacion_tienda__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_detalle_local_detalle_local__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_contacto_contacto__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_conectividad_conectividad__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_google_maps_google_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_tiendas_tiendas__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_perfil_contacto_perfil_contacto__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_perfil_contacto_mod_perfil_contacto_mod__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_diagnostic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_carinfo_carinfo__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tienda_tienda__["a" /* TiendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_casa_casa__["a" /* CasaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ubicacion_tienda_ubicacion_tienda__["a" /* UbicacionTiendaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detalle_local_detalle_local__["a" /* DetalleLocalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_perfil_contacto_perfil_contacto__["a" /* PerfilContactoPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_carinfo_carinfo__["a" /* CarinfoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_perfil_contacto_mod_perfil_contacto_mod__["a" /* PerfilContactoModPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tienda_tienda__["a" /* TiendaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_ubicacion_tienda_ubicacion_tienda__["a" /* UbicacionTiendaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_casa_casa__["a" /* CasaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_detalle_local_detalle_local__["a" /* DetalleLocalPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_carinfo_carinfo__["a" /* CarinfoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_perfil_contacto_perfil_contacto__["a" /* PerfilContactoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_perfil_contacto_mod_perfil_contacto_mod__["a" /* PerfilContactoModPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_contacto_contacto__["a" /* ContactoProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_conectividad_conectividad__["a" /* ConectividadProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__providers_conectividad_conectividad__["a" /* ConectividadProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_tiendas_tiendas__["a" /* TiendasProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_casa_casa__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_casa_casa__["a" /* CasaPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiendasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_maps_google_maps__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TiendasProvider = (function () {
    function TiendasProvider(http, googleMaps, geolocation) {
        this.http = http;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
    }
    TiendasProvider.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://www.bicicletapp.com/listado.php').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.data = _this.applyHaversine(data);
                _this.data.sort(function (locationA, locationB) {
                    return locationA.distance - locationB.distance;
                });
                resolve(_this.data);
            });
        });
    };
    TiendasProvider.prototype.applyHaversine = function (locations) {
        this.geolocation.getCurrentPosition().then(function (pos) {
            var usersLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            locations.map(function (location) {
                var placeLocation = {
                    lat: location.latitud,
                    lng: location.longitud
                };
                var directionsService = new google.maps.DirectionsService();
                var request = {
                    origin: usersLocation.lat + ' ' + usersLocation.lng,
                    destination: placeLocation.lat + ' ' + placeLocation.lng,
                    waypoints: [],
                    travelMode: google.maps.TravelMode.WALKING
                };
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        var myroute = response.routes[0];
                        var total = 0;
                        for (var i = 0; i < myroute.legs.length; i++) {
                            total += myroute.legs[i].distance.value;
                        }
                        location.distance = total / 1000.0;
                    }
                });
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        return locations;
    };
    TiendasProvider.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var R = 6378137;
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    TiendasProvider.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    TiendasProvider.prototype.GrabaTienda = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post("http://www.bicicletapp.com/GuardaTienda.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json; });
    };
    TiendasProvider.prototype.GrabaConductor = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post("http://www.bicicletapp.com/GuardaConductor.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json; });
    };
    TiendasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TiendasProvider);
    return TiendasProvider;
}());

//# sourceMappingURL=tiendas.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_lista__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* MapaPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__lista_lista__["a" /* ListaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbook/Desktop/drink/src/pages/tabs/tabs.html"*/'<ion-header>\n\n<ion-navbar >\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Mapass" tabIcon="map"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Botis cerca" tabIcon="list-box"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/macbook/Desktop/drink/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conectividad_conectividad__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(connectivityService, geolocation, http) {
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.http = http;
        this.mapInitialised = false;
        this.markers = [];
        // add your apiKey for GoogleMaps
        // example: apiKey: string = 'ARfdaDE..';
        this.apiKey = 'AIzaSyC7FgHWjWc_FgheiKbuS5yp0R35-luEpMM';
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.getMarkers = function () {
        var _this = this;
        this.http.get('http://www.bicicletapp.com/listado.php')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.addMarkersToMap(data);
            console.log(data);
        });
    };
    GoogleMapsProvider.prototype.addMarkersToMap = function (marcadores) {
        for (var _i = 0, marcadores_1 = marcadores; _i < marcadores_1.length; _i++) {
            var marcador = marcadores_1[_i];
            var position = new google.maps.LatLng(marcador.latitud, marcador.longitud);
            new google.maps.Marker({ map: this.map, position: position, title: marcador.nombre, icon: 'http://www.bestbeerhq.com/wp-content/uploads/2015/08/cropped-Beer-icon-32x32.png' });
        }
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                // UNCOMMENT FOR NORMAL USE
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                //let latLng = new google.maps.LatLng(40.713744, -74.009056);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                _this.getMarkers();
                new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng,
                    icon: 'https://www.robotwoods.com/dev/misc/bluecircle.png'
                });
                resolve(true);
            });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        document.addEventListener('online', function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        }, false);
        document.addEventListener('offline', function () {
            console.log("offline");
            _this.disableMap();
        }, false);
    };
    GoogleMapsProvider.prototype.addMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        this.markers.push(marker);
    };
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__conectividad_conectividad__["a" /* ConectividadProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ContactoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactoProvider = (function () {
    function ContactoProvider(http) {
        this.http = http;
        console.log('Hello ContactoProvider Provider');
    }
    ContactoProvider.prototype.getLogin = function (user) {
        var urlDest = "http://www.bicicletapp.com/login.php?username=" + user.username + "&password=" + user.password;
        return this.http.get(urlDest)
            .map(function (res) { return res.json(); });
        //.map(res => {return res.json}
    };
    ContactoProvider.prototype.getModificar = function (user) {
        var urlDest = "http://www.bicicletapp.com/UpdateContacto.php?username=" + user.username + "&password=" + user.password;
        return this.http.get(urlDest)
            .map(function (res) { return res.json(); });
        //.map(res => {return res.json}
    };
    ContactoProvider.prototype.GrabaContacto = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post("http://www.bicicletapp.com/GuardaContacto.php", params, {
            headers: headers,
            method: "POST"
        }).map(function (res) { return res.json; });
    };
    ContactoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ContactoProvider);
    return ContactoProvider;
}());

//# sourceMappingURL=contacto.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map