import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VinhosComponent, CadastroComponent } from '../components';

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
