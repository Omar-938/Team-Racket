import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dev-team',
  templateUrl: './dev-team.component.html',
  styleUrls: ['./dev-team.component.css']
})
export class DevTeamComponent implements OnInit
 {

  teamDev : any = [];


ngOnInit(): void {

  setTimeout(() => {
    for (let i = 0; i < 3500 ; i++){
      if(UserService.pokeData[i].name == 'damien'){

      this.teamDev.push(UserService.pokeData[i])

      }
      if(UserService.pokeData[i].name == 'olivier'){

        this.teamDev.push(UserService.pokeData[i])

        }
      if(UserService.pokeData[i].name == 'rachid'){

        this.teamDev.push(UserService.pokeData[i])
        }
    }
  }
    , 1000);
}

 }
