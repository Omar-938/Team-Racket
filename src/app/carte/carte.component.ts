import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, min } from 'rxjs';
import { UserService } from '../user.service';
import { cardFlip, flipIn, zoomIn, rotateIn, fadeIn } from '../animations/animations';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
  animations: [ cardFlip, flipIn, zoomIn, rotateIn, fadeIn ]
})
export class CarteComponent implements OnInit {

  constructor(private http: HttpClient) {}



  random = UserService.random;
  random2 = UserService.random2;
  pokemonData: any;
  pokemonDataBis: any;
  nombre: any;
  pokemonsearch: any ;
  search: string = "";
  length: number = 0;
  infoPokemon : any;
  id : string = "";
  image : string = "";
  infoAffichage : any = [];
  
  ngOnInit(): void {

    setTimeout(() => {
      let test = [];
      for (let i = 0; i < 3409; i++) {
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);
        test[i].name = UserService.pokeData[i].name.toLowerCase();

      }

      this.pokemonData = test;
      this.nombre = UserService.nombretest;
     
      
    }
      , 1000);
  }  


  evolution(){
    // si le nom de evolve from de la carte plus 1 === le nom de la carte afficher => renvoie cette carte dans évolution ? rien arricher !!   
  }
 
  infoAffichageType : any ;
  infoAffichageAttacks : any;


  info(text : any){
    this.http.get(`https://api.tcgdex.net/v2/fr/cards/${text}`).subscribe((data)=>{
      this.infoPokemon = data;
      this.infoAffichage = this.infoPokemon;
      this.infoAffichageType = this.infoPokemon.types
      this.infoAffichageAttacks = this.infoPokemon.attacks
     console.log(this.infoAffichage);
      
    })
  }

  randomToClick : boolean = false;
  toClick : boolean = true;

  carteToClick(){
    this.toClick = !this.toClick;
    this.randomToClick = !this.randomToClick;
  }

  carteRecherche(index : any){
    this.id = this.pokemonsearch[index].id;
    this.image = this.pokemonsearch[index].image;
    this.info(this.id);
    this.toClick = !this.toClick;
    this.randomToClick = !this.randomToClick;
  }

  carte(index : number): void{
    this.id = this.pokemonData[index + UserService.random].id;
    this.info(this.id);
    this.toClick = !this.toClick;
    this.randomToClick = !this.randomToClick;
    this.image = this.pokemonData[index + UserService.random].image;
    
  }

  incrementNumbers() {
    UserService.incrementNumbers();
    this.nombre = UserService.nombretest;
  }
moins(){
  UserService.decrementNumbers()
  this.nombre = UserService.nombretest;
}


init(){
    
  console.log(UserService.nombretest);
    }
  

recherche(): void{
  let result = [];
  UserService.decrementNumbers();
  for (let i = 0 ; i < this.pokemonData.length; i++){
    if(this.pokemonData[i].name.startsWith(this.search)){
      result.push(this.pokemonData[i]);
      
      }}
      this.pokemonsearch = result;
      this.length = result.length;
    }



    

}



















