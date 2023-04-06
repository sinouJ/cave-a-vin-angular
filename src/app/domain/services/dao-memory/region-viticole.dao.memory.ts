import { RegionViticoleDAO } from '../dao/region-viticole.dao';
import { RegionViticole } from '../../model';

export class RegionViticoleDAOMemory implements RegionViticoleDAO {
  private generatedId = 0;
  private regionsByNom = new Map<string, RegionViticole>();
  private regionsById = new Map<number, RegionViticole>();

  public findRegionById(id: number): RegionViticole | undefined {
    return this.regionsById.get(id);
  }

  public findRegionByNom(nom: string): RegionViticole | undefined {
    return this.regionsByNom.get(nom);
  }

  public findAllRegions(): RegionViticole[] {
    return Array.from(this.regionsById.values());
  }

  public createRegion(nom: string, pays: string): RegionViticole {
    const region = new RegionViticole(this.generatedId++, nom, pays);
    this.regionsById.set(region.id, region);
    this.regionsByNom.set(region.nom, region);
    return region;
  }

  public saveRegion(region: RegionViticole): void {
    // Rien à faire);
  }

  public removeRegion(region: RegionViticole): void {
    this.regionsById.delete(region.id);
    this.regionsByNom.delete(region.nom);
  }
}
