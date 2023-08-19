import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {AppRoutingModule} from '../app-routing.module';
import {CardNavComponent} from './TestingComponent/card-nav/card-nav.component';
import {EmailValidatorDirectiveDirective} from './directives/email-validator-directive.directive';
import {CourseModule} from "./courses/course.module";
import {LoginModule} from "./login/login.module";
import {StudentModule} from "./student/student.module";
import {TeacherModule} from "./teacher/teacher.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardNavComponent,
    EmailValidatorDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatExpansionModule,
    AppRoutingModule,
    CourseModule,
    LoginModule,
    StudentModule,
    TeacherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
