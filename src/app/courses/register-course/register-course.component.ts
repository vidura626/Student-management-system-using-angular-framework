import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'wije-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit{

  registerCourse!:FormGroup;
  constructor(private fb:FormBuilder) {

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
      cost:new FormControl('',{
        validators:[Validators.required]
    })

    });
  }

  selectedFile: any = null;

  onFileSelected(event:any): void {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
}
