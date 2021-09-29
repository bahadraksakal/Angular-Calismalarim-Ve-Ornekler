import { TestBed } from '@angular/core/testing';

import { AlertifylocaleService } from './alertifylocale.service';

describe('AlertifylocaleService', () => {
  let service: AlertifylocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifylocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
