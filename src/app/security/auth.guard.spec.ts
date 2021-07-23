import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';

class FakeRouter{

}

class FakeAuthenticationService{

}

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: AuthenticationService, useClass: FakeAuthenticationService},
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
