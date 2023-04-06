import { Utilisateur } from '../model';

export interface GestionUtilisateurs {
  findUtilisateurById(id: number): Utilisateur | undefined;
  findUtilisateurByNom(nom: string): Utilisateur | undefined;
  findAllUtilisateurs(): Array<Utilisateur>;
  createUtilisateur(prenom: string, nom: string): Utilisateur;
  saveUtilisateur(utilisateur: Utilisateur): void;
  removeUtilisateur(utilisateur: Utilisateur): void;

  validerLogin(nom: string, mdp: string): void;
}
