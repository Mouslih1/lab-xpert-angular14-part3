import { TestBed } from '@angular/core/testing';

import { AuthentificationGuardService } from './authentification.guard.service';

describe('AuthentificationGuardService', () => {
  let service: AuthentificationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
