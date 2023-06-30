import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  myForm = new FormGroup({
    name: new FormControl(""),
    surname: new FormControl(""),
    mail: new FormControl(""),
    message: new FormControl(""),
    });
    submitMyform(){
      console.log(this.myForm.value.surname)
      this.Ifsubmit = true;
    }

    Ifsubmit : boolean = false;

    left : boolean = true;

    change(){
      this.left = !this.left;
    }

}
