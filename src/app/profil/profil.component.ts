import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  nomUtilisateur: string = '';
  photoUrl: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.nomUtilisateur = this.route.snapshot.paramMap.get('nom')?? '';
    console.log(this.nomUtilisateur);

    if (this.nomUtilisateur === 'rachid') {
      this.photoUrl = 'https://assets.tcgdex.net/fr/bw/bw4/86/low.jpg';
    } else if (this.nomUtilisateur === 'damien') {
      this.photoUrl = 	'https://assets.tcgdex.net/fr/swsh/swsh8/241/low.jpg';
    } else if (this.nomUtilisateur === 'olivier') {
      this.photoUrl = 'https://assets.tcgdex.net/fr/xy/xy1/115/low.jpg';
    }
    else if (this.nomUtilisateur === 'admin') {
      this.photoUrl = 'https://www.pikastore.fr/5906-large_default/-fr-pokemon-carte-eb02-189192-ordres-du-boss-giovanni.jpg';

  }
}
}
