import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalheOleoPage } from './detalhe-oleo.page';

import { IonicModule } from '@ionic/angular';

import { detalheOleoPageRoutingModule } from './detalhe-oleo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    detalheOleoPageRoutingModule
  ],
  declarations: [DetalheOleoPage]
})
export class DetalheOleoPageModule {}
