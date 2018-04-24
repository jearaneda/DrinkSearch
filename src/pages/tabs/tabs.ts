import { Component } from '@angular/core';

import { ListaPage } from '../lista/lista';
import { MapaPage } from '../mapa/mapa';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = ListaPage;

  constructor() {

  }
}
