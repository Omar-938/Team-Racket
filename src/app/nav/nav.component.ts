import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
search: string= "";
cacher: boolean = false;
pokeData : any;
cacher1 : boolean = true;
pokeImage : string = "";


retour(){
  
  this.search = "";
  this.cacher = false;
  this.cacher1 = true;
}
constructor(public http : HttpClient){};

rechercher(){
 
  this.cacher = true;
  this.cacher1 = false;

  
    this.http.get<any>(`https://api.pokemontcg.io/v2/cards?q=set.id:base1 name:${this.search}`).subscribe(reponse => 
      {
         this.pokeData = reponse.data;
         this.pokeImage = this.pokeData[0].images.large;
       });
}




}
