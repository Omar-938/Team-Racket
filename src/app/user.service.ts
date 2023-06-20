import { useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService{


  
  constructor(private http: HttpClient) {}
  static random = Math.round(Math.random()*700);
  static random2 = UserService.random + 20;
   static nombretest = 20;
  static pokeData : any;
  static namePokemon = new Set();
  static pokemonData = fetch('https://api.tcgdex.net/v2/fr/cards/')
  .then((response) => response.json())
  .then((data) => {
    
    UserService.pokeData = data.filter((item: any) => {if (item.image !== undefined && !UserService.namePokemon.has(item.name)) {
      UserService.namePokemon.add(item.name);
      return true;
    }
    return false;
  });

    });

   static incrementNumbers(): void{
    
    UserService.nombretest += 20;
    console.log(UserService.nombretest,"le plus 20")
  }

   static decrementNumbers(): void{
    UserService.nombretest = 20;
    
  }
  
    
  }









