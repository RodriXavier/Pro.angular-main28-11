import { TestBed } from '@angular/core/testing';

import { MarcaSService } from './marca-s.service';

describe('MarcaSService', () => {
  let service: MarcaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
