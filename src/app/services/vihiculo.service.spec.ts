import { TestBed } from '@angular/core/testing';

import { VihiculoService } from './vihiculo.service';

describe('VihiculoService', () => {
  let service: VihiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VihiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
