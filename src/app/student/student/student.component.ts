import {Component, OnInit} from '@angular/core';
import {FormDataInterface} from "./register/formDataInterface";
import {StudentService} from "../../../db/student.service";
import {RegisterComponent} from '../student/register/register.component';

@Component({
  selector: 'wije-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  showReg: boolean = false;
  studentList: FormDataInterface[] = [];

  constructor(private studentService: StudentService) {
  }

  navigate(number: number) {
    if (number === 1) {
      this.showReg = false;
    } else {
      this.showReg = true;
    }
  }


  addStudent(event: any) {
    this.studentService.saveStudent(event);
    this.studentList = this.studentService.getAllStudents();
    this.studentList = [...this.studentList];
  }

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
  }
}
