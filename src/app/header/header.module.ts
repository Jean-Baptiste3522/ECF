import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitreComponent } from './header/titre/titre.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [TitreComponent,NavbarComponent, HeaderComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
