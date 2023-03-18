import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

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
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.obterOleos();
   }
   
  obterOleos() {
    this.oleoService.get().subscribe(
      data => {
        this.oleos = data as Oleo;
      }
    );
  }

}
