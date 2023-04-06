import { RegionViticole } from './region-viticole';

export class Appellation {
  constructor(
    public readonly id: number,
    public readonly nom: string,
    public readonly region: RegionViticole
  ) {}

  public toString(): string {
    return 'Appellation : ' + this.nom;
  }
}
