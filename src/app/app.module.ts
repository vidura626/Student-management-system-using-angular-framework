import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './student/student/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {TableComponent} from './student/student/table/table.component';
import {AppRoutingModule} from '../app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {CardNavComponent} from './TestingComponent/card-nav/card-nav.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {EmailValidatorDirectiveDirective} from './directives/email-validator-directive.directive';
import {MatRadioModule} from '@angular/material/radio';
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
    //
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    DragDropModule,
    MatBadgeModule,
    FontAwesomeModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
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
