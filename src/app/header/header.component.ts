import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();


  returnToRandom(){
    this.onButtonClick.emit();
  }
}
