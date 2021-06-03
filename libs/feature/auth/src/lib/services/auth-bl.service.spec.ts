import { TestBed } from '@angular/core/testing';

import { AuthBlService } from './auth-bl.service';

describe('AuthBlService', () => {
  let service: AuthBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
