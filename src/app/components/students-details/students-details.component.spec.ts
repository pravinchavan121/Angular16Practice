import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailsComponent } from './students-details.component';
import { ShareDataService } from 'src/app/services/share-data.service';
import { BehaviorSubject, of } from 'rxjs';

describe('StudentsDetailsComponent', () => {
  let component: StudentsDetailsComponent;
  let fixture: ComponentFixture<StudentsDetailsComponent>;
  let shareDataService: ShareDataService;

  beforeEach(async () => {
    const mockShareDataService = {
      getData: () => of({ name: 'John Doe', age: 30 }),
      studentName: new BehaviorSubject<string>('Pravin'),
      userName: () => 'Pravin Chavan' // Simulating Angular Signal
    };

    await TestBed.configureTestingModule({
      declarations: [StudentsDetailsComponent],
      providers: [
        { provide: ShareDataService, useValue: mockShareDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsDetailsComponent);
    component = fixture.componentInstance;
    shareDataService = TestBed.inject(ShareDataService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // ✅ Test for constructor - should initialize user$
  it('should initialize user$ with getData()', (done) => {
    component.user$.subscribe(data => {
      expect(data).toEqual({ name: 'John Doe', age: 30 });
      done();
    });
  });

  // Test for getData() - should subscribe to studentName
  it('should update studentName when studentName Observable emits', () => {
    component.getData();
    expect(component.studentName).toBe('Pravin');

    // Simulate new value
    shareDataService.studentName.next('Chavan');
    expect(component.studentName).toBe('Chavan');
  });

  // Test for getData() - should set userName from shareDataService
  it('should set userName from ShareDataService', () => {
    component.getData();
    expect(component.userName()).toBe('Pravin Chavan');
  });

  it(`should have as title 1 'Student Name From Parent Using Subject'`, () => {
    const fixture = TestBed.createComponent(StudentsDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.title_1).toEqual('Student Name From Parent Using Subject');
  });

  it(`should have as title 2 'Username From Parent Using Signal'`, () => {
    const fixture = TestBed.createComponent(StudentsDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.title_2).toEqual('Username From Parent Using Signal');
  });

  it(`should have as title 3 'Username & Age from Parent Using Observable'`, () => {
    const fixture = TestBed.createComponent(StudentsDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.title_3).toEqual('Username & Age from Parent Using Observable');
  });
});