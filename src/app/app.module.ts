import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './layout/dashboard.component';
import { UserButtonComponent } from './header/user-button/user-button.component';
import { InfosCaveComponent } from './main/infos-cave/infos-cave.component';
import { DetailBouteilleComponent } from './main/detail-bouteille/detail-bouteille.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    DashboardComponent,
    UserButtonComponent,
    InfosCaveComponent,
    DetailBouteilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
