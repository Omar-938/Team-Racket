import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  ngOnInit(): void {

    setTimeout(() => {
      let test = [];
      for (let i = 0; i < 3409; i++) {
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);
        test[i].name = UserService.pokeData[i].name.toLowerCase();

      }

      this.pokemonData = test;
      
     
      
    }
      , 1000);
  }  


pokemonData : any;


}
