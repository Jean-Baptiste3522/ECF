import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReservationComponent } from './reservation.component';





@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [ReservationComponent]
})
export class ReservationModule { }
