import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DevTeamComponent } from './dev-team/dev-team.component';


const routes: Routes = [
{ path: '', redirectTo: 'carte', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'footer', component: FooterComponent },
    { path: 'dev-team', component: DevTeamComponent },
  { path: '**', component: PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }