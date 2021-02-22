import { TestBed } from '@angular/core/testing';

import { ProductBlService } from './product-bl.service';

describe('ProductBlService', () => {
  let service: ProductBlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
