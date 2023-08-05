import { Injectable } from '@angular/core';
import {FormDataInterface} from "../app/student/student/register/formDataInterface";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  deleteStudent(id:string){

    this.coursesAr = this.coursesAr.filter((element) => {
      return element.id !==id;
    });

  }

  public coursesAr:FormDataInterface[]=[];

  saveCourse(course: FormDataInterface):boolean {
    console.log(course);
    this.coursesAr.push(course);
    return true;
  }

  searchCourse(id:string) {
    let find = this.coursesAr.find((element) => {
      return element.id===id? element: null;
    });
    console.log(find);
    return find;
  }

  getAllCourses():FormDataInterface[]{
    return this.coursesAr;
  }
}
