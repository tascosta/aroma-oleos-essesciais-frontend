import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheOleoPage } from './detalhe-oleo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheOleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class detalheOleoPageRoutingModule {}
