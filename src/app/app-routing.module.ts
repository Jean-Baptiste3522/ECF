import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CarteComponent } from './cartemodule/carte/carte.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
	{ path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent},
  { path: '/carte', component: CarteComponent},
  { path: '/contact', component: AppComponent},
  { path: '/menus', component: AppComponent},
  { path: '/connexion', component: AppComponent},
  { path: '/reservation', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
