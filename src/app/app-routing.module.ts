import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CarteComponent } from './cartemodule/carte/carte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenusComponent } from './menus/menus.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';


const routes: Routes = [
	{ path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent },
  {path: 'menus', component: MenusComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'réservation', component: ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
