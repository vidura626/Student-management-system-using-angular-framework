import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {CoursesComponent} from "./courses.component";
import {RegisterCourseComponent} from "./register-course/register-course.component";
import {SubjectComponent} from "./subject/subject.component";
import {CourseCardComponent} from "./view/course-card/course-card.component";
import {CourseCardContainerComponent} from "./view/course-card-container/course-card-container.component";
import {CourseHeaderComponent} from "./course-header/course-header.component";
import {CourseContainerComponent} from "./course-container/course-container.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    CoursesComponent,
    RegisterCourseComponent,
    SubjectComponent,
    CourseCardComponent,
    CourseCardContainerComponent,
    CourseHeaderComponent,
    CourseContainerComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    MatBadgeModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CourseModule {
}
