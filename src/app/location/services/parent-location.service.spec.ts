import { TestBed } from '@angular/core/testing';

import { ParentLocationService } from './parent-location.service';

describe('ParentLocationService', () => {
  let service: ParentLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
