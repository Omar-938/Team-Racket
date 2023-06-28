import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { NgModel } from "@angular/forms";
import { FormsModule } from "@angular/forms";




@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:  ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnecté, jeune dresseur.";
  name!: string;
  password!: string;
  auth: AuthService | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.auth = this.authService;
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "Vous êtes connecté{{name}}.";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }
  
  login() {
    this.message = "Tentative de connexion en cours...";
    this.authService
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          if (this.name === 'rachid' || this.name === 'damien' || this.name === 'olivier' || this.name === 'admin') {
            // Rediriger vers la page de profil avec le nom de l'utilisateur dans l'URL
            this.router.navigate(['/profil', this.name]);
          } else {
            this.router.navigate(["/default-page"]);
          }
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      });
  }

  logout(){
    this.authService.logout();
    this.message = 'Vous êtes déconnecté.';
  }
  
}
