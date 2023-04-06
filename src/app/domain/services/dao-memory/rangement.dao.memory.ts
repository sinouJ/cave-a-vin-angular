import { RangementDAO } from '../dao/rangement.dao';
import { Rangement, Cave } from '../../model';

export class RangementDAOMemory implements RangementDAO {
  private generatedId = 0;
  private rangementsById = new Map<number, Rangement>();

  public findRangementById(id: number): Rangement | undefined {
    return this.rangementsById.get(id);
  }

  public createRangement(cave: Cave, nom: string, hauteur: number, largeur: number): Rangement {
    const rangement = new Rangement(this.generatedId++, cave, nom, hauteur, largeur);
    this.rangementsById.set(rangement.id, rangement);
    cave.ajouterRangement(rangement);
    return rangement;
  }

  public saveRangement(rangement: Rangement): void {
    // Rien à faire;
  }

  public removeRangement(rangement: Rangement): void {
    rangement.cave.supprimerRangement(rangement);
    this.rangementsById.delete(rangement.id);
  }
}
