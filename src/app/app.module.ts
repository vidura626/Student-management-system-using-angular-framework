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
import {ReactiveFormsModule} from '@angular/forms';
import {StudentComponent} from './student/student/student.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './student/student/table/table.component';
import { AppRoutingModule } from '../app-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterCourseComponent } from './courses/register-course/register-course.component';
import {MatCardModule} from '@angular/material/card';
import { SubjectComponent } from './courses/subject/subject.component';
import { CourseCardComponent } from './courses/view/course-card/course-card.component';
import { CourseCardContainerComponent } from './courses/view/course-card-container/course-card-container.component';
import { CardNavComponent } from './TestingComponent/card-nav/card-nav.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CourseHeaderComponent } from './courses/course-header/course-header.component';
import { CourseContainerComponent } from './courses/course-container/course-container.component';
import {MatBadgeModule} from '@angular/material/badge';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmailValidatorDirectiveDirective } from './directives/email-validator-directive.directive';
import {MatRadioModule} from '@angular/material/radio'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    StudentComponent,
    TableComponent,
    TeacherComponent,
    CoursesComponent,
    RegisterCourseComponent,
    SubjectComponent,
    CourseCardComponent,
    CourseCardContainerComponent,
    CardNavComponent,
    CourseHeaderComponent,
    CourseContainerComponent,
    LoginComponent,
    EmailValidatorDirectiveDirective

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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
