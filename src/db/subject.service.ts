import {Injectable} from '@angular/core';
import {Subject} from "../app/courses/subject/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  deleteSubject(id:string){

    this.subjectsAr = this.subjectsAr.filter((element) => {
      return element.id !==id;
    });

  }

  public subjectsAr:Subject[]=[];

  saveSubject(subject: Subject):boolean {
    console.log(subject);
    this.subjectsAr.push(subject);
    return true;
  }

  searchSubject(id:string) {
    let find = this.subjectsAr.find((element) => {
      return element.id===id? element: null;
    });
    console.log(find);
    return find;
  }

  getAllSubjects():Subject[]{
    return this.subjectsAr;
  }
}
