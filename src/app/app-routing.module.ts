import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detalhe/:id',
    loadChildren: () => import('./detalhe-oleo/detalhe-oleo.module').then( m => m.DetalheOleoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./form-cadastro/form-cadastro.module').then( m => m.FormCadastroModule)
  },
  {
    path: 'cadastro', component:FormCadastroComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
