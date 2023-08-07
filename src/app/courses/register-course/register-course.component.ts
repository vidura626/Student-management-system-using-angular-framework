import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {TeacherService} from "../../../db/teacher.service";

@Component({
  selector: 'wije-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit{

  teachersID:string[] = [];
  registerCourse!:FormGroup;
  subjectIDs: any;
  constructor(private fb:FormBuilder,
              private teacherService:TeacherService) {

  }

  ngOnInit(): void {
    this.registerCourse = this.fb.group({
      id:new FormControl('',{
        validators:[Validators.required],
        updateOn:'blur'
      }),
      name:new FormControl('',{
        validators:[Validators.required],
        updateOn:'blur'
      }),
      description:new FormControl('',{
        validators:[Validators.required],
        updateOn:'blur'
      }),
      image:new FormControl('',{
        validators:[Validators.required],
        updateOn:'blur'
      }),
      teacherID:new FormControl('',{
        validators:[Validators.required],
        updateOn:'blur'
      }),
      subjectID:new FormControl('',{
        validators:[Validators.required],
        updateOn:"blur"
      }),
      price:new FormControl('',{
        validators:[Validators.required]
    })

    });
    // this.setTeacherIDs();
  }

  setTeacherIDs() {
    console.log("Teachers");
    console.log(this.teacherService?.getAllTeachers());
    this.teachersID = [];
    for (let teacher of this.teacherService?.getAllTeachers()) {
      this.teachersID.push(teacher.id.concat(' ').concat(teacher.fName)).toString();
      console.log(teacher);
    }
  }

  setSubjectIDs() {

  }
}
