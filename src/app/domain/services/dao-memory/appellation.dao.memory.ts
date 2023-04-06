import { AppellationDAO } from '../dao/appellation.dao';
import { Appellation, RegionViticole } from '../../model';

export class AppellationDAOMemory implements AppellationDAO {
  private generatedId = 0;
  private appellationsByNom = new Map<string, Appellation>();
  private appellationsById = new Map<number, Appellation>();

  public findAppellationById(id: number): Appellation | undefined {
    return this.appellationsById.get(id);
  }

  public findAppellationByNom(nom: string): Appellation | undefined {
    return this.appellationsByNom.get(nom);
  }

  public findAllAppellations(): Appellation[] {
    return Array.from(this.appellationsById.values());
  }

  public createAppellation(nom: string, region: RegionViticole): Appellation {
    const appellation = new Appellation(this.generatedId++, nom, region);
    this.appellationsById.set(appellation.id, appellation);
    this.appellationsByNom.set(appellation.nom, appellation);
    region.ajouterAppellation(appellation);
    return appellation;
  }

  public saveAppellation(appellation: Appellation): void {
    // Rien à faire
  }

  public removeAppellation(appellation: Appellation): void {
    this.appellationsById.delete(appellation.id);
    this.appellationsByNom.delete(appellation.nom);
    appellation.region.supprimerAppellation(appellation);
  }
}
