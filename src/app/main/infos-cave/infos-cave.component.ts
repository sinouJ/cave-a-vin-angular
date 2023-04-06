import { Component, OnInit } from '@angular/core';
import { Bouteille, Vin } from 'src/app/domain/model';
import { Utilisateur } from 'src/app/domain/model/utilisateur';
import { SESSION } from 'src/app/domain/services/session.service';

@Component({
  selector: 'cave-infos-cave',
  templateUrl: './infos-cave.component.html',
  styleUrls: ['./infos-cave.component.scss']
})
export class InfosCaveComponent implements OnInit {
  utilisateur?: Utilisateur;
  nb_bouteilles?: number;
  nb_emplacements?: number;
  derniere_bouteille?: Bouteille

  constructor() { }

  ngOnInit(): void {
    this.utilisateur = SESSION.user;
    this.nb_bouteilles = this.utilisateur?.cave?.nbBouteilles
    this.nb_emplacements = this.utilisateur?.cave?.nbEmplacementsLibres
    this.derniere_bouteille = this.utilisateur?.cave?.derniereBouteilleBue
  }

}