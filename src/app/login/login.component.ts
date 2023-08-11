import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginInterface} from "./login-interface";
import {StudentService} from "../../db/student.service";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {CustomValidators} from "../Validtors/custom-validators";

@Component({
  selector: 'wije-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() title: string = 'login';
  loginForm!: FormGroup;
  loginDetail!: LoginInterface;

  constructor(private studentService: StudentService
    , private formBuilder: FormBuilder,
              private router: Router,
              private loginServie: LoginService) {

    /* studentService.saveStudent({
         id: "1",
         fName: "vidur",
         lName: "kumar",
         nic: "1234567890",
         address: {
           district: "kottayam",
           line01: "kottayam",
           postalCode: 686001,
           town: "kottayam"
         },
         contact: [
           {
             description: "home",
             number: 123456789,
           }
         ],
         birthday: new Date(),
         email: "vidura@gmail.com",
       }
     )*/

    this.loginForm = formBuilder.group({
      email: new FormControl(
        '',
        {
          validators: [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator
          ],
          updateOn: 'blur'
        }),
      password: new FormControl('', {
        validators: [Validators.required,
          CustomValidators.passwordValidator],
        updateOn: 'blur'
      }),
      rememberMe: new FormControl(false),
      role: new FormControl('', [Validators.required]),
    })

  }

  login(event: any) {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      if (this.loginForm.get('role')?.value === 'student') {
        this.loginServie.isStudent = true;
        this.loginServie.isTeacher = false;
      } else if (this.loginForm.get('role')?.value === 'teacher') {
        this.loginServie.isStudent = false;
        this.loginServie.isTeacher = true;
      }
      this.loginServie.isLogin = true;
      this.loginServie.isLogout = false;
      if (this.loginForm.get('rememberMe')?.value === true) {
        this.loginServie.rememberMe = true;
      } else {
        this.loginServie.rememberMe = false;
      }
      this.loginServie.email = this.loginForm.get('email')?.value;

      if (this.loginServie.isStudent) {
        this.router.navigateByUrl('student');
      } else if (this.loginServie.isTeacher) {
        this.router.navigateByUrl('teacher');
      }
    }
  }


  restLoginForm(event
                  :
                  any
  ) {
    event.target.reset();
  }
}
