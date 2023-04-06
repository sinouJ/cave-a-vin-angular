import { GestionCaves } from './gestion-caves.service';
import { GestionUtilisateurs } from './gestion-utilisateurs.service';
import { GestionVins } from './gestion-vins.service';
import { GestionUtilisateursImpl } from './gestion-utilisateurs.impl';
import { GestionVinsImpl } from './gestion-vins.impl';
import { GestionCavesImpl } from './gestion-caves.impl';
import { RegionViticoleDAOMemory } from './dao-memory/region-viticole.dao.memory';
import { BouteilleDAOMemory } from './dao-memory/bouteille.dao.memory';
import { AppellationDAOMemory } from './dao-memory/appellation.dao.memory';
import { CaveDAOMemory } from './dao-memory/cave.dao.memory';
import { RangementDAOMemory } from './dao-memory/rangement.dao.memory';
import { VinDAOMemory } from './dao-memory/vin.dao.memory';
import { UtilisateurDAOMemory } from './dao-memory/utilisateur.dao.memory';
import { Vin, Couleur, Utilisateur, Commentaire, Bouteille, Rangement, Cave } from '../model';

export class CaveAVinService {
  public readonly gestionUtilisateurs: GestionUtilisateurs;
  public readonly gestionVins: GestionVins;
  public readonly gestionCaves: GestionCaves;

  constructor() {
    this.gestionUtilisateurs = new GestionUtilisateursImpl(new UtilisateurDAOMemory());
    this.gestionVins = new GestionVinsImpl(
      new RegionViticoleDAOMemory(),
      new AppellationDAOMemory(),
      new VinDAOMemory()
    );
    this.gestionCaves = new GestionCavesImpl(
      new BouteilleDAOMemory(),
      new CaveDAOMemory(),
      new RangementDAOMemory(),
      new VinDAOMemory()
    );
  }

  public remplirCave(user: Utilisateur): void {
    const alsace = this.gestionVins.createRegion('Alsace', 'France');
    const bordeaux = this.gestionVins.createRegion('Bordeaux', 'France');
    const loire = this.gestionVins.createRegion('Vallée de la Loire', 'France');
    const provence = this.gestionVins.createRegion('Provence', 'France');
    const jura = this.gestionVins.createRegion('Jura', 'France');
    const bourgogne = this.gestionVins.createRegion('Bourgogne', 'France');

    const margaux = this.gestionVins.createAppellation('Margaux', bordeaux);
    const saintEmilion = this.gestionVins.createAppellation('Saint-Emilion', bordeaux);
    const sauternes = this.gestionVins.createAppellation('Sauternes', bordeaux);
    const riesling = this.gestionVins.createAppellation('Riesling', alsace);
    const muscadet = this.gestionVins.createAppellation('Muscadet sur Lie', loire);
    const grosPlant = this.gestionVins.createAppellation('Gros Plant', loire);
    const saumur = this.gestionVins.createAppellation('Saumur', loire);
    const sancerre = this.gestionVins.createAppellation('Sancerre', loire);
    const macon = this.gestionVins.createAppellation('Mâcon', bourgogne);
    const nuitSaintGeorges = this.gestionVins.createAppellation('Nuit-Saint-Georges', bourgogne);
    const pommard = this.gestionVins.createAppellation('Pommard', bourgogne);
    const saintJulien = this.gestionVins.createAppellation('Saint-Julien', bordeaux);
    const sylvaner = this.gestionVins.createAppellation('Saumur', alsace);
    const gewurztraminer = this.gestionVins.createAppellation('Gewürztraminer', alsace);
    const cotesDeProvence = this.gestionVins.createAppellation('Côtes-de-Provence', provence);
    const bandol = this.gestionVins.createAppellation('Bandol', provence);
    const vinDePaille = this.gestionVins.createAppellation('Vin de Paille', jura);

    // Prévoir création aléatoire des millésimes
    // Faire en sorte de ne pas être incohérent en spécifiant une ancienneté minimale
    // ex : creerVinMillesimeAleatoire(nom, couleur, appelation, ageMaxi)
    const vins: Array<Vin> = [
      this.gestionVins.createVin('Les 3 Frères', Couleur.BLANC, '2002', muscadet),
      this.gestionVins.createVin('Château Yquem', Couleur.BLANC, '1978', sauternes),
      this.gestionVins.createVin('Château Margaux', Couleur.ROUGE, '1989', margaux),
      this.gestionVins.createVin('Château Ausone', Couleur.ROUGE, '1924', saintEmilion),
      this.gestionVins.createVin('Château Cheval Blanc', Couleur.ROUGE, '1947', saintEmilion),
      this.gestionVins.createVin('René SCHWARTZ', Couleur.BLANC, '2003', riesling),
      this.gestionVins.createVin('Le clos du pressoir', Couleur.ROUGE, '2002', saintEmilion),
      this.gestionVins.createVin('Château Talbot', Couleur.ROUGE, '1982', saintJulien),
      this.gestionVins.createVin('Château Saint-Pierre', Couleur.ROUGE, '1995', saintJulien),
      this.gestionVins.createVin('Domaine Kreydenweiss', Couleur.BLANC, '2001', sylvaner),
      this.gestionVins.createVin('Claude STICH', Couleur.BLANC, '1999', gewurztraminer),
      this.gestionVins.createVin('Bouchard', Couleur.ROUGE, '1997', nuitSaintGeorges),
      this.gestionVins.createVin('Domaine du maréchal', Couleur.BLANC, '2001', macon),
      this.gestionVins.createVin('Domaine Sorin', Couleur.BLANC, '2002', bandol),
      this.gestionVins.createVin('Château de la Bouilladisse', Couleur.ROSE, '2010', cotesDeProvence),
      this.gestionVins.createVin('Domaine de Vallet', Couleur.BLANC, '2013', grosPlant),
      this.gestionVins.createVin('Le clos du pressoir', Couleur.BLANC, '2009', sancerre),
      this.gestionVins.createVin('Cuvée des marmottes', Couleur.BLANC, '1995', vinDePaille)
    ];

    const cave = this.gestionCaves.createCave('Cave de ' + user.prenom, user);
    this.creerRangementsAleatoirement(cave);
    this.remplirAleatoirement(cave, vins);
    this.boireAleatoirement(cave);
  }

