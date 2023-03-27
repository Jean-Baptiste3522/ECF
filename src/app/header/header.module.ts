import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitreComponent } from './header/titre/titre.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [TitreComponent,NavbarComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
