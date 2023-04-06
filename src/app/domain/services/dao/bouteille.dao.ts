import { Bouteille, Appellation, Cave, Vin } from '../../model';

export interface BouteilleDAO {
  findBouteilleById(id: number): Bouteille | undefined;
  findAllBouteilles(): Bouteille[];
  findBouteillesByAppellations(appellation: Appellation): Bouteille[];
  createBouteille(vin: Vin, contenance: number): Bouteille;
  saveBouteille(bouteille: Bouteille): void;
  removeBouteille(bouteille: Bouteille): void;
  findAllBouteillesByCave(cave: Cave): Bouteille[];
  findAllBouteillesBuesByCave(cave: Cave): Bouteille[];
}
