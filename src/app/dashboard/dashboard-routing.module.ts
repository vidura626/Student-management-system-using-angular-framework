import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "../login/login.component";
import {PanelComponent} from "./dashboard/components/panel/panel.component";
import {StudentComponent} from "../student/student/student.component";
import {TeacherComponent} from "../teacher/teacher.component";

const routes: Routes = [
  {
    path: 'dashboard', component: PanelComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'student', component: StudentComponent
  },
  {
    path: 'teacher', component: TeacherComponent
  },
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
