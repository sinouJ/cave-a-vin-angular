import { Utilisateur } from '../../model';

export interface UtilisateurDAO {
  findUtilisateurById(id: number): Utilisateur | undefined;
  findUtilisateurByNom(nom: string): Utilisateur | undefined;
  findAllUtilisateurs(): Utilisateur[];
  createUtilisateur(
    nom: string,
    motDePasse: string,
  ): Utilisateur;
  saveUtilisateur(utilisateur: Utilisateur): void;
  removeUtilisateur(utilisateur: Utilisateur): void;
}
