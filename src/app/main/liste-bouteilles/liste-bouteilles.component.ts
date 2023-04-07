import { Component, OnInit } from '@angular/core';
import { Bouteille } from 'src/app/domain/model/bouteille';
import { Utilisateur } from 'src/app/domain/model/utilisateur';
import { SESSION } from 'src/app/domain/services/session.service';

@Component({
  selector: 'cave-liste-bouteilles',
  templateUrl: './liste-bouteilles.component.html',
  styleUrls: ['./liste-bouteilles.component.scss']
})
export class ListeBouteillesComponent implements OnInit{
  utilisateur?: Utilisateur
  bouteilles?: Bouteille[]

  constructor() { }

  ngOnInit() {
    this.utilisateur = SESSION.user
    this.bouteilles = this.utilisateur?.cave?.dernieresBouteillesBues();
  }

}
