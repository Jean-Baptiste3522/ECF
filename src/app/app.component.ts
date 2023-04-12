import { Component } from '@angular/core';
import { initializeApp } from "firebase/app"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  titre="ECF";
  constructor (){
    const firebaseConfig = {
      apiKey: "AIzaSyAGLR6g9BN1zEGAiPKQLjEXT-RnoocDp-s",
      authDomain: "ecf-jbs.firebaseapp.com",
      projectId: "ecf-jbs",
      storageBucket: "ecf-jbs.appspot.com",
      messagingSenderId: "336652190862",
      appId: "1:336652190862:web:7573cc8cc32309a1d0b5df"
    };
    const app = initializeApp(firebaseConfig);
  }
}
