import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserverComponent } from './reserver/reserver.component';




@NgModule({
  declarations: [
    ReserverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ReserverComponent]
})
export class ReservationModule { }
