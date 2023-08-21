import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'wije-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  private breakpointObserver = inject(BreakpointObserver);
  public isStudent: boolean = false;
  public isTeacher: boolean = false;

  constructor(private loginService: LoginService) {
    this.isStudent = loginService.isStudent;
    this.isTeacher = loginService.isTeacher;
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
