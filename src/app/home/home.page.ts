import { Component,ViewChild } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DetalheComponent } from '../detalhe/detalhe.component';

import { OleoService } from '../services/oleo.service';
import { Oleo } from '../view-models/oleo.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private oleoService: OleoService) { }
  customColor: string = '#66CDAA';
  oleos: any;
  @ViewChild(DetalheComponent) detalheComponent!: DetalheComponent;
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {

   }
   
}
