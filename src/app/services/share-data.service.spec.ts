import { TestBed } from '@angular/core/testing';

import { ShareDataService } from './share-data.service';

describe('ShareDataService', () => {
  let service: ShareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update studentName using setStudentName()', (done) => {
    service.setStudentName('Pravin');
    service.studentName.subscribe(value => {
      expect(value).toBe('Pravin');
      done();
    });
  });

    // Test for setUserName() with Signal
    it('should update userName using setUserName()', () => {
      service.setUserName('Pravin Chavan');
      expect(service.userName()).toBe('Pravin Chavan');
    });
  
    // Test for getData()
    it('should return expected data from getData()', (done) => {
      service.getData().subscribe(data => {
        expect(data).toEqual({ name: 'John Doe', age: 30 });
        done();
      });
    });
});
