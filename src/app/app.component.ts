import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { useAnimation } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})

export class AppComponent{
  title = 'Team_Racket';
myForm = new FormGroup({
name: new FormControl(""),
surname: new FormControl(""),
mail: new FormControl(""),
message: new FormControl(""),
});

}





 
