import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { PikaComponent } from './pika/pika.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full',},
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent,canActivate : [authGuard]  },
  { path: 'carte', component: CarteComponent,canActivate: [authGuard] },
  { path: 'footer', component: FooterComponent, canActivate: [authGuard] },
    { path: 'dev-team', component: DevTeamComponent, canActivate: [authGuard] },
    { path: 'profil/:nom', component: ProfilComponent, canActivate: [authGuard] },
    { path: 'pika', component: PikaComponent, canActivate: [authGuard] },
    { path: 'formulaire', component: FormulaireComponent, canActivate: [authGuard]},
  { path: '**', component: PageNotFoundComponent, canActivate: [authGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }