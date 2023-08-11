import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'wije-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(private loginService:LoginService) {
  }
  logOut() {
    this.loginService.logOut();
  }
}
