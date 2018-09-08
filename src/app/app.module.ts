import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components';
import { VinhosService } from './services';
import { VinhoApi } from './api';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(VinhoApi)
  ],
  providers: [
    VinhosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
