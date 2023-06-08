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
      for (let i = 0 ; i < 3409; i++){
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);
        test[i].name = UserService.pokeData[i].name.toLowerCase();

        }
        
      this.pokemonData = test;
    }
    , 1000);
  }

random = UserService.random;
bryce = UserService.bryce;
nombre : any;
random2 = UserService.random2;
  pokemonData : any;
 @Input() pokemonsearch : any = [];
  @Input() search : string = "";

test123(){
  if(this.search == ''){
    this.bryce = UserService.bryce;
    this.bryce += 20;
    this.nombre = this.bryce;
  }
  else if(this.bryce > 21){
    this.bryce += 20;
    this.nombre = this.bryce;
  }
  console.log(this.bryce)
}
 
 
    




 }






 


   
  
  





