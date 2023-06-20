import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail-carte',
  templateUrl: './detail-carte.component.html',
  styleUrls: ['./detail-carte.component.css']
})
export class DetailCarteComponent implements OnInit {

  constructor(private route:ActivatedRoute  private userService: UserService) {}

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get('name');
    if(pokemonName !== null){
      this.userService.getPokemonByName(pokemonName).subscribe((data) => {
        this.pokemon = data;
      });
    }
   
  }


}
