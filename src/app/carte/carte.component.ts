import { Component, OnInit } from '@angular/core';
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
      this.pokemonData = UserService.pokeData;
        }

    , 1000);
  }

random = UserService.random;
random2 = UserService.random2;
  pokemonData : any;
  

 


 
}

   
  
  





