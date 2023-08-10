import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "./subject";
import {SubjectService} from "../../../db/subject.service";

@Component({
  selector: 'wije-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjectData!: Subject;
  registerSubject!: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'image'];
  dataSource: any[] = [];
  selectedImageURL: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder,
              private subjectService:SubjectService) {
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
    this.setTable();
  }

  setTable(){
    for (const subject of this.subjectService.getAllSubjects()) {
      this.dataSource.push(subject);
    };
  }

  addSubject(registerSubject: FormGroup) {
    if (registerSubject.valid) {
      this.subjectData = {
        id: registerSubject.get('id')?.value,
        name: registerSubject.get('name')?.value,
        image: registerSubject.get('image')?.value
      }
      console.log(this.subjectData);
      //  Push to array

      this.subjectService.saveSubject(this.subjectData);
      this.dataSource = [...this.dataSource, this.subjectData];
    }
    this.resetForm(registerSubject);
  }

  resetForm(registerSubject: FormGroup) {
    //reset form with patch value
    registerSubject.setValue({
      id: '',
      name: '',
      image: '',
    });
    this.selectedImageURL = null;
  }

  getSelectedImage(event: any) {
    //show image
    this.selectedImageURL = event.target.files?.item(0).name;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files?.item(0));
    fileReader.onload = () => {
      this.selectedImageURL = fileReader.result;
    }
  }

  getImageURL(event: any) {
    console.log(event);
  }
}
