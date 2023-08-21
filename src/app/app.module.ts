import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';
import {CardNavComponent} from './TestingComponent/card-nav/card-nav.component';
import {EmailValidatorDirectiveDirective} from './directives/email-validator-directive.directive';
import {CourseModule} from "./courses/course.module";
import {LoginModule} from "./login/login.module";
import {StudentModule} from "./student/student.module";
import {TeacherModule} from "./teacher/teacher.module";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {NavModule} from "./navbar/nav.module";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatNativeDateModule,
    NavModule,
    // CourseModule,
    // LoginModule,
    // StudentModule,
    // TeacherModule,
    DashboardModule,
    AppRoutingModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
