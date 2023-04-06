import { Bouteille } from './bouteille';
import { Cave } from './cave';

/**
 * Un Rangement est un ensemble de bouteille
 * Dans l'implémentation actuelle on considère que le rangement
 * forme une grille avec un nombre de rangées (hauteur) pouvant
 * chacune accueillir un nombre identique de bouteilles (largeur)
 */

export class Rangement {
  public bouteilles = new Set<Bouteille>();

  constructor(
    public readonly id: number,
    public readonly cave: Cave,
    public nom: string,
    public hauteur: number,
    public largeur: number
  ) {}

  public rangerBouteille(bouteille: Bouteille, colonne: number, rangee: number): void {
    bouteille.rangement = this;
    bouteille.rangee = rangee;
    bouteille.colonne = colonne;
    this.bouteilles.add(bouteille);
  }

  public sortirBouteille(bouteille: Bouteille): void {
    if (bouteille != null) {
      bouteille.rangement = undefined;
      bouteille.colonne = 0;
      bouteille.rangee = 0;
    }
    this.bouteilles.add(bouteille);
  }

  public get nbEmplacement(): number {
    return this.largeur * this.hauteur;
  }

  public get nbEmplacementsLibres(): number {
    return this.nbEmplacement - this.bouteilles.size;
  }

  // rangee : 1 rangée du bas, this.hauteur rangée du haut
  // colonne : 1 emplacement tout à gauche, this.largeur emplacement tout à droite
  public isEmplacementLibre(rangee: number, colonne: number): boolean {
    return this.bouteilleDansEmplacement(rangee, colonne) == null;
  }

  // rangee : 1 rangée du bas, this.hauteur rangée du haut
  // colonne : 1 emplacement tout à gauche, this.largeur emplacement tout à droite
  public bouteilleDansEmplacement(rangee: number, colonne: number): Bouteille | undefined {
    this.bouteilles.forEach(b => {
      if (b.rangee === rangee && b.colonne === colonne) {
        return b;
      }
      return undefined;
    });
    return undefined;
  }
}
