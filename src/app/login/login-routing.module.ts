import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login.component";
import {StudentComponent} from "../student/student/student.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {TeacherComponent} from "../teacher/teacher.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'student', component: StudentComponent
  },
  {
    path: 'teacher', component: TeacherComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
