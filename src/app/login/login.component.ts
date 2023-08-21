import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output() logEvent = new EventEmitter();

  constructor(private studentService: StudentService
    , private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) {

     studentService.saveStudent({
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
         email: "sfsf@gmail.com",
       }
     )

    this.loginForm = formBuilder.group({
      email: new FormControl(
        'sfsf@gmail.com',
        {
          validators: [
            Validators.required,
            Validators.email,
            CustomValidators.emailValidator
          ],
          updateOn: 'blur'
        }),
      password: new FormControl('VI12!@swefwe', {
        validators: [Validators.required,
          CustomValidators.passwordValidator]
      }),
      rememberMe: new FormControl(false),
      role: new FormControl('student', [Validators.required]),
    })

  }

  login(event: any) {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      if (this.loginForm.get('role')?.value === 'student') {
        this.loginService.isStudent = true;
        this.loginService.isTeacher = false;
      } else if (this.loginForm.get('role')?.value === 'teacher') {
        this.loginService.isStudent = false;
        this.loginService.isTeacher = true;
      }
      this.loginService.isLogin = true;
      this.loginService.isLogout = false;
      if (this.loginForm.get('rememberMe')?.value === true) {
        this.loginService.rememberMe = true;
      } else {
        this.loginService.rememberMe = false;
      }
      this.loginService.email = this.loginForm.get('email')?.value;
      console.log(this.loginService);
      if (this.loginService.isStudent) {
        // this.router.navigate(['/student']);
        this.router.navigate(['/student']);
        this.logEvent.emit(this.loginService.isStudent);
      } else if (this.loginService.isTeacher) {
        this.router.navigate(['/teacher']);
        this.logEvent.emit(this.loginService.isTeacher);
      }
    }
  }


  restLoginForm(event: any) {
    event.target.reset();
  }
}
