import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ActivatedRoute, RouterModule} from "@angular/router";
import { PanelComponent } from './dashboard/components/panel/panel.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import { LogOutDialogComponent } from './dashboard/components/panel/dialogs/log-out-dialog/log-out-dialog.component';
import {LoginModule} from "../login/login.module";
import { CardComponent } from './dashboard/components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import { DashComponent } from './dashboard/components/dash/dash.component';

@NgModule({
  declarations: [
    LogOutDialogComponent,
    DashboardComponent,
    PanelComponent,
    CardComponent,
    DashComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatButtonToggleModule,
    MatListModule,
    LoginModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
