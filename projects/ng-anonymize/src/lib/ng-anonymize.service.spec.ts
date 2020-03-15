import { TestBed } from '@angular/core/testing';

import { NgAnonymizeService } from './ng-anonymize.service';

describe('NgAnonymizeService', () => {
  let service: NgAnonymizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAnonymizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
