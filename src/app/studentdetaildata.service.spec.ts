import { TestBed } from '@angular/core/testing';

import { StudentdetaildataService } from './studentdetaildata.service';

describe('StudentdetaildataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentdetaildataService = TestBed.get(StudentdetaildataService);
    expect(service).toBeTruthy();
  });
});
