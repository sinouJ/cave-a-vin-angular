import { Utilisateur } from '../model';
import { CaveAVinService } from './cave-a-vin.factory';
import {Injectable} from '@angular/core';

// @Injectable()
export class SessionService {
  private currentUser: Utilisateur | undefined;

  constructor(private caveAVin: CaveAVinService) {}

  public login(prenom: string, nom: string): Utilisateur {
    // Utilisateur déjà en mémoire ?
    this.currentUser = this.caveAVin.gestionUtilisateurs.findUtilisateurByNom(nom);

    // L'utilisateur n'est pas reconnu, on crée un nouvel utilisateur
    if (!this.currentUser) {
      this.currentUser = this.caveAVin.gestionUtilisateurs.createUtilisateur(prenom, nom);
      this.caveAVin.remplirCave(this.currentUser);
    }

    return this.currentUser;
  }

  public deleteUser(user: Utilisateur): void {
    this.caveAVin.gestionUtilisateurs.removeUtilisateur(user);
  }

  public get user(): Utilisateur | undefined {
    return this.currentUser;
  }
}

export const SESSION = new SessionService(new CaveAVinService());
