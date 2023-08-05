import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {RegisterComponent} from "../student/student/register/register.component";
import {TableComponent} from "../student/student/table/table.component";
import {Router} from "@angular/router";
import {TeacherService} from "../../db/teacher.service";

@Component({
  selector: 'wije-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeacherComponent implements AfterViewInit {
  @ViewChild('formRegister', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  constructor(private router: Router,
              private teacherService: TeacherService) {
  }

  registerComponent!: any;
  tableComponent!: any;
  showRegister: boolean = false;
  showView: boolean = false;
  showOne: boolean = true;

  ngAfterViewInit(): void {
    if (!this.showRegister) {
      this.createRegister();
    }

  }

  createRegister() {
    this.registerComponent = this.vcr.createComponent(RegisterComponent);
    this.registerComponent.instance.title = "Teacher";
    this.showRegister = true;
  }

  createTable() {
    this.tableComponent = this.vcr.createComponent(TableComponent);
    this.showView = true;
  }

  registerTeacher() {
    if (!this.showRegister) {
      this.vcr.detach();
      this.createRegister();
      this.showView=false;
    }
    console.log(this.vcr);
  }

  viewTeachers() {
    if (!this.showView) {
      this.vcr.detach();
      this.createTable();
      this.showRegister=false;
    }
    this.teacherService.teachersAr = [this.registerComponent?.instance?.formData];
    this.tableComponent.instance.allData = this.teacherService.teachersAr;
    this.tableComponent.instance.setTable();
  }

}
