import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StudentComponent} from "./student/student.component";
import {WijeRegisterModule} from "./student/register/wije-register.module";
import {WijeTableModule} from "./student/table/wije-table.module";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    StudentComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    WijeRegisterModule,
    WijeTableModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class StudentModule { }
