import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'wije-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrls: ['./log-out-dialog.component.css']
})
export class LogOutDialogComponent {
  constructor(public dialogRef: MatDialogRef<LogOutDialogComponent>) {
  }
}
