import { Cave, Utilisateur, Bouteille } from '../../model';
import { CaveDAO } from '../dao/cave.dao';

export class CaveDAOMemory implements CaveDAO {
  private generatedId = 0;
  private cavesById = new Map<number, Cave>();

  public findCaveById(id: number): Cave | undefined {
    return this.cavesById.get(id);
  }

  public createCave(nom: string, proprietaire: Utilisateur): Cave {
    const cave = new Cave(this.generatedId++, nom, proprietaire);
    this.cavesById.set(cave.id, cave);
    proprietaire.cave = cave;
    return cave;
  }

  public saveCave(cave: Cave): void {
    // Rien à faire
  }

  public findNbBouteillesByCave(cave: Cave): number {
    return cave.nbBouteilles;
  }

  public findNbEmplacementsLibresByCave(cave: Cave): number {
    return cave.nbEmplacementsLibres;
  }

  public findDerniereBouteilleBueByCave(cave: Cave): Bouteille | undefined {
    return cave.derniereBouteilleBue;
  }

  public findDernieresBouteillesBuesByCave(cave: Cave, nbBouteilles?: number): Bouteille[] {
    return cave.dernieresBouteillesBues(nbBouteilles);
  }
}
