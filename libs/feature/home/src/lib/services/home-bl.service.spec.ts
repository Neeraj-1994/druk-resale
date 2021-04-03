import { TestBed } from '@angular/core/testing';

import { HomeBlService } from './home-bl.service';

describe('HomeBlService', () => {
  let service: HomeBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
