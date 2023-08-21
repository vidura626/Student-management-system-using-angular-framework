import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {loginStudentGuard} from "../guards/LoginStudent.guard";
import {RegisterComponent} from "./student/register/register.component";
import {TableComponent} from "./student/table/table.component";

const routes: Routes = [
  {
    path: "student", component: StudentComponent,
    canActivate: [loginStudentGuard],
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
export class StudentRoutingModule { }
