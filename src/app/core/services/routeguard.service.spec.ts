import { TestBed } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';

describe('RouteguardService', () => {
  let service: RouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
