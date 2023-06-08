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
      for (let i = 0 ; i < 50; i++){
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);

        }
        console.log(test);
      this.pokemonData = UserService.pokeData;

        }

    , 1000);
  }

random = UserService.random;
random2 = UserService.random2;
  pokemonData : any;
  pokemonsearch : any = [];
  @Input() search : string = "";


 test(): void{
  let result = [];
  for (let i = 0 ; i < this.pokemonData.length; i++){
    if(this.pokemonData[i].name.includes(this.search)){
      result.push(this.pokemonData[i]);
      }}}
 
    




 }






 


   
  
  





