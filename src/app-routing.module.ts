import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {StudentComponent} from "./app/student/student/student.component";
import {RegisterComponent} from "./app/student/student/register/register.component";
import {TableComponent} from "./app/student/student/table/table.component";

const routes: Routes = [
  {path:"student", component:StudentComponent, children:[
      {path:"register", component:RegisterComponent},
      {path:"viewStudent", component:TableComponent},
    ]},
  {path:"", redirectTo:"/student",pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
