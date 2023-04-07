import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { CarteComponent } from './carte/carte.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CarteComponent],
  imports: [
    CommonModule,HeaderModule,AppRoutingModule
  ],
  exports: [CarteComponent]
})
export class CartemoduleModule { }
