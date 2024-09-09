import { TestBed } from '@angular/core/testing';

import { ElectricalEngineerService } from './electrical-engineer.service';

describe('ElectricalEngineerService', () => {
  let service: ElectricalEngineerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricalEngineerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
