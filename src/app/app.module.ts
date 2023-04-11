import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalerieModule } from './galerie/galerie.module';
import { HeaderModule } from './header/header.module';
import { CartemoduleModule } from './cartemodule/cartemodule.module';
import { ReservationModule } from './reservation/reservation.module';
import { AccueilModule } from './accueil/accueil.module';
import { MenusModule } from './menus/menus.module';
import { CarteComponent } from './cartemodule/carte/carte.component';
import { MenusComponent } from './menus/menus.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header/header.component';







@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AppRoutingModule,HeaderModule, GalerieModule,ReservationModule,AccueilModule,CartemoduleModule,MenusModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
