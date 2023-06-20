import { Component } from '@angular/core';
import { AppRoutingModule } from '../app.routing.module';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <img src="https://www.pokepedia.fr/images/0/0c/Professeur_Chen-LGPE.png?20180712143311"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <button routerLink="/carte" >
        Retourner à l' accueil
      </button>
    </div>
  `,
})
export class PageNotFoundComponent {}
