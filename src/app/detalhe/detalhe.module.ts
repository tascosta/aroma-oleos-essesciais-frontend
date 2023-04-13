import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheComponent } from './detalhe.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    MatTableModule,
  ],
  declarations: [DetalheComponent],
  exports: [DetalheComponent]
})
export class DetalheComponentModule { }
