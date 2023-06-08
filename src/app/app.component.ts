import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      this.pokemonData = UserService.pokeData;
        }

    , 1000);
  }

  pokemonData : any;
  pokemonsearch : any = [];
  random = UserService.random;
  random2 = UserService.random2;
 


  title = 'Team_Racket';



}




 
