import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TitreComponent } from './titre/titre.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [

    TitreComponent,
     NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TitreComponent,NavbarComponent]
})
export class AppModule { }
