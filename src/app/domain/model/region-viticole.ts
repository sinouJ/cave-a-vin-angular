import { Appellation } from './appellation';

export class RegionViticole {
  private appellations = new Set<Appellation>();

  constructor(
    public readonly id: number,
    public readonly nom: string,
    public readonly pays: string
  ) {}

  public getAppellations(): Appellation[] {
    return Array.from(this.appellations);
  }

  public ajouterAppellation(appellation: Appellation): void {
    this.appellations.add(appellation);
  }

  public supprimerAppellation(appellation: Appellation): void {
    if (this.appellations.has(appellation)) {
      this.appellations.delete(appellation);
    }
  }

  public setAppellations(appellations: Appellation[]) {
    this.appellations = new Set(appellations);
  }

  public toString(): string {
    return 'Région : ' + this.nom;
  }
}
