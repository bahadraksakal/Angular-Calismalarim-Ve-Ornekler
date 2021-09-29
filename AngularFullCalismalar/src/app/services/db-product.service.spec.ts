import { TestBed } from '@angular/core/testing';

import { DbProductService } from './db-product.service';

describe('DbProductService', () => {
  let service: DbProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
