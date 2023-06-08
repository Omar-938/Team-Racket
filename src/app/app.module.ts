import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TeamDevComponent } from './team-dev/team-dev.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  { path: 'team-dev', component: TeamDevComponent },
  { path: 'carte', component: CarteComponent },
  {path:'footer', component: FooterComponent},
  {path:'header', component: HeaderComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    TeamDevComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

 export class AppRoutingModule { 


 }
