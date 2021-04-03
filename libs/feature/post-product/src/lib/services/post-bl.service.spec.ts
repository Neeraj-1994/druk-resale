import { TestBed } from '@angular/core/testing';

import { PostBlService } from './post-bl.service';

describe('PostBlService', () => {
  let service: PostBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
