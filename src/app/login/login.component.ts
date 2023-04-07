import { Component } from "@angular/core";

@Component({
  selector: "cave-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss", "./css/animate-custom.css", "./css/style.css", "./css/cave.css"]
})

export class LoginComponent {
  title = "cave-a-vin-angular";

  connexion(nom: string, prenom: string): void {
    console.log(nom, prenom)
  }
}