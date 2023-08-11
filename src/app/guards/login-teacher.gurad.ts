import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../services/login.service";
import {TeacherService} from "../../db/teacher.service";

export const loginTeacherGurad: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  let teacherService = inject(TeacherService);

  const b = loginService.isLogin && loginService.isTeacher && !loginService.isStudent;
  let c: boolean = false;

  teacherService.getAllTeachers().filter(teacher => {
    console.log(b);
    if (teacher.email === loginService.email && b) {
      c = true;
      console.log("Yes")
      return true;
    } else {
      console.log("No")
      return router.navigate(['/login']);;
    }
  })
  console.log("Hee")
  return (b && c) ? true : router.navigate(['/login']);
};
