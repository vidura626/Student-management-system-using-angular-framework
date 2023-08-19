import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {loginStudentGuard} from './LoginStudent.guard';

describe('loginGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => loginStudentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
