import { Injectable } from '@angular/core';
import {StudentInterface} from "../app/student/student/register/student.interface";
import {elementAt} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {




  constructor() { }

  deleteStudent(id:string){

    this.studentsAr = this.studentsAr.filter((element) => {
      return element.id !==id;
    });

  }

  public studentsAr:StudentInterface[]=[];
  saveStudent(student: StudentInterface):boolean {
    console.log(student);
    this.studentsAr.push(student);
    return true;
  }

  searchStudent(id:string) {
    let find = this.studentsAr.find((element) => {
      return element.id===id? element: null;
    });
    console.log(find);
    return find;
  }

  getAllStudents():StudentInterface[]{
    return this.studentsAr;
  }
}
