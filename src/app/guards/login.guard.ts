import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";




export const loginGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  return true;
};
