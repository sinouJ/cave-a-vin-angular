import { Cave, Vin } from '.';

export class Utilisateur {
  public cave: Cave | undefined;
  public vinsFavoris: Vin[] | undefined;

  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public initiales?: string,
    public email?: string
  ) {
    if (initiales == null) {
      this.initiales = (prenom.substr(0, 1) + nom.substr(0, 1)).toUpperCase();
    }
  }
}
