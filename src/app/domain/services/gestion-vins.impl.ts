import { GestionVins } from './gestion-vins.service';
import { RegionViticoleDAO } from './dao/region-viticole.dao';
import { VinDAO } from './dao/vin.dao';
import { AppellationDAO } from './dao/appellation.dao';
import { RegionViticole, Appellation, Vin, Couleur } from '../model';

export class GestionVinsImpl implements GestionVins {
  constructor(
    private regDAO: RegionViticoleDAO,
    private appDAO: AppellationDAO,
    private vinDAO: VinDAO
  ) {}

  public findRegionById(id: number): RegionViticole | undefined {
    return this.regDAO.findRegionById(id);
  }

  public findRegionByNom(nom: string): RegionViticole | undefined {
    return this.regDAO.findRegionByNom(nom);
  }

  public findAllRegions(): RegionViticole[] {
    return this.regDAO.findAllRegions();
  }

  public createRegion(nom: string, pays: string): RegionViticole {
    let region = this.regDAO.findRegionByNom(nom);
    if (!region) {
      region = this.regDAO.createRegion(nom, pays);
    }
    return region;
  }

  public saveRegion(region: RegionViticole): void {
    this.regDAO.saveRegion(region);
  }

  public removeRegion(region: RegionViticole): void {
    this.regDAO.removeRegion(region);
  }

  public findAppellationById(id: number): Appellation | undefined {
    return this.appDAO.findAppellationById(id);
  }

  public findAppellationByNom(nom: string): Appellation | undefined {
    return this.appDAO.findAppellationByNom(nom);
  }

  public findAllAppellations(): Appellation[] {
    return this.appDAO.findAllAppellations();
  }

  public createAppellation(nom: string, region: RegionViticole): Appellation {
    let app = this.appDAO.findAppellationByNom(nom);
    if (!app) {
      app = this.appDAO.createAppellation(nom, region);
    }
    return app;
  }

  public saveAppellation(appellation: Appellation) {
    this.appDAO.saveAppellation(appellation);
  }

  public removeAppellation(appellation: Appellation) {
    this.appDAO.removeAppellation(appellation);
  }

  public findVinById(id: number): Vin | undefined {
    return this.vinDAO.findVinById(id);
  }

  public findAllVins(): Vin[] {
    return this.vinDAO.findAllVins();
  }

  public findVinsByAppellations(appellation: Appellation): Vin[] {
    return this.vinDAO.findVinsByAppellations(appellation);
  }

  public createVin(nom: string, couleur: Couleur, millesime: string, appellation: Appellation): Vin {
    return this.vinDAO.createVin(nom, couleur, millesime, appellation);
  }

  public saveVin(vin: Vin): void {
    this.vinDAO.saveVin(vin);
  }

  public removeVin(vin: Vin): void {
    this.vinDAO.removeVin(vin);
  }

}
