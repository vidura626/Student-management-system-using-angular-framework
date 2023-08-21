import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {faClose, faHome, faSignOut} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder} from "@angular/forms";
import {MediaMatcher} from "@angular/cdk/layout";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {StudentComponent} from "../../../../student/student/student.component";
import {TeacherComponent} from "../../../../teacher/teacher.component";
import {LogOutDialogComponent} from "./dialogs/log-out-dialog/log-out-dialog.component";
import {LoginComponent} from "../../../../login/login.component";
import {LoginService} from "../../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'wije-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() title!: string;

  @Output() logEvent = new EventEmitter();
  protected readonly faSignOut = faSignOut;
  dialogRef!: MatDialogRef<LogOutDialogComponent>;
  isStudent: boolean = false;
  isTeacher: boolean = false;

  constructor(private matDialog: MatDialog, private loginService: LoginService,
              private router: Router) {
    this.isStudent = loginService.isStudent;
    this.isTeacher = loginService.isTeacher;
  }

  checkLogin() {
    this.dialogRef = this.matDialog.open(LogOutDialogComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if (result) {
        this.loginService.logOut()
      }
      console.log(this.loginService);
      this.logEvent.emit(this.loginService.isLogin);
    })
  }

}
