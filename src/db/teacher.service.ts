import { Injectable } from '@angular/core';
import {FormDataInterface} from "../app/student/student/register/formDataInterface";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  deleteTeacher(id:string){

    this.teachersAr = this.teachersAr.filter((element) => {
      return element.id !==id;
    });

  }

  public teachersAr:FormDataInterface[]=[];

  saveTeacher(student: FormDataInterface):boolean {
    console.log(student);
    this.teachersAr.push(student);
    return true;
  }

  searchTeacher(id:string) {
    let find = this.teachersAr.find((element) => {
      return element.id===id? element: null;
    });
    console.log(find);
    return find;
  }

  getAllTeachers():FormDataInterface[]{
    return this.teachersAr;
  }
}
