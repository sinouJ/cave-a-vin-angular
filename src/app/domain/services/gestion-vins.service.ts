import { RegionViticole, Appellation, Couleur, Vin } from '../model';

export interface GestionVins {
  findRegionById(id: number): RegionViticole | undefined;
  findRegionByNom(nom: string): RegionViticole | undefined;
  findAllRegions(): Array<RegionViticole>;
  createRegion(nom: string, pays: string): RegionViticole;
  saveRegion(region: RegionViticole): void;
  removeRegion(region: RegionViticole): void;

  findAppellationById(id: number): Appellation | undefined;
  findAllAppellations(): Array<Appellation>;
  createAppellation(nom: string, region: RegionViticole): Appellation;
  saveAppellation(appellation: Appellation): void;
  removeAppellation(appellation: Appellation): void;

  findVinById(id: number): Vin | undefined;
  findAllVins(): Array<Vin>;
  findVinsByAppellations(appellation: Appellation): Array<Vin>;
  createVin(nom: string, couleur: Couleur, millesime: string, appellation: Appellation): Vin;
  saveVin(vin: Vin): void;
  removeVin(vin: Vin): void;
}
