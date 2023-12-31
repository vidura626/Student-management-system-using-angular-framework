import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../db/teacher.service";
import {FormDataInterface} from "../student/student/register/formDataInterface";

@Component({
  selector: 'wije-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements OnInit {
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

  saveTeacher(event: any) {
    this.teacherService.saveTeacher(event);
    this.teachersList = this.teacherService.getAllTeachers();
    this.teachersList = [...this.teachersList];
  }

  ngOnInit(): void {
    this.teachersList = this.teacherService.getAllTeachers();
  }
}
