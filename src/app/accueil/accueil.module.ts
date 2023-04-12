import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { GalerieModule } from '../galerie/galerie.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule,HeaderModule,GalerieModule,AppRoutingModule],
  exports: [AccueilComponent]
})
export class AccueilModule { }
