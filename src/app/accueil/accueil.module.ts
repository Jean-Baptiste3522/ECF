import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { GalerieModule } from '../galerie/galerie.module';
import { ReservationModule } from '../reservation/reservation.module';



@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule,HeaderModule,GalerieModule,ReservationModule],
  exports: [AccueilComponent]
})
export class AccueilModule { }
