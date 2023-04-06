export class Commentaire {
  constructor(
    public readonly id: number,
    public contenu: string,
    public note: number,
    public date: Date
  ) {}
}
