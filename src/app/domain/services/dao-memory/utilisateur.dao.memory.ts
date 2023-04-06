import { UtilisateurDAO } from '../dao/utilisateur.dao';
import { Utilisateur } from '../../model';

export class UtilisateurDAOMemory implements UtilisateurDAO {
  private generatedId = 0;
  protected utilisateursByNom = new Map<string, Utilisateur>();
  protected utilisateursById = new Map<number, Utilisateur>();

  public findUtilisateurById(id: number): Utilisateur | undefined {
    return this.utilisateursById.get(id);
  }

  public findUtilisateurByNom(nom: string): Utilisateur | undefined {
    return this.utilisateursByNom.get(nom);
  }

  public findAllUtilisateurs(): Utilisateur[] {
    return Array.from(this.utilisateursById.values());
  }

  public createUtilisateur(prenom: string, nom: string): Utilisateur {
    const user = new Utilisateur(this.generateId(), prenom, nom);
    this.addUtilisateur(user);
    return user;
  }

  public saveUtilisateur(utilisateur: Utilisateur): void {
    // Rien à faire);
  }

  public removeUtilisateur(utilisateur: Utilisateur): void {
    this.utilisateursById.delete(utilisateur.id);
    this.utilisateursByNom.delete(utilisateur.nom);
  }

  public addUtilisateur(utilisateur: Utilisateur): void {
    this.utilisateursById.set(utilisateur.id, utilisateur);
    this.utilisateursByNom.set(utilisateur.nom, utilisateur);
  }

  public generateId(): number {
    return this.generatedId++;
  }
}