  public creerRangementsAleatoirement(cave: Cave): void {
    // Création d'un nombre aléatoire de rangements pour la cave
    const nbRangement = Math.floor(Math.random() * 3) + 2;
    for (let rIndex = 0; rIndex < nbRangement; rIndex++) {
      // La largeur des rangements est aléatoire
      const largeur = Math.floor(Math.random() * 4) + 6;
      const rangement = this.gestionCaves.createRangement(cave, 'Rangement' + rIndex, 6, largeur);
    }
  }

  public remplirAleatoirement(cave: Cave, vins: Vin[]): void {
    const nbBouteillesACreer = Math.floor(cave.nbEmplacementsLibres * Math.random());
    for (let bIndex = 0; bIndex < nbBouteillesACreer; bIndex++) {
      const btl = this.genererBouteille(vins);
      cave.ajouterBouteille(btl);
      const rangementId = Math.floor(Math.random() * cave.getRangements().length);
      const rangement = cave.getRangements()[rangementId];
      rangementAleatoire(btl, cave);
    }
  }

  public genererBouteille(vins: Vin[]): Bouteille {
    // On choisit un vin au hasard
    const vin = vins[Math.floor(Math.random() * vins.length)];
    const btl = this.gestionCaves.createBouteille(vin, 75);
    btl.prix = prixAleatoire(3, 40);
    btl.dateEntree = dateAleatoire(+vin.millesime);
    return btl;
  }

  public boireAleatoirement(cave: Cave): void {
    // On boit un nombre aléatoire de bouteilles
    const nbMaxBouteillesBues = Math.floor(Math.random() * cave.nbBouteilles / 4) + 2;
    const bouteilles = cave.getBouteilles();
    for (let i = 0; i < nbMaxBouteillesBues; i++) {
      // Si la bouteille n'est pas déjà bue
      if (bouteilles[i].dateSortie == null) {
        bouteilles[i].rangement!.sortirBouteille(bouteilles[i]);
        bouteilles[i].dateSortie = dateAleatoire(bouteilles[i].dateEntree!.getFullYear() + 1);
        commentaireAleatoire(bouteilles[i]);
      }
    }
  }
}

function dateAleatoire(anneeDepart: number): Date {
  const min = new Date(anneeDepart, 0);
  const max = new Date();
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
}

function prixAleatoire(min: number, max: number): number {
  let prix = Math.floor(Math.random() * 2000) / 100 + 2;
  prix = Number.parseFloat(prix.toFixed(2));
  // const bonus = (Math.random() < 0.7) ? 1 : (Math.floor(Math.random() * 10));
  // prix = prix * bonus;
  return prix;
}

function rangementAleatoire(bouteille: Bouteille, cave: Cave) {
  const rangementId = Math.floor(Math.random() * cave.getRangements().length);
  const rangement = cave.getRangements()[rangementId];

  // Rangement aléatoire de la bouteille
  let rangee = Math.floor(Math.random() * rangement.hauteur) + 1;
  let colonne = Math.floor(Math.random() * rangement.largeur) + 1;
  while (!rangement.isEmplacementLibre(rangee, colonne)) {
    rangee = Math.floor(Math.random() * rangement.hauteur) + 1;
    colonne = Math.floor(Math.random() * rangement.largeur) + 1;
  }
  rangement.rangerBouteille(bouteille, colonne, rangee);
}

function commentaireAleatoire(bouteille: Bouteille): void {
  const commentairesTypes = [
    'Excellent ! :-)',
    'Beurk :-(',
    'Très goulayant :-)',
    'Tout juste bon pour les cochons ! :-(',
    'A boire sans soif'
  ];
  if (Math.random() < 0.5) {
    let contenu;
    let note = Math.floor(Math.random() * 6);
    const nomAppellation = bouteille.vin.appellation.nom;
    if (nomAppellation === 'muscadet' || nomAppellation === 'grosPlant') {
      contenu = 'Probablement le meilleur vin du monde ;-)';
      note = 5;
    } else {
      contenu = commentairesTypes[Math.floor(Math.random() * commentairesTypes.length)];
    }
    const comment = new Commentaire(0, contenu, note, bouteille.dateSortie!);
    bouteille.commentaire = comment;
  }
}

