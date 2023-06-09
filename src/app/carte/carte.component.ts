import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, min } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {


  ngOnInit(): void {

    setTimeout(() => {
      let test = [];
      for (let i = 0; i < 3409; i++) {
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);
        test[i].name = UserService.pokeData[i].name.toLowerCase();

      }

      this.pokemonData = test;
      this.nombre = UserService.nombretest
    }
      , 1000);
  }

  random = UserService.random;
  random2 = UserService.random2;
  pokemonData: any;
  nombre: any;
  @Input() pokemonsearch: any = [];
  @Input() search: string = "";
  @Input() length: number = 0;

  incrementNumbers() {
    UserService.incrementNumbers();
    this.nombre = UserService.nombretest;
  }
moins(){
  UserService.decrementNumbers()
  this.nombre = UserService.nombretest;
}


image(){
  
}

}

















