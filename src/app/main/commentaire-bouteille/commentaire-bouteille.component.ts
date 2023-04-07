import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/domain/model/commentaire';
import { SESSION } from 'src/app/domain/services/session.service';

@Component({
  selector: 'cave-commentaire-bouteille',
  templateUrl: './commentaire-bouteille.component.html',
  styleUrls: ['./commentaire-bouteille.component.scss']
})
export class CommentaireBouteilleComponent implements OnInit {
  commentaire?: Commentaire

  constructor() { }

  ngOnInit(): void {
    this.commentaire = SESSION.user?.cave?.derniereBouteilleBue.commentaire;
  }
}
