import { Rangement, Cave } from '../../model';

export interface RangementDAO {
  findRangementById(id: number): Rangement | undefined;
  createRangement(
    cave: Cave,
    nom: string,
    hauteur: number,
    largeur: number
  ): Rangement;
  saveRangement(rangement: Rangement): void;
  removeRangement(rangement: Rangement): void;
}
