import { Component, OnInit } from '@angular/core';
import { Bouteille } from 'src/app/domain/model/bouteille';
import { SESSION } from 'src/app/domain/services/session.service';

@Component({
  selector: 'cave-detail-bouteille',
  templateUrl: './detail-bouteille.component.html',
  styleUrls: ['./detail-bouteille.component.scss']
})
export class DetailBouteilleComponent implements OnInit {

  bouteille?: Bouteille;

  constructor() { }

  ngOnInit(): void {
    this.bouteille = SESSION.user?.cave?.derniereBouteilleBue;
  }

}
