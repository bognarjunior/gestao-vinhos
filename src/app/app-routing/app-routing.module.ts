import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VinhosComponent, CadastroComponent, DetalhesComponent } from '../components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/listar',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    component: VinhosComponent
  },
  {
    path: 'cadastrar',
    component: CadastroComponent
  },
  {
    path: 'detalhe/:id',
    component: DetalhesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
