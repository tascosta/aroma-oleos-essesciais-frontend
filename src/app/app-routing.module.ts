import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'cadastro',
    loadChildren: () => import('./form-cadastro/form-cadastro.module').then( m => m.FormCadastroModule)
  },
  {
    path: 'cadastro/:editar/:_id',
    loadChildren: () => import('./form-cadastro/form-cadastro.module').then( m => m.FormCadastroModule)
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
