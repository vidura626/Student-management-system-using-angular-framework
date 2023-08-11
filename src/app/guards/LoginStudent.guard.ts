import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../services/login.service";
import {StudentService} from "../../db/student.service";


export const loginStudentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  let studentService = inject(StudentService);

  const b = loginService.isLogin&&loginService.isStudent&&!loginService.isTeacher;
  let c:boolean = false;
  studentService.getAllStudents().find(student => {
    console.log(b);
    if (student.email === loginService.email&&b) {
      c = true;
      console.log("Yes")
      return true;
    } else {
      console.log("No")
      return router.navigate(['/login']);
    }
  })
  console.log("Hee")
  return (b&&c) ? true : router.navigate(['/login']);
}
