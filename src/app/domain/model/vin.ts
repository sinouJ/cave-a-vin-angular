import { Couleur, Appellation } from '.';

export class Vin {
  constructor(
    public readonly id: number,
    public readonly nom: string,
    public readonly couleur: Couleur,
    public readonly millesime: string,
    public readonly appellation: Appellation
  ) {}
}
