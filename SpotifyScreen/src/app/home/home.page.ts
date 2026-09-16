import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  estiloFondo = {
    '--background':
      'linear-gradient(180deg, #477b56 0%, #17291d 35%, #090909 68%, #000000 100%)'
  };

  estiloCaratula = {
    'background':
      'linear-gradient(135deg, #55d769 0%, #1eaa42 100%)'
  };

  constructor() {}

}