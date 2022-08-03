import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Socket } from 'socket.io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    
  providers:[Socket],
  bootstrap: [AppComponent]
})
export class AppModule { }
