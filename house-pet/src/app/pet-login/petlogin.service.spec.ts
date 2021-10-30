import { TestBed } from '@angular/core/testing';

import { PetloginService } from './petlogin.service';

describe('PetloginService', () => {
  let service: PetloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
