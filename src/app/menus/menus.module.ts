import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,HeaderModule
  ],
  exports: [MenusComponent]
})
export class MenusModule { }
