import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactoPage } from '../pages/contacto/contacto';
import { CasaPage } from '../pages/casa/casa';
import { TiendaPage } from '../pages/tienda/tienda';
import { LoginPage } from '../pages/login/login';
import { ListaPage } from '../pages/lista/lista';
import { MapaPage } from '../pages/mapa/mapa';
import { UbicacionTiendaPage } from '../pages/ubicacion-tienda/ubicacion-tienda';
import { DetalleLocalPage } from '../pages/detalle-local/detalle-local';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactoProvider } from '../providers/contacto/contacto';
import { ConectividadProvider } from '../providers/conectividad/conectividad';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { TiendasProvider } from '../providers/tiendas/tiendas';
import { PerfilContactoPage } from '../pages/perfil-contacto/perfil-contacto';
import { PerfilContactoModPage } from '../pages/perfil-contacto-mod/perfil-contacto-mod';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CarinfoPage } from '../pages/carinfo/carinfo';
import { DeliveryPage } from '../pages/delivery/delivery';
import { TravelPage } from '../pages/travel/travel';
import { TomarPage } from '../pages/tomar/tomar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ContactoPage,
    TiendaPage,
    LoginPage,
    ListaPage,
    MapaPage,
    CasaPage,
    UbicacionTiendaPage,
    DetalleLocalPage,
    PerfilContactoPage,
    DeliveryPage,
    CarinfoPage,
    TomarPage,
    TravelPage,
    PerfilContactoModPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        scrollAssist: false,
        autoFocusAssist: false
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContactoPage,
    TiendaPage,
    LoginPage,
    DeliveryPage,
    ListaPage,
    MapaPage,
    TomarPage,
    UbicacionTiendaPage,
    CasaPage,
    TravelPage,
    DetalleLocalPage,
    CarinfoPage,
    PerfilContactoPage,
    PerfilContactoModPage
  ],
  providers: [
    StatusBar,
    Diagnostic,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactoProvider,
    ConectividadProvider,
    GoogleMapsProvider,
    Facebook,
    ConectividadProvider,
    TiendasProvider,
    Geolocation,
    Network
  ]
})
export class AppModule {}
