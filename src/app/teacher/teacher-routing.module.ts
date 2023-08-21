import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from "./teacher.component";
import {loginTeacherGurad} from "../guards/login-teacher.gurad";
import {RegisterComponent} from "../student/student/register/register.component";
import {TableComponent} from "../student/student/table/table.component";

const routes: Routes = [
  {
    path: "teacher", component: TeacherComponent,
    canActivate: [loginTeacherGurad],
    children: [
      {path: "", component: RegisterComponent},
      {path: "view", component: TableComponent,},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
