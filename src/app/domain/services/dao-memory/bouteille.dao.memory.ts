import { BouteilleDAO } from '../dao/bouteille.dao';
import { Bouteille, Appellation, Cave, Vin } from '../../model';

export class BouteilleDAOMemory implements BouteilleDAO {
  private generatedId = 0;
  private bouteillesById = new Map<number, Bouteille>();

  public findBouteilleById(id: number): Bouteille | undefined {
    return this.bouteillesById.get(id);
  }

  public findAllBouteilles(): Bouteille[] {
    return Array.from(this.bouteillesById.values());
  }

  public findBouteillesByAppellations(appellation: Appellation): Bouteille[] {
    return this.findAllBouteilles().filter(b => b.vin.appellation === appellation);
  }

  public createBouteille(vin: Vin, contenance: number): Bouteille {
    const bouteille = new Bouteille(this.generatedId++, vin, contenance);
    this.bouteillesById.set(bouteille.id, bouteille);
    return bouteille;
  }

  public saveBouteille(bouteille: Bouteille): void {
    // rien à faire;
  }

  public removeBouteille(bouteille: Bouteille): void {
    this.bouteillesById.delete(bouteille.id);
  }

  public findAllBouteillesByCave(cave: Cave): Bouteille[] {
    return cave.getBouteilles();
  }

  public findAllBouteillesBuesByCave(cave: Cave): Bouteille[] {
    return this.findAllBouteillesBuesByCave(cave).filter(b => b.isBue);
  }
}
