import { RegionViticole } from '../../model';

export interface RegionViticoleDAO {
  findRegionById(id: number): RegionViticole | undefined;
  findRegionByNom(nom: string): RegionViticole | undefined;
  findAllRegions(): RegionViticole[];
  createRegion(nom: string, pays: string): RegionViticole;
  saveRegion(region: RegionViticole): void;
  removeRegion(region: RegionViticole): void;
}
