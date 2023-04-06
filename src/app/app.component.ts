import { Component } from '@angular/core';
import { SESSION } from './domain/services/session.service';

@Component({
  selector: 'cave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cave-a-vin-angular';

  constructor() {
    SESSION.login('Jordan', 'Sinou');
  }
}
