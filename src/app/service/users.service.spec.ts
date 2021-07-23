import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

class FakeHttpClient {

}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useClass: FakeHttpClient},
      ]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
