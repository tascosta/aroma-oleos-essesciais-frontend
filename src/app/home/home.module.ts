import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { DetalheComponentModule } from '../detalhe/detalhe.module';
import { FormCadastroModule } from '../form-cadastro/form-cadastro.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheComponentModule,
    HomePageRoutingModule,
    FormCadastroModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
