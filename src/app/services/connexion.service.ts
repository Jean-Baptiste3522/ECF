import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private loggedIn = false;

  constructor() { }

  login(email: string, password: string): void {
    // Vérification des identifiants auprès de la base de données
    if (email === 'admin@example.com' && password === 'password') {
      this.loggedIn = true;
      // Stockage de l'information de connexion dans la session
      sessionStorage.setItem('loggedIn', 'true');
    }
  }

  isLoggedIn(): boolean {
    // Récupération de l'information de connexion depuis la session
    return this.loggedIn || sessionStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    // Suppression de l'information de connexion de la session
    this.loggedIn = false;
    sessionStorage.removeItem('loggedIn');
  }
}
