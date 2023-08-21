import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import {TeacherComponent} from "./teacher.component";
import {WijeTableModule} from "../student/student/table/wije-table.module";
import {WijeRegisterModule} from "../student/student/register/wije-register.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    WijeTableModule,
    WijeRegisterModule,
    MatButtonModule
  ]
})
export class TeacherModule {
}
