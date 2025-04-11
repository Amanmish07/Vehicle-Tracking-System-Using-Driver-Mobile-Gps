import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { driverAuthGuard } from './driver-auth.guard';

describe('driverAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => driverAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
