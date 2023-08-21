import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import {NavbarComponent} from "./navbar.component";
import {CardNavComponent} from "../TestingComponent/card-nav/card-nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    NavbarComponent,
    CardNavComponent,
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ]
})
export class NavModule { }
