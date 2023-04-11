import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from './carte/carte.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [CarteComponent],
  imports: [
    CommonModule,HeaderModule
  ],
  exports: [CarteComponent]
})
export class CartemoduleModule { }
