import { TestBed } from '@angular/core/testing';

import { CenterRegistrationService } from './center-registration.service';

describe('CenterRegistrationService', () => {
  let service: CenterRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
