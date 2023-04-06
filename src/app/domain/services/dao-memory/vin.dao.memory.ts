import { VinDAO } from '../dao/vin.dao';
import { Vin, Appellation, Couleur } from '../../model';

export class VinDAOMemory implements VinDAO {
  private generatedId = 0;
  private vinsByNom = new Map<string, Vin>();
  private vinsById = new Map<number, Vin>();

  public findVinById(id: number): Vin | undefined {
    return this.vinsById.get(id);
  }

  public findAllVins(): Vin[] {
    return Array.from(this.vinsById.values());
  }

  public findVinsByAppellations(appellation: Appellation): Vin[] {
    return this.findAllVins().filter(v => v.appellation === appellation);
  }

  public createVin(nom: string, couleur: Couleur, millesime: string, appellation: Appellation): Vin {
    const vin = new Vin(this.generatedId++, nom, couleur, millesime, appellation);
    this.vinsById.set(vin.id, vin);
    this.vinsByNom.set(vin.nom, vin);
    return vin;
  }

  public saveVin(vin: Vin): void {
    // Rien à faire;
  }

  public removeVin(vin: Vin): void {
    this.vinsById.delete(vin.id);
    this.vinsByNom.delete(vin.nom);
  }
}
