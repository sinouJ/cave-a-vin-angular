import { Vin, Appellation, Couleur } from '../../model';

export interface VinDAO {
  findVinById(id: number): Vin | undefined;
  findAllVins(): Vin[];
  findVinsByAppellations(appellation: Appellation): Vin[];
  createVin(
    nom: string,
    couleur: Couleur,
    millesime: string,
    appellation: Appellation
  ): Vin;
  saveVin(vin: Vin): void;
  removeVin(vin: Vin): void;
}
