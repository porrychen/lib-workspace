import { TestBed } from '@angular/core/testing';

import { NgxConfirmationService } from './ngx-confirmation.service';

describe('NgxConfirmationService', () => {
  let service: NgxConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
