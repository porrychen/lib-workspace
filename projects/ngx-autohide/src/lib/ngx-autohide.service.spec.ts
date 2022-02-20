import { TestBed } from '@angular/core/testing';

import { NgxAutohideService } from './ngx-autohide.service';

describe('NgxAutohideService', () => {
  let service: NgxAutohideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAutohideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
