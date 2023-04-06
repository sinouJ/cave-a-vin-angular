import { Cave, Utilisateur, Rangement, Bouteille, Vin, Appellation, Couleur } from '../model';

export interface GestionCaves {
  findCaveById(id: number): Cave | undefined;
  createCave(nom: string, proprietaire: Utilisateur): Cave;
  saveCave(cave: Cave): void

  findRangementById(id: number): Rangement | undefined;
  createRangement(cave: Cave, nom: string, hauteur: number, largeur: number): Rangement;
  saveRangement(rangement: Rangement): void;
  removeRangement(rangement: Rangement): void;
  findNbEmplacementsLibresByCave(cave: Cave): number;

  findBouteilleById(id: number): Bouteille | undefined;
  findAllBouteillesByCave(cave: Cave): Array<Bouteille>;
  findAllBouteillesBuesByCave(cave: Cave): Array<Bouteille>;
  findNbBouteillesByCave(cave: Cave): number;
  findBouteillesByAppellations(appellation: Appellation): Array<Bouteille>;

  createBouteille(vin: Vin, contenance: number): Bouteille;
  createBouteilles(vin: Vin, contenance: number, quantite: number): Array<Bouteille>;
  createVinEtBouteille(
    nom: string,
    couleur: Couleur,
    millesime: string,
    appellation: Appellation,
    contenance: number
  ): Bouteille;
  createVinEtBouteilles(
    nom: string,
    couleur: Couleur,
    millesime: string,
    appellation: Appellation,
    contenance: number,
    quantite: number
  ): Array<Bouteille>;
  saveBouteille(bouteille: Bouteille): void;
  removeBouteille(bouteille: Bouteille): void;
  findDerniereBouteilleBueByCave(cave: Cave): Bouteille | undefined;
  findDernieresBouteillesBuesByCave(cave: Cave, nombre?: number): Array<Bouteille>;
}
