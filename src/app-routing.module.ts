import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {CoursesComponent} from "./app/courses/courses.component";
import {RegisterCourseComponent} from "./app/courses/register-course/register-course.component";
import {SubjectComponent} from "./app/courses/subject/subject.component";
import {LoginComponent} from "./app/login/login.component";
import {NavbarComponent} from "./app/navbar/navbar.component";
import {StudentComponent} from "./app/student/student/student.component";
import {loginStudentGuard} from "./app/guards/LoginStudent.guard";
import {RegisterComponent} from "./app/student/student/register/register.component";
import {TableComponent} from "./app/student/student/table/table.component";
import {TeacherComponent} from "./app/teacher/teacher.component";
import {loginTeacherGurad} from "./app/guards/login-teacher.gurad";

const routes: Routes = [

  // {path: "", redirectTo: "/login", pathMatch: "full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
