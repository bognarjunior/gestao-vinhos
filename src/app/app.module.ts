import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { VinhosComponent, CadastroComponent, DetalhesComponent, NotificacaoComponent } from './components';
import { VinhosService, NotificacaoService } from './services';
import { VinhoApi } from './api';
import { FiltroTabelaPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroComponent,
    DetalhesComponent,
    NotificacaoComponent,
    FiltroTabelaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule
  ],
  providers: [
    VinhosService,
    NotificacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
