import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalerieModule } from './galerie/galerie.module';
import { HeaderModule } from './header/header.module';
import { CartemoduleModule } from './cartemodule/cartemodule.module';
import { ReservationModule } from './reservation/reservation.module';
import { AccueilModule } from './accueil/accueil.module';
import { MenusModule } from './menus/menus.module';








@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,HeaderModule, GalerieModule,ReservationModule,AccueilModule,CartemoduleModule,MenusModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
