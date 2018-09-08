import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components';
import { VinhosService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    VinhosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
