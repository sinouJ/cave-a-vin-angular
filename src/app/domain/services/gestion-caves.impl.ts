import { GestionCaves } from './gestion-caves.service';
import { BouteilleDAO } from './dao/bouteille.dao';
import { CaveDAO } from './dao/cave.dao';
import { RangementDAO } from './dao/rangement.dao';
import { VinDAO } from './dao/vin.dao';
import { Cave, Utilisateur, Rangement, Appellation, Bouteille, Vin, Couleur } from '../model';

export class GestionCavesImpl implements GestionCaves {
  constructor(
    private bouteilleDAO: BouteilleDAO,
    private caveDAO: CaveDAO,
    private rangementDAO: RangementDAO,
    private vinDAO: VinDAO
  ) {}

  public findCaveById(id: number): Cave | undefined {
    return this.caveDAO.findCaveById(id);
  }

  public createCave(nom: string, proprietaire: Utilisateur): Cave {
    return this.caveDAO.createCave(nom, proprietaire);
  }

  public saveCave(cave: Cave): void {
    this.caveDAO.saveCave(cave);
  }

  public findRangementById(id: number): Rangement | undefined {
    return this.rangementDAO.findRangementById(id);
  }

  public createRangement(cave: Cave, nom: string, hauteur: number, largeur: number): Rangement {
    return this.rangementDAO.createRangement(cave, nom, hauteur, largeur);
  }

  public saveRangement(rangement: Rangement): void {
    this.rangementDAO.saveRangement(rangement);
  }

  public removeRangement(rangement: Rangement): void {
    this.rangementDAO.removeRangement(rangement);
  }

  public findNbEmplacementsLibresByCave(cave: Cave): number {
    return this.caveDAO.findNbEmplacementsLibresByCave(cave);
  }

  public findBouteilleById(id: number): Bouteille | undefined {
    return this.bouteilleDAO.findBouteilleById(id);
  }

  public findAllBouteillesByCave(cave: Cave): Bouteille[] {
    return this.bouteilleDAO.findAllBouteillesByCave(cave);
  }

  public findAllBouteillesBuesByCave(cave: Cave): Bouteille[] {
    return this.bouteilleDAO.findAllBouteillesBuesByCave(cave);
  }

  public findNbBouteillesByCave(cave: Cave): number {
    return this.caveDAO.findNbBouteillesByCave(cave);
  }

  public findBouteillesByAppellations(appellation: Appellation): Bouteille[] {
    return this.bouteilleDAO.findBouteillesByAppellations(appellation);
  }

  public createBouteille(vin: Vin, contenance: number): Bouteille {
    return this.bouteilleDAO.createBouteille(vin, contenance);
  }

  public createBouteilles(vin: Vin, contenance: number, quantite: number): Bouteille[] {
    const result = new Array<Bouteille>();
    for (let i = 0; i < quantite; i++) {
      result.push(this.createBouteille(vin, contenance));
    }
    return result;
  }

  public createVinEtBouteille(
    nom: string,
    couleur: Couleur,
    millesime: string,
    appellation: Appellation,
    contenance: number
  ): Bouteille {
    // On devrait vérifier si le vin existe...
    const vin = this.vinDAO.createVin(nom, couleur, millesime, appellation);
    return this.bouteilleDAO.createBouteille(vin, contenance);
  }

  public createVinEtBouteilles(
    nom: string,
    couleur: Couleur,
    millesime: string,
    appellation: Appellation,
    contenance: number,
    quantite: number
  ): Bouteille[] {
    const result = new Array<Bouteille>();
    const vin = this.vinDAO.createVin(nom, couleur, millesime, appellation);
    for (let i = 0; i < quantite; i++) {
      result.push(this.createBouteille(vin, contenance));
    }
    return result;
  }

  public saveBouteille(bouteille: Bouteille): void {
    this.bouteilleDAO.saveBouteille(bouteille);
  }

  public removeBouteille(bouteille: Bouteille): void {
    this.bouteilleDAO.removeBouteille(bouteille);
  }

  public findDerniereBouteilleBueByCave(cave: Cave): Bouteille | undefined {
    return this.caveDAO.findDerniereBouteilleBueByCave(cave);
  }

  public findDernieresBouteillesBuesByCave(cave: Cave, nombre?: number): Bouteille[] {
    return this.caveDAO.findDernieresBouteillesBuesByCave(cave, nombre);
  }
}
