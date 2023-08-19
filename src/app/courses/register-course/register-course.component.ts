import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TeacherService} from "../../../db/teacher.service";
import {SubjectService} from "../../../db/subject.service";

@Component({
  selector: 'wije-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  teachersID: string[] = [];
  registerCourse!: FormGroup;
  subjectIDs: string[] = [];

  constructor(private fb: FormBuilder,
              private teacherService: TeacherService,
              private subjectService:SubjectService) {

  }


  ngOnInit(): void {
    this.registerCourse = this.fb.group({
      id: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      description: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      image: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      teacherID: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      subjectID: new FormControl('', {
        validators: [Validators.required],
        updateOn: "blur"
      }),
      price: new FormControl('', {
        validators: [Validators.required]
      })

    });
    this.setTeacherIDs();
    this.setSubjectIDs();
  }

  setTeacherIDs() {
    console.log("Teachers IDs loaded");
    console.log(this.teacherService?.getAllTeachers());
    this.teachersID = [];
    for (let subject of this.teacherService?.getAllTeachers()) {
      this.teachersID.push(subject.id.concat(' ').concat(subject.fName)).toString();
      console.log(subject);
    }
  }

  setSubjectIDs() {
    console.log("Subjects IDs loaded");
    console.log(this.subjectService.getAllSubjects());
    this.subjectIDs = [];
    for (let subject of this.subjectService?.getAllSubjects()) {
      this.subjectIDs.push(subject.id.concat(' ').concat(subject.name));
      console.log(subject);
    }
  }

  imageInputValidity:boolean = false;
  selectedImageURL: string| ArrayBuffer | null = null;
  getSelectedImage(event?: any) {
    if(event.target.files?.length){
      this.imageInputValidity = false;
    }else{
      this.imageInputValidity = true;
    }
    let fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      this.selectedImageURL = e.target.result;
    }
    fileReader.readAsDataURL(event);

  }
}
