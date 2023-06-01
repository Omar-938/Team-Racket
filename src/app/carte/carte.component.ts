import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, min } from 'rxjs';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  random : number =   Math.round(Math.random()*80);
  random2 : number = this.random + 20;

  

/*
bon lien 
https://api.pokemontcg.io/v2/cards?q=set.id:base1 name:${pokemonTest}
 "https://api.pokemontcg.io/v2/cards?q=set.id:base1 rarity:Common types:Colorless" */
/*
https://api.pokemontcg.io/v2/cards?q=set.id:base1 rarity:Common types:Colorless name:doduo*&pageSize=12
*/

pokemonSearch : string= "";
pokemonData : any;



  constructor(public http : HttpClient){};


  

  ngOnInit(): void {
    /*let pokemonTest = this.pokemonSearch;*/
    this.http.get<any>(`https://api.pokemontcg.io/v2/cards?q=set.id:base1`).subscribe(reponse => 
      {
        
        this.pokemonData = reponse.data;
        for (let i = 0 ; i < 5 ; i++){
          this.pokemonData[i];
        }
      });
}
/*test():void {
  this.http.get<any>(this.baseUrl).subscribe(reponse2 => 
    {
      console.log(reponse2) 
    });
}
*/
 


  
}
 
  
 


export class Pokemon{
  constructor(
public name : string,
public hp : number,
public level : number,
public imgSmall : string,
public imgTall : string,
public evolution : string,
public types : any,
  ){}
}

   
  
  





