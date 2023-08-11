import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginTeacherGurad } from './login-teacher.gurad';

describe('loginTeacherGuradGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => loginTeacherGurad(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
