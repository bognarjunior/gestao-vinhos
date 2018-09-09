import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { VinhosComponent, CadastroComponent } from './components';
import { VinhosService } from './services';
import { VinhoApi } from './api';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(VinhoApi),
    AppRoutingModule
  ],
  providers: [
    VinhosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
