import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "../courses/courses.component";
import {RegisterCourseComponent} from "../courses/register-course/register-course.component";
import {SubjectComponent} from "../courses/subject/subject.component";

const routes: Routes = [
  {
    path: "course",
    component: CoursesComponent,
    children: [
      {path: "register", component: RegisterCourseComponent}
    ]
  },
  {
    path: "subject", component: SubjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
