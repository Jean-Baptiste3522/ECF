import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,HeaderModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
