import {Component} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'wije-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn: boolean = false;
  title!: string;

  constructor(private loginService: LoginService) {
  }

  loginEvent(event: Event) {
    console.log(event);
    this.isLoggedIn = this.loginService.isLogin;

    if (this.isLoggedIn && this.loginService.isStudent) {
      this.title = "Student Dashboard";
    } else if (this.isLoggedIn && this.loginService.isTeacher) {
      this.title = "Teacher Dashboard";
      this.isLoggedIn = this.loginService.isLogin;
    }
  }

}
