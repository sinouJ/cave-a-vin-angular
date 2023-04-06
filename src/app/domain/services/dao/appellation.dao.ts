import { Appellation, RegionViticole } from '../../model';

export interface AppellationDAO {
  findAppellationById(id: number): Appellation | undefined;
  findAppellationByNom(nom: string): Appellation | undefined;
  findAllAppellations(): Appellation[];
  createAppellation(nom: string, region: RegionViticole): Appellation;
  saveAppellation(appellation: Appellation): void;
  removeAppellation(appellation: Appellation): void;
}
