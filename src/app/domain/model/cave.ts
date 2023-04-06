import { Bouteille } from './bouteille';
import { Utilisateur } from './utilisateur';
import { Rangement } from './rangement';

export class Cave {
  private rangements = new Set<Rangement>();
  private bouteilles = new Set<Bouteille>();

  constructor(
    public readonly id: number,
    public nom: string,
    public readonly proprietaire: Utilisateur
  ) {}

  public toString(): string {
    return (
      'Cave : ' + this.nom + '(Utilisateur: ' + this.proprietaire.nom + ')'
    );
  }

  public get nbBouteilles(): number {
    return this.bouteilles.size;
  }

  public get nbEmplacementsLibres(): number {
    let nbEmplacementsLibres = 0;
    this.rangements.forEach(
      rangement => (nbEmplacementsLibres += rangement.nbEmplacementsLibres)
    );
    return nbEmplacementsLibres;
  }

  public get derniereBouteilleBue(): Bouteille {
    let result: Bouteille | undefined;
    this.bouteilles.forEach(b => {
      if (b.dateSortie && (!result || b.dateSortie > result.dateSortie!)) {
        result = b;
      }
    });
    return result!;
  }

  public dernieresBouteillesBues(nbBouteilles?: number): Bouteille[] {
    const result = new Array<Bouteille>();
    const sortBouteillesByDateSortie = (b1: Bouteille, b2: Bouteille) => {
      if (!b1.dateSortie) {return -1; }
      if (!b2.dateSortie) {return 1; }
      return (b1.dateSortie > b2.dateSortie) ? 1 : -1;
    };
    const filtered = Array.from(this.bouteilles).filter( b => b.dateSortie != null);
    const sorted = filtered.sort(sortBouteillesByDateSortie);
    // for (const b of sorted) { console.log(b.id + ' ' + b.dateSortie); }
    return nbBouteilles ? sorted.slice(-nbBouteilles) : sorted;
  }

  public ajouterRangement(rangement: Rangement): void {
    this.rangements.add(rangement);
  }

  public supprimerRangement(rangement: Rangement): void {
    this.rangements.delete(rangement);
  }

  public ajouterBouteille(bouteille: Bouteille): void {
    this.bouteilles.add(bouteille);
  }

  public supprimerBouteille(bouteille: Bouteille): void {
    this.bouteilles.delete(bouteille);
  }

  public getBouteilles(): Bouteille[] {
    return Array.from(this.bouteilles);
  }

  public getRangements(): Rangement[] {
    return Array.from(this.rangements);
  }
}
