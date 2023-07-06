import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, min } from 'rxjs';
import { UserService } from '../user.service';
import {
  myAnimation,
  flipIn,
  zoomIn,
  rotateIn,
  fadeIn,
} from '../animations/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],

  animations: [myAnimation, flipIn, zoomIn, rotateIn, fadeIn],
})
export class CarteComponent implements OnInit {
  constructor(private http: HttpClient) {}

  headerComponent: HeaderComponent = new HeaderComponent();

  returnToRandom() {
    new HeaderComponent();
  }

  random = UserService.random;
  random2 = UserService.random2;
  pokemonData: any;
  pokemonDataBis: any;
  nombre: any;
  pokemonsearch: any;
  search: string = '';
  length: number = 0;
  infoPokemon: any;
  id: string = '';
  image: string = '';
  infoAffichage: any = [];

  ngOnInit(): void {
    setTimeout(() => {
      let test = [];
      this.http.get(`https://api.tcgdex.net/v2/fr/types/`).subscribe((data) => {
        this.types = data;
      });
      for (let i = 0; i < 3409; i++) {
        UserService.pokeData[i].name.toLowerCase();
        test.push(UserService.pokeData[i]);
        test[i].name = UserService.pokeData[i].name.toLowerCase();
      }

      this.pokemonData = test;
      this.nombre = UserService.nombretest;
    }, 1000);
  }

  infoAffichageType: any;
  infoAffichageAttacks: any;
  types: any;
  filter: any;
  small : string = "/low.jpg"
  high : string = "/high.jpg"

  selecteTypes2(index: any) {
 
  

    if(index.value === "Aléatoire"){
      this.returnAleatoire()
    }
    else {

      this.http
      .get(`https://api.tcgdex.net/v2/fr/types/${index.value}`)
      .subscribe((data) => {
        this.filter = data;
        this.pokemonData = this.filter.cards.filter((card: { image: undefined; }) => card.image !== undefined);
      });


    }


    

    this.init();
  }






  selecteTypes(index: any) {

    console.log(index.value);
    console.log(index);
if(!isNaN(index)){

    this.http
      .get(`https://api.tcgdex.net/v2/fr/types/${this.types[index]}`)
      .subscribe((data) => {
        console.log("data by types", data)
        this.filter = data;
        this.pokemonData = this.filter.cards.filter((card: { image: undefined; }) => card.image !== undefined);
      
      });
    }
    if(typeof index.value === 'string'){
  this.http
      .get(`https://api.tcgdex.net/v2/fr/types/${index.value}`)
      .subscribe((data) => {
        this.filter = data;
        this.pokemonData = this.filter.cards.filter((card: { image: undefined; }) => card.image !== undefined);
      
      });
      if(index.value === 'Aléatoire'){
        this.returnAleatoire();
      }
}
    this.init();
  }

  afficherPlus() {
    this.random2 += 20;
  }

  afficherMoins() {
    this.random2 = UserService.random2;
  }

  returnAleatoire() {
    this.pokemonData = UserService.pokeData;
  }

  info(text: any) {
    this.http
      .get(`https://api.tcgdex.net/v2/fr/cards/${text}`)
      .subscribe((data) => {
        this.infoPokemon = data;
        this.infoAffichage = this.infoPokemon;
        this.infoAffichageType = this.infoPokemon.types;
        this.infoAffichageAttacks = this.infoPokemon.attacks;
      });
  }

  randomToClick: boolean = false;
  toClick: boolean = false;

  carteToClick() {
    this.toClick = !this.toClick;
    this.randomToClick = !this.randomToClick;
  }

  carteRecherche(index: any) {
    this.id = this.pokemonsearch[index].id;
    this.image = this.pokemonsearch[index].image;
    this.info(this.id);
    this.toClick = !this.toClick;
    this.randomToClick = !this.randomToClick;
  }

  carte(index: number): void {
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
  moins() {
    UserService.decrementNumbers();
    this.nombre = UserService.nombretest;
  }

  recherche(stringSearch: string): void {
    this.pokemonData = UserService.pokeData;
    let result = [];
    stringSearch = stringSearch.toLowerCase();
    UserService.decrementNumbers();
    for (let i = 0; i < this.pokemonData.length; i++) {
      if (this.pokemonData[i].name.startsWith(stringSearch)) {
        result.push(this.pokemonData[i]);
      }
    }
    this.pokemonsearch = result;
    this.length = result.length;
  }

  init() {
    this.search = '';
    this.pokemonsearch = [];
  }

  getPokemonData(): Observable<any> {
    return this.pokemonData;
  }
}
