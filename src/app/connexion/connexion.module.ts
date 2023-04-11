import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    ConnexionComponent,
  ],
  imports: [
    CommonModule,HeaderModule
  ],
  exports: [ConnexionComponent]
})
export class ConnexionModule { }
