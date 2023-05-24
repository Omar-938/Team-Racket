import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
