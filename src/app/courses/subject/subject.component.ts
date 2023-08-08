import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "./subject";

@Component({
  selector: 'wije-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectData!: Subject;
  registerSubject!: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'image'];
  dataSource!: any[];
  selectedImageURL!: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerSubject = this.fb.group({
      id: new FormControl('', {
        validators: [Validators.required]
      }),
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      image: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }


  addSubject(registerSubject: FormGroup) {
    if(registerSubject.valid){
      this.subjectData = {
        id:registerSubject.get('id')?.value,
        name:registerSubject.get('name')?.value,
        image:registerSubject.get('image')?.value
      }
    //  Push to array
    }
  }

  resetForm(registerSubject: FormGroup) {
    registerSubject.patchValue({
      id:'',
      name:'',
      image:'',
    });

  }

  getSelectedImage(event: any) {
    console.log(event);
  }

  getImageURL(event: any) {
    console.log(event);

  }
}
