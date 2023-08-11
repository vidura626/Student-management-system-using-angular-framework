import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {StudentComponent} from "./app/student/student/student.component";
import {RegisterComponent} from "./app/student/student/register/register.component";
import {TableComponent} from "./app/student/student/table/table.component";
import {TeacherComponent} from "./app/teacher/teacher.component";
import {CoursesComponent} from "./app/courses/courses.component";
import {RegisterCourseComponent} from "./app/courses/register-course/register-course.component";
import {SubjectComponent} from "./app/courses/subject/subject.component";
import {LoginComponent} from "./app/login/login.component";
import {loginGuard} from "./app/guards/login.guard";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: "student", component: StudentComponent,
    canActivate: [loginGuard],
    children: [
      {path: "", component: RegisterComponent},
      {path: "view", component: TableComponent,},
    ]
  },
  {
    path: "teacher", component: TeacherComponent,
    canActivate: [loginGuard],
    children: [
      {path: "", component: RegisterComponent},
      {path: "view", component: TableComponent,},
    ]
  },
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
  {path: "", redirectTo: "/login", pathMatch: "full"},

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
