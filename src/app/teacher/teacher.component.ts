import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {RegisterComponent} from "../student/student/register/register.component";
import {TableComponent} from "../student/student/table/table.component";
import {Router} from "@angular/router";
import {TeacherService} from "../../db/teacher.service";
import {FormDataInterface} from "../student/student/register/formDataInterface";

@Component({
  selector: 'wije-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements AfterViewInit {
  teachersList: FormDataInterface[] = [];
  showReg: boolean = false;

  navigate(number: number) {
    if (number === 1) {
      this.showReg = false;
    } else {
      this.showReg = true;
    }
  }

  constructor(private teacherService: TeacherService) {
  }

  ngAfterViewInit(): void {

  }


  saveTeacher(event: any) {
    this.teacherService.saveTeacher(event);
    this.teachersList = this.teacherService.getAllTeachers();
    this.teachersList = [...this.teachersList];
  }
}
