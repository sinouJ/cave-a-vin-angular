import { GestionUtilisateurs } from './gestion-utilisateurs.service';
import { UtilisateurDAO } from './dao/utilisateur.dao';
import { Utilisateur } from '../model';

export class GestionUtilisateursImpl implements GestionUtilisateurs {
  constructor(private dao: UtilisateurDAO) {}

  public findUtilisateurById(id: number): Utilisateur | undefined {
    return this.dao.findUtilisateurById(id);
  }

  public findUtilisateurByNom(nom: string): Utilisateur | undefined {
    return this.dao.findUtilisateurByNom(nom);
  }

  public findAllUtilisateurs(): Utilisateur[] {
    return this.dao.findAllUtilisateurs();
  }

  public createUtilisateur(prenom: string, nom: string): Utilisateur {
    return this.dao.createUtilisateur(prenom, nom);
  }

  public saveUtilisateur(utilisateur: Utilisateur): void {
    this.dao.saveUtilisateur(utilisateur);
  }

  public removeUtilisateur(utilisateur: Utilisateur): void {
    this.dao.removeUtilisateur(utilisateur);
  }

  public validerLogin(_nom: string, _prenom: string) {
    return true;
  }
}
