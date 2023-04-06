import { Rangement } from './rangement';
import { Commentaire } from './commentaire';
import { Vin } from './vin';

export class Bouteille {
  public prix: number | undefined;
  public dateEntree: Date | undefined;
  public dateSortie: Date | undefined;
  public rangement: Rangement | undefined;
  public colonne: number | undefined;
  public rangee: number | undefined;
  public commentaire: Commentaire | undefined;

  constructor(
    public readonly id: number,
    public readonly vin: Vin,
    public readonly contenance: number
  ) {}

  public toString(): string {
    return (
      'Bouteille n°' +
      this.id +
      ' (' +
      this.contenance +
      'cl de ' +
      this.vin.appellation.nom +
      ' ' +
      this.vin.nom +
      ' ' +
      this.vin.millesime +
      ')'
    );
  }

  public isBue(): boolean {
    // Prévoir la gestion d'un état pour une bouteille : BUE, OFFERTE, Autre
    return this.dateSortie != null;
  }
}
