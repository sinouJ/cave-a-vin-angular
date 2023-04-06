import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services/session.service';

@Component({
  selector: 'cave-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent implements OnInit {
  
  constructor(private utilisateur?: Utilisateur) {
    this.utilisateur = utilisateur;
  }

  ngOnInit(): void {
    this.utilisateur = SESSION.user;
  }
}
