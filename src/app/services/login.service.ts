import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email!: string;
  // password!:string;
  rememberMe: boolean = false;
  // error:string,
  // success:string,
  isLogin: boolean = false;
  isRegister: boolean = false;
  // isForgotPassword:boolean,
  // isChangePassword:boolean,
  isLogout: boolean = true;
  // isProfile:boolean,
  // isEditProfile:boolean,
  isTeacher: boolean = false;
  isStudent: boolean = false;

  constructor() {

  }
}
