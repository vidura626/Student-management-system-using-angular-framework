import {Component} from '@angular/core';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'wije-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean = false;
  title = 'StudentManagementSystem';

  constructor(private loginService: LoginService) {
    this.isLoggedIn = loginService.isLogin;
  }
}
