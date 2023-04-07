import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationcompteComponent } from './creationcompte.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    CreationcompteComponent
  ],
  imports: [
    CommonModule,HeaderModule
  ],
  exports: [CreationcompteComponent]
})
export class CreationcompteModule { }
