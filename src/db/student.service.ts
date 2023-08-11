import {Injectable} from '@angular/core';
import {FormDataInterface} from "../app/student/student/register/formDataInterface";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  deleteStudent(id: string) {

    this.studentsAr = this.studentsAr.filter((element) => {
      return element.id !== id;
    });

  }

  public studentsAr: FormDataInterface[] = [];

  saveStudent(student: FormDataInterface): boolean {
    console.log(student);
    this.studentsAr.push(student);
    return true;
  }

  searchStudent(id: string) {
    let find = this.studentsAr.find((element) => {
      return element.id === id ? element : null;
    });
    console.log(find);
    return find;
  }

  getAllStudents(): FormDataInterface[] {
    return this.studentsAr;
  }
}
