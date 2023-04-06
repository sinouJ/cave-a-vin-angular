import { Bouteille, Utilisateur, Cave } from '../../model';

export interface CaveDAO {
  findCaveById(id: number): Cave | undefined;
  createCave(nom: string, proprietaire: Utilisateur): Cave;
  saveCave(cave: Cave): void;
  findNbBouteillesByCave(cave: Cave): number;
  findNbEmplacementsLibresByCave(cave: Cave): number;
  findDerniereBouteilleBueByCave(cave: Cave): Bouteille | undefined;
  findDernieresBouteillesBuesByCave(cave: Cave, nbBouteilles?: number): Bouteille[];
}
