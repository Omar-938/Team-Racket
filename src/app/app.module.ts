import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DetailCarteComponent } from './detail-carte/detail-carte.component';

=======
>>>>>>> dev
import { DevTeamComponent } from './dev-team/dev-team.component';
import { AppRoutingModule } from './app.routing.module';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CarteComponent,
    HeaderComponent,
    FooterComponent,
    DevTeamComponent,
    LoginComponent,
    DetailCarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
